// app/apilocal/cuestionarios/route.ts
import pool from '@/app/database';
import { NextResponse } from 'next/server';
import { GoogleGenerativeAI, HarmBlockThreshold, HarmCategory } from '@google/generative-ai';

// Carga la clave API desde las variables de entorno
const API_KEY = process.env.GOOGLE_API_KEY;

// Inicializa el cliente de Gemini
const genAI = new GoogleGenerativeAI(API_KEY || '');

export async function GET(request: Request) {
  try {
    const url = new URL(request.url);
    const materia = url.searchParams.get('materia');

    console.log("Materia solicitada: %s", materia);

    if (!materia) {
      return NextResponse.json({ error: 'Falta especificar la materia' }, { status: 400 });
    }

    const materiasPermitidas = ['bd', 'web', 'so'];
    if (!materiasPermitidas.includes(materia)) {
      return NextResponse.json({ error: 'Materia no válida' }, { status: 400 });
    }

    // --- 1. Obtener preguntas de la base de datos (tus 8 preguntas existentes) ---
    const [preguntasDB]: any = await pool.query(
      'SELECT id, materia, tipo, pregunta FROM preguntas WHERE materia = ? ORDER BY RAND() LIMIT 8',
      [materia]
    );

    let preguntasFinales = [];

    // Procesar las preguntas de la base de datos para incluir opciones
    const preguntasDBProcesadas = await Promise.all(
      preguntasDB.map(async (pregunta: any) => {
        if (pregunta.tipo === 'opcion') {
          const [opciones]: any = await pool.query(
            'SELECT id, opcion, respuesta FROM respuestas_opciones WHERE id_pregunta = ?',
            [pregunta.id]
          );
          return {
            ...pregunta,
            opciones: opciones.map((o: any) => ({
              id: o.id,
              texto: o.opcion,
              esCorrecta: o.respuesta
            }))
          };
        }
        return pregunta;
      })
    );

    preguntasFinales.push(...preguntasDBProcesadas); // Añade las preguntas de la DB a la lista final

    // --- 2. Generar 3 preguntas adicionales usando IA ---
    if (API_KEY) {
      const materiaNombreCompleto: { [key: string]: string } = {
        'bd': 'Base de Datos',
        'web': 'Programación Web',
        'so': 'Sistemas Operativos',
      };
      const nombreMateria = materiaNombreCompleto[materia] || materia;

      const model = genAI.getGenerativeModel({
        model: "gemini-1.5-flash",
        safetySettings: [
          { category: HarmCategory.HARM_CATEGORY_HATE_SPEECH, threshold: HarmBlockThreshold.BLOCK_NONE },
          { category: HarmCategory.HARM_CATEGORY_SEXUALLY_EXPLICIT, threshold: HarmBlockThreshold.BLOCK_NONE },
          { category: HarmCategory.HARM_CATEGORY_HARASSMENT, threshold: HarmBlockThreshold.BLOCK_NONE },
          { category: HarmCategory.HARM_CATEGORY_DANGEROUS_CONTENT, threshold: HarmBlockThreshold.BLOCK_NONE },
        ],
      });

      const prompt = `Genera 3 preguntas de opción múltiple relacionadas con el tema de "${nombreMateria}".
      Cada pregunta debe tener un máximo de 4 opciones y solo una debe ser correcta.
      Formatea la salida como un arreglo de objetos JSON. Cada objeto pregunta debe tener las siguientes propiedades:
      id (un número secuencial único para el examen, no de la base de datos), materia (el nombre corto de la materia, ej. 'bd'),
      tipo ("opcion"), pregunta (el enunciado de la pregunta), y opciones (un arreglo de objetos).
      Cada objeto de opción debe tener: id (un número secuencial único para el examen), texto (el texto de la opción), y esCorrecta (1 si es correcta, 0 si no).
      Asegúrate de que 'esCorrecta' sea 1 para solo una opción por pregunta.

      Ejemplo de formato:
      [
        {
          "id": 1001,
          "materia": "${materia}",
          "tipo": "opcion",
          "pregunta": "¿Cuál es un beneficio clave de usar bases de datos NoSQL?",
          "opciones": [
            {"id": 2001, "texto": "Consistencia estricta ACID", "esCorrecta": 0},
            {"id": 2002, "texto": "Escalabilidad horizontal flexible", "esCorrecta": 1},
            {"id": 2003, "texto": "Esquema relacional fijo", "esCorrecta": 0}
          ]
        }
      ]`;

      try {
        console.log('Intentando generar preguntas con IA para:', nombreMateria); // Log para ver si la solicitud se inicia
        const result = await model.generateContent(prompt);
        const response = await result.response;
        const text = response.text();
        console.log('Respuesta cruda de la IA:', text); // Log para ver la respuesta completa de la IA

        let iaQuestions: any[] = [];
        const jsonMatch = text.match(/```json\n([\s\S]*?)\n```/);
        
        if (jsonMatch && jsonMatch[1]) {
            try {
                iaQuestions = JSON.parse(jsonMatch[1]);
                console.log('Preguntas de IA parseadas del bloque de código.');
            } catch (parseError) {
                console.error('Error al parsear JSON del bloque de código de IA:', parseError);
            }
        } else {
            // Intenta parsear directamente si no hay bloque de código
            try {
                iaQuestions = JSON.parse(text);
                console.log('Preguntas de IA parseadas directamente del texto.');
            } catch (parseError) {
                console.error('Error al parsear JSON directamente del texto de IA:', parseError);
            }
        }

        // --- VALIDACIÓN ADICIONAL DE LA RESPUESTA DE LA IA ---
        if (!Array.isArray(iaQuestions) || iaQuestions.length === 0) {
            console.warn('La IA no devolvió un arreglo de preguntas válido o el arreglo está vacío.');
            iaQuestions = []; // Asegura que sea un array vacío si no es válido
        }

        // Asignar IDs únicos a las preguntas generadas por IA
        // Start ID from 10000 to minimize collision risk with existing DB IDs
        let currentId = 10000; 
        iaQuestions.forEach((q: any) => {
          q.id = currentId++;
          q.materia = materia; // Ensure 'materia' uses the 'dbName'
          if (q.opciones && Array.isArray(q.opciones)) {
            q.opciones.forEach((opt: any) => {
              opt.id = currentId++;
            });
          } else {
            q.opciones = []; // Ensure options array exists
            console.warn(`Pregunta de IA (ID ${q.id}) sin array de opciones válido.`);
          }
        });
        
        // Solo adjunta las preguntas de IA si el array no está vacío
        if (iaQuestions.length > 0) {
            preguntasFinales.push(...iaQuestions);
            console.log(`Se adjuntaron ${iaQuestions.length} preguntas de IA.`);
        } else {
            console.log('No se adjuntaron preguntas de IA válidas.');
        }

      } catch (iaError: any) {
        console.error('Error FATAL al generar preguntas con IA:', iaError.message);
        // Aquí no relanzamos el error para que la aplicación aún devuelva las preguntas de la DB
        // si la generación de IA falla, pero es importante loguearlo.
      }
    } else {
      console.warn('GOOGLE_API_KEY no configurada. No se generarán preguntas con IA.');
    }

    if (preguntasFinales.length === 0) {
      return NextResponse.json({ error: 'No se encontraron preguntas de la base de datos ni se pudieron generar con IA para esta materia' }, { status: 404 });
    }

    return NextResponse.json(preguntasFinales);

  } catch (error: any) {
    console.error('Error en la consulta o generación principal:', error);
    return NextResponse.json(
      { error: 'Error interno del servidor', details: error.message },
      { status: 500 }
    );
  }
}