// app/apilocal/resultados/route.ts
import { NextResponse } from 'next/server';
import { GoogleGenerativeAI, HarmBlockThreshold, HarmCategory } from '@google/generative-ai';

// NOTA: 'pool' ya no es necesario si no se interactúa con la base de datos en este archivo.
// Si aún lo necesitas para otras partes de tu aplicación que no están en este archivo,
// puedes mantener la importación, pero no se usará aquí.
// import pool from '@/app/database';


// Carga la clave API desde las variables de entorno
const API_KEY = process.env.GOOGLE_API_KEY;

// Inicializa el cliente de Gemini
const genAI = new GoogleGenerativeAI(API_KEY || '');

// Se configura el modelo con safetySettings AQUÍ, en getGenerativeModel
const model = genAI.getGenerativeModel({
  model: "gemini-1.5-flash", // Usamos gemini-1.5-flash como el modelo actual recomendado
  safetySettings: [
    { category: HarmCategory.HARM_CATEGORY_HATE_SPEECH, threshold: HarmBlockThreshold.BLOCK_NONE },
    { category: HarmCategory.HARM_CATEGORY_SEXUALLY_EXPLICIT, threshold: HarmBlockThreshold.BLOCK_NONE },
    { category: HarmCategory.HARM_CATEGORY_HARASSMENT, threshold: HarmBlockThreshold.BLOCK_NONE },
    { category: HarmCategory.HARM_CATEGORY_DANGEROUS_CONTENT, threshold: HarmBlockThreshold.BLOCK_NONE },
  ],
});


