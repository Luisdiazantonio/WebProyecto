'use client';

import Link from 'next/link';
import { FaArrowLeft } from 'react-icons/fa';
import { useEffect, useState } from 'react';

interface Result {
  subject: string;
  score: number;
}

export default function ResultadosPage() {
  const [results, setResults] = useState<Result[]>([]);

  useEffect(() => {
    async function fetchResults() {
      try {
        const res = await fetch('/api/resultados');
        const data: Result[] = await res.json();
        setResults(data);
      } catch (err) {
        console.error(err);
        alert('Error al obtener resultados');
      }
    }
    fetchResults();
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-black text-teal-300 font-mono px-6 py-6">
      <nav className="flex justify-between items-center border-b border-teal-500/30 pb-4 mb-6">
        <h1 className="text-2xl font-bold">Resultados</h1>
        <Link href="/paginas/alumno" className="flex items-center gap-2 text-teal-300 hover:text-teal-100 transition hover:underline">
          <FaArrowLeft className="text-xl" /> Regresar
        </Link>
      </nav>

      <div className="max-w-md mx-auto bg-neutral-900 p-6 rounded-xl border border-teal-500/30 space-y-4">
        {results.map((r, idx) => (
          <div key={idx} className="flex justify-between">
            <span>{r.subject}</span>
            <span className="font-semibold">{r.score}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
