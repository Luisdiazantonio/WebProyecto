'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { FaArrowLeft } from 'react-icons/fa';

interface Question {
  id: number;
  subject: string;
  type: 'opcion' | 'abierta';
  question: string;
  options?: string[];
}

export default function ExamenPage() {
  const router = useRouter();
  const subjects = ['Estructura de Datos', 'Programación Web', 'Sistemas Operativos'];

  const [questionsBySubject, setQuestionsBySubject] = useState<{ [key: string]: Question[] }>({});
  const [loadingSubject, setLoadingSubject] = useState<string | null>(null);

  const generarExamenPorMateria = async (subject: string) => {
    setLoadingSubject(subject);
    try {
      const res = await fetch(`/api/examen?subject=${encodeURIComponent(subject)}`);
      const data: Question[] = await res.json();
      setQuestionsBySubject((prev) => ({ ...prev, [subject]: data }));
    } catch (error) {
      console.error(error);
      alert(`Error al generar examen de ${subject}`);
    } finally {
      setLoadingSubject(null);
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

      <div className="space-y-6 max-w-3xl mx-auto">
        {subjects.map((subject) => (
          <div key={subject} className="bg-neutral-900 p-4 rounded-xl border border-teal-500/30">
            <div className="flex justify-between items-center mb-3">
                <p className="text-lg font-semibold">{subject}</p>
                <button
                    onClick={() => generarExamenPorMateria(subject)}
                    disabled={loadingSubject === subject}
                    className="bg-blue-600 hover:bg-blue-700 text-white py-1 px-4 rounded transition ml-6"
                >
                    {loadingSubject === subject ? 'Generando...' : 'Generar examen'}
                </button>
            </div>


            {questionsBySubject[subject] && (
              <form className="space-y-4">
                {questionsBySubject[subject].map((q) => (
                  <div key={q.id}>
                    <p className="font-medium">{q.question}</p>
                    {q.type === 'opcion' &&
                      q.options?.map((opt, idx) => (
                        <label key={idx} className="flex items-center gap-2">
                          <input type="radio" name={`q-${q.id}`} value={opt} className="accent-teal-400" />
                          <span>{opt}</span>
                        </label>
                      ))}
                    {q.type === 'abierta' && (
                      <textarea name={`q-${q.id}`} rows={3} className="w-full p-2 bg-black border border-teal-500/30 rounded mt-2" />
                    )}
                  </div>
                ))}
              </form>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