export async function POST(request: Request) {
  let finalScoreOutOf10 = 0; // Variable para almacenar la calificación final
  let gradedResponses = []; // Variable para almacenar las respuestas calificadas

  try {
    const body = await request.json();
    const { id_alumno, materia, respuestas_enviadas } = body;

    console.log('--- Calificación de Examen Iniciada ---');
    console.log('Datos de examen recibidos:', {
      id_alumno,
      materia,
      num_respuestas: respuestas_enviadas.length
    });

    if (!id_alumno || !materia || !Array.isArray(respuestas_enviadas)) {
      console.error('Error: Faltan datos obligatorios para calificar el examen.');
      return NextResponse.json({ error: 'Faltan datos obligatorios para calificar el examen' }, { status: 400 });
    }

    const materiasPermitidas = ['bd', 'web', 'so'];
    if (!materiasPermitidas.includes(materia)) {
      console.error('Error: Materia no válida para calificar.');
      return NextResponse.json({ error: 'Materia no válida para calificar' }, { status: 400 });
    }

    let score = 0;
    const totalQuestions = respuestas_enviadas.length;

    // NOTA: Ya no necesitamos consultar la base de datos para opciones correctas
    // porque el frontend ahora envía la 'pregunta_original' completa,
    // que incluye las opciones y cuál es la correcta.

    // --- Lógica de Calificación pregunta por pregunta ---
    for (const r of respuestas_enviadas) {
      let isCorrect: boolean | null = false;
      let feedback = '';
      let questionScore = 0;

      if (r.tipo === 'opcion') {
        const originalQuestion = r.pregunta_original;

        if (originalQuestion && originalQuestion.opciones && Array.isArray(originalQuestion.opciones)) {
            const correctOption = originalQuestion.opciones.find((opt: any) => opt.esCorrecta === 1);

            if (correctOption && r.respuesta_usuario === correctOption.texto) {
                isCorrect = true;
                feedback = 'Correcta';
                questionScore = 1;
            } else {
                isCorrect = false;
                feedback = `Incorrecta. La respuesta correcta era: ${correctOption?.texto || 'N/A'}`;
            }
        } else {
            // Caso de fallback si la pregunta original no tiene opciones correctamente estructuradas
            // Esto no debería ocurrir si el frontend siempre envía la estructura completa
            console.warn(`Advertencia: Pregunta de opción múltiple (ID: ${r.id_pregunta}) sin opciones originales válidas.`);
            isCorrect = null;
            feedback = 'Información de opciones original no disponible. Calificación manual requerida.';
        }

      } else if (r.tipo === 'abierta') {
        // --- Calificación de Preguntas Abiertas con IA ---
        const userResponse = r.respuesta_usuario as string;
        const originalQuestionText = r.pregunta_original.pregunta;

        if (userResponse && userResponse.trim() !== '' && originalQuestionText) {
          try {
            const aiPrompt = `Califica la siguiente respuesta a una pregunta abierta en una escala del 0 al 1.0 (siendo 1.0 perfecto). No respondas con texto, solo con el número decimal.
            Pregunta: "${originalQuestionText}"
            Respuesta del alumno: "${userResponse}"
            Dame retroalimentación breve (1-2 frases) sobre por qué se le dio esa calificación.
            
            Formato de salida JSON:
            {
              "calificacion": 0.X,
              "feedback": "Tu respuesta es..."
            }`;

            console.log(`[IA] Enviando a IA para calificar pregunta abierta (ID: ${r.id_pregunta}):`, aiPrompt.substring(0, 150) + '...');
            const aiResult = await model.generateContent(aiPrompt);
            const aiResponse = await aiResult.response;
            const aiText = aiResponse.text();
            console.log(`[IA] Respuesta cruda de IA para pregunta (ID: ${r.id_pregunta}):`, aiText);

            const jsonMatch = aiText.match(/```json\n([\s\S]*?)\n```/);
            let parsedAiResponse: { calificacion: number; feedback: string } | null = null;
            if (jsonMatch && jsonMatch[1]) {
                parsedAiResponse = JSON.parse(jsonMatch[1]);
            } else {
                parsedAiResponse = JSON.parse(aiText);
            }

            if (parsedAiResponse && typeof parsedAiResponse.calificacion === 'number' && typeof parsedAiResponse.feedback === 'string') {
              questionScore = parsedAiResponse.calificacion;
              feedback = parsedAiResponse.feedback;
              isCorrect = questionScore >= 0.5; // Considerar "correcta" si la IA da 0.5 o más
              console.log(`[IA] Pregunta (ID: ${r.id_pregunta}) Calificada por IA: ${questionScore.toFixed(2)}, Feedback: "${feedback}"`);
            } else {
              console.warn(`[IA] Advertencia: La IA no devolvió el formato esperado para la calificación de pregunta abierta (ID: ${r.id_pregunta}).`);
              isCorrect = null;
              feedback = 'Calificación IA no disponible o formato incorrecto. Requiere revisión manual.';
            }

          } catch (aiGradingError: any) {
            console.error(`[IA] Error al calificar pregunta abierta con IA (ID: ${r.id_pregunta}):`, aiGradingError.message);
            isCorrect = null;
            feedback = 'Error en la calificación por IA. Requiere revisión manual.';
          }
        } else {
          isCorrect = false;
          feedback = 'Respuesta vacía o pregunta original no disponible.';
          console.log(`[IA] Pregunta (ID: ${r.id_pregunta}) no calificada por IA: Respuesta vacía o pregunta original no disponible.`);
        }
      } else {
        isCorrect = null;
        feedback = 'Tipo de pregunta desconocido.';
      }

      // Suma el puntaje de la pregunta a la calificación total del examen
      score += questionScore;

      gradedResponses.push({
        id_pregunta: r.id_pregunta,
        tipo: r.tipo,
        pregunta: r.pregunta_original.pregunta, // Solo el texto de la pregunta para el log
        respuesta_usuario: r.respuesta_usuario,
        esCorrecta: isCorrect,
        feedback: feedback,
        puntaje_pregunta: questionScore
      });
    }

    // Calcular la calificación final sobre 10
    finalScoreOutOf10 = (totalQuestions > 0) ? (score / totalQuestions) * 10 : 0;
    const finalScorePercentage = (totalQuestions > 0) ? (score / totalQuestions) * 100 : 0;

    // --- Mostrar la calificación final y las respuestas calificadas en la consola ---
    console.log('\n--- Resumen de Calificación del Examen ---');
    console.log(`ID Alumno: ${id_alumno}`);
    console.log(`Materia: ${materia}`);
    console.log(`Total de preguntas: ${totalQuestions}`);
    console.log(`Puntaje bruto obtenido (suma de puntajes individuales): ${score.toFixed(2)}`);
    console.log(`Calificación Final (sobre 10): ${finalScoreOutOf10.toFixed(2)}`);
    console.log(`Calificación Final (porcentaje): ${finalScorePercentage.toFixed(2)}%`);
    console.log('Detalle de respuestas calificadas:');
    gradedResponses.forEach((res, index) => {
        console.log(`  ${index + 1}. Pregunta ID: ${res.id_pregunta}`);
        console.log(`     Tipo: ${res.tipo}`);
        console.log(`     Pregunta: "${res.pregunta.substring(0, 50)}..."`);
        console.log(`     Respuesta Usuario: "${String(res.respuesta_usuario).substring(0, 50)}..."`);
        console.log(`     ¿Es Correcta?: ${res.esCorrecta === true ? 'Sí' : res.esCorrecta === false ? 'No' : 'Revisar'}`);
        console.log(`     Puntaje Pregunta: ${res.puntaje_pregunta.toFixed(2)}`);
        console.log(`     Feedback: "${res.feedback}"`);
    });
    console.log('--- Fin de Calificación de Examen ---');

    // Devolver la calificación final al frontend
    return NextResponse.json(
      {
        message: 'Examen calificado exitosamente (resultados no guardados en DB)',
        calificacionFinal: finalScoreOutOf10.toFixed(2), // Calificación sobre 10
        calificacionPorcentaje: finalScorePercentage.toFixed(2), // Calificación en porcentaje para info
        respuestasCalificadas: gradedResponses // Opcional: devolver las respuestas calificadas para depuración en el frontend
      },
      { status: 200 }
    );
  } catch (error: any) {
    console.error('Error FATAL en el proceso de calificación:', error);
    return NextResponse.json(
      { error: 'Error interno del servidor al calificar resultados', details: error.message },
      { status: 500 }
    );
  }
}