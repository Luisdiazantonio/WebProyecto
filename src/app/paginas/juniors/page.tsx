'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { FaArrowLeft, FaTrash } from 'react-icons/fa';

interface Usuario {
  id_usuario: number;
  nombre: string;
}

export default function JuniorPage() {
  const [juniors, setJuniors] = useState<Usuario[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchJuniors = async () => {
      try {
        const res = await fetch('http://localhost:3000/apilocal/usuarios');
        if (!res.ok) {
          const err = await res.json();
          throw new Error(err.error || 'Error desconocido al obtener juniors');
        }
        const data = await res.json();
        console.log('Datos recibidos de /apilocal/usuarios:', data);

        if (!Array.isArray(data)) {
          throw new Error('Respuesta inesperada: no es un array');
        }
        setJuniors(data);
      } catch (err: any) {
        console.error('fetchJuniors error:', err);
        setError(err.message);
        setJuniors([]);
      }
    };
    fetchJuniors();
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-black text-teal-300 font-mono px-6 py-6">
      {/* Navbar */}
      <nav className="flex justify-between items-center border-b border-teal-500/30 pb-4 mb-6">
        <h1 className="text-2xl font-bold text-red-400">Junior's</h1>
        <Link
          href="/paginas/profesor"
          className="flex items-center gap-2 text-teal-300 hover:text-orange-400 transition hover:underline"
        >
          <FaArrowLeft className="text-xl" />
          Regresar
        </Link>
      </nav>

      {/* Lista de Juniors */}
      {juniors.map((junior, index) => (
      <div
        key={junior.id_usuario ?? index}        // <–– aquí
        className="flex justify-between items-center bg-neutral-900 p-4 rounded-lg border border-teal-500/20 shadow hover:bg-neutral-800 transition"
      >
        <span>{junior.nombre}</span>
      </div>
    ))}

    </div>
  );
}
