'use client';

import Link from 'next/link';
import { FaArrowLeft, FaTrash } from 'react-icons/fa';

export default function EliminarJuniorPage() {
  const juniors = ['Carlos Méndez', 'Lucía Torres', 'Daniel Pérez'];

  return (
    <div className="min-h-screen flex flex-col bg-black text-teal-300 font-mono px-6 py-6">
      {/* Navbar */}
      <nav className="flex justify-between items-center border-b border-teal-500/30 pb-4 mb-6">
        <h1 className="text-2xl font-bold text-red-400">Eliminar Junior</h1>
        <Link
          href="/paginas/admin"
          className="flex items-center gap-2 text-teal-300 hover:text-orange-400 transition hover:underline"
        >
          <FaArrowLeft className="text-xl" />
          Regresar
        </Link>
      </nav>

      {/* Lista de Juniors */}
      <div className="space-y-4 max-w-lg mx-auto">
        {juniors.map((junior, index) => (
          <div
            key={index}
            className="flex justify-between items-center bg-neutral-900 p-4 rounded-lg border border-teal-500/20 shadow hover:bg-neutral-800 transition"
          >
            <span>{junior}</span>
            <button className="text-red-400 hover:text-red-500 transition">
              <FaTrash />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
