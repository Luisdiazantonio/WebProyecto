'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { FaArrowLeft } from 'react-icons/fa';

interface Option {
  id: number;
  texto: string;
  esCorrecta: number; // 0 o 1
}

interface Question {
  id: number;
  materia: string;
  tipo: 'opcion' | 'abierta';
  pregunta: string;
  opciones?: Option[];
}

export default function ExamenPage() {
  const router = useRouter();
  const subjects = [
    { displayName: 'Base de Datos', dbName: 'bd' },
    { displayName: 'Programación Web', dbName: 'web' },
    { displayName: 'Sistemas Operativos', dbName: 'so' }
  ];

  const [questionsBySubject, setQuestionsBySubject] = useState<{ [key: string]: Question[] }>({});
  const [loadingSubject, setLoadingSubject] = useState<string | null>(null);
  const [userAnswers, setUserAnswers] = useState<{ [questionId: number]: string | string[] }>({});
  const [examResults, setExamResults] = useState<{ [subjectDisplayName: string]: string | null }>({}); // Para almacenar y mostrar la calificación

  // Asumiendo un ID de alumno (esto debería venir de tu autenticación/sesión)
  const alumnoId = 123; // ¡Cambia esto por el ID real del alumno logueado!
  const [username, setUsername] = useState<string | null>(null);
   const storedUsername = localStorage.getItem('username');
  useEffect(() => {
    // Se ejecuta solo en el cliente
   

    if (storedUsername) {
      setUsername(storedUsername);
    } else {
      // Si no hay datos, redirige al login
      router.push('/login');
    }
  }, [router]);

  const generarExamenPorMateria = async (subject: { displayName: string; dbName: string }) => {
    setLoadingSubject(subject.displayName);
    try {
      const res = await fetch(`/apilocal/cuestionarios?materia=${encodeURIComponent(subject.dbName)}`);
      if (!res.ok) {
        const errorData = await res.json().catch(() => ({ message: 'Error desconocido' }));
        throw new Error(errorData.message || `Error ${res.status}: ${res.statusText}`);
      }
      const data: Question[] = await res.json();
      setQuestionsBySubject((prev) => ({ ...prev, [subject.displayName]: data }));
      // Limpiar respuestas anteriores y resultados para esta materia si se regenera
      setUserAnswers((prev) => {
        const newAnswers = { ...prev };
        data.forEach(q => delete newAnswers[q.id]);
        return newAnswers;
      });
      setExamResults((prev) => ({ ...prev, [subject.displayName]: null })); // Limpiar resultado anterior
    } catch (error) {
      console.error('Error al generar examen:', error);
      alert(`Error al generar examen de ${subject.displayName}: ${(error as Error).message}`);
    } finally {
      setLoadingSubject(null);
    }
  };

  const handleAnswerChange = (questionId: number, tipo: 'opcion' | 'abierta', value: string) => {
    setUserAnswers((prev) => {
      if (tipo === 'opcion' || tipo === 'abierta') {
        return { ...prev, [questionId]: value };
      }
      return prev;
    });
  };

  const enviarExamen = async (subjectDisplayName: string, subjectDbName: string) => {
    const questions = questionsBySubject[subjectDisplayName];
    if (!questions || questions.length === 0) {
      alert('No hay preguntas para enviar en este examen.');
      return;
    }

    const examData = {
      id_alumno: alumnoId,
      materia: subjectDbName,
      // --- CAMBIO CLAVE AQUÍ: ENVIAR LA PREGUNTA ORIGINAL COMPLETA ---
      respuestas_enviadas: questions.map(q => ({
        id_pregunta: q.id,
        tipo: q.tipo,
        pregunta_original: q, // <-- ¡Envía la pregunta original completa!
        respuesta_usuario: userAnswers[q.id] || null
      })),
      // No enviamos calificacion_obtenida, el backend la calculará
    };

    console.log('Datos a enviar para calificación:', examData);

    try {
      const res = await fetch('/apilocal/resultados', { // Asegúrate que esta URL apunta a tu API POST de resultados
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(examData),
      });

      if (!res.ok) {
        const errorData = await res.json().catch(() => ({ message: 'Error desconocido' }));
        throw new Error(errorData.message || `Error ${res.status}: ${res.statusText}`);
      }

      const result = await res.json();
      const finalScore = result.calificacionFinal; // Obtenemos la calificación sobre 10 del backend
      
      alert(`Examen de ${subjectDisplayName} enviado con éxito. Calificación: ${finalScore}/10`);
      console.log('Resultado del envío:', result);

      setExamResults((prev) => ({ ...prev, [subjectDisplayName]: finalScore })); // Guarda la calificación para mostrarla
      
      // Opcional: limpiar las preguntas y respuestas después del envío si no quieres que se puedan revisar
      setQuestionsBySubject((prev) => {
        const newState = { ...prev };
        delete newState[subjectDisplayName];
        return newState;
      });
      setUserAnswers((prev) => {
        const newState = { ...prev };
        questions.forEach(q => delete newState[q.id]);
        return newState;
      });

    } catch (error) {
      console.error('Error al enviar examen:', error);
      alert(`Error al enviar examen de ${subjectDisplayName}: ${(error as Error).message}`);
    }
  };


  return (
    <div className="min-h-screen flex flex-col bg-black text-teal-300 font-mono px-6 py-6">
      <nav className="flex justify-between items-center border-b border-teal-500/30 pb-4 mb-6">
        <h1 className="text-2xl font-bold">Examen</h1>
        <Link href="/paginas/alumno" className="flex items-center gap-2 text-teal-300 hover:text-teal-100 transition hover:underline">
          <FaArrowLeft className="text-xl" /> Regresar
        </Link>
      </nav>

      <div className="space-y-6 max-w-3xl mx-auto w-full">
        {subjects.map((subject) => (
          <div key={subject.displayName} className="bg-neutral-900 p-4 rounded-xl border border-teal-500/30">
            <div className="flex justify-between items-center mb-3">
              <p className="text-lg font-semibold">{subject.displayName}</p>
              {/* Mostrar el botón "Generar examen" SOLO SI no hay preguntas cargadas Y no hay un resultado mostrado */}
              {!questionsBySubject[subject.displayName] && !examResults[subject.displayName] && (
                <button
                  onClick={() => generarExamenPorMateria(subject)}
                  disabled={loadingSubject === subject.displayName}
                  className="bg-blue-600 hover:bg-blue-700 text-white py-1 px-4 rounded transition ml-6"
                >
                  {loadingSubject === subject.displayName ? 'Generando...' : 'Generar examen'}
                </button>
              )}
              {/* Mostrar calificación si ya se envió el examen */}
              {examResults[subject.displayName] && (
                <p className="text-xl font-bold text-teal-400">Calificación: {examResults[subject.displayName]}/10</p>
              )}
            </div>

            {/* Mostrar preguntas y botón de enviar SOLO SI hay preguntas cargadas */}
            {questionsBySubject[subject.displayName] && (
              <form className="space-y-4">
                {questionsBySubject[subject.displayName].map((q) => (
                  <div key={q.id} className="border-t border-teal-500/10 pt-4 mt-4 first:mt-0 first:pt-0 first:border-t-0">
                    <p className="font-medium text-lg mb-2">{q.pregunta}</p>
                    {q.tipo === 'opcion' && q.opciones && q.opciones.length > 0 && (
                      <div className="space-y-1">
                        {q.opciones.map((opt) => (
                          <label key={opt.id} className="flex items-center gap-2 text-base">
                            <input
                              type="radio"
                              name={`q-${q.id}`}
                              value={opt.texto}
                              onChange={(e) => handleAnswerChange(q.id, q.tipo, e.target.value)}
                              checked={userAnswers[q.id] === opt.texto}
                              className="accent-teal-400 w-4 h-4"
                            />
                            <span>{opt.texto}</span>
                          </label>
                        ))}
                      </div>
                    )}
                    {q.tipo === 'abierta' && (
                      <textarea
                        name={`q-${q.id}`}
                        rows={3}
                        placeholder="Escribe tu respuesta aquí..."
                        value={(userAnswers[q.id] as string) || ''}
                        onChange={(e) => handleAnswerChange(q.id, q.tipo, e.target.value)}
                        className="w-full p-2 bg-black border border-teal-500/30 rounded mt-2 text-teal-100 placeholder-teal-600 focus:ring focus:ring-teal-400 focus:border-teal-400 outline-none"
                      />
                    )}
                  </div>
                ))}
                <button
                  type="button"
                  onClick={() => enviarExamen(subject.displayName, subject.dbName)} // Asegúrate de pasar subject.dbName
                  className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded transition mt-6"
                >
                  Enviar Examen
                </button>
              </form>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}