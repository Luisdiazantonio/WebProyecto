'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { FaArrowLeft } from 'react-icons/fa';

export default function JuniorsPage() {
  const router = useRouter();

  const data = [
    {
      nombre: 'Carlos Méndez',
      estructura: 8.5,
      sistemas: 9.0,
      web: 8.7,
    },
    {
      nombre: 'Lucía Torres',
      estructura: 9.2,
      sistemas: 8.4,
      web: 9.5,
    },
    {
      nombre: 'Daniel Pérez',
      estructura: 7.8,
      sistemas: 8.1,
      web: 8.9,
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-black text-teal-300 font-mono px-4 py-6">
      {/* Navbar */}
      <nav className="flex justify-between items-center border-b border-teal-500/30 pb-4 mb-6">
        <h1 className="text-2xl font-bold text-orange-400">Junior's</h1>
        <Link
          href="/paginas/profesor"
          className="flex items-center gap-2 text-teal-300 hover:text-orange-400 transition hover:underline"
        >
          <FaArrowLeft className="text-xl" />
          Senior
        </Link>
      </nav>

      {/* Tabla de Juniors */}
      <div className="w-full overflow-x-auto">
        <table className="w-full text-left border-collapse border border-teal-500/20">
          <thead className="bg-neutral-900 text-teal-400">
            <tr>
              <th className="py-3 px-4 border-b border-teal-500/20">Junior</th>
              <th className="py-3 px-4 border-b border-teal-500/20">Estructura de Datos</th>
              <th className="py-3 px-4 border-b border-teal-500/20">Sistemas Operativos</th>
              <th className="py-3 px-4 border-b border-teal-500/20">Programación Web</th>
            </tr>
          </thead>
          <tbody className="bg-neutral-950">
            {data.map((junior, index) => (
              <tr
                key={index}
                className="hover:bg-neutral-800 transition-colors"
              >
                <td className="py-3 px-4 border-b border-teal-500/10">{junior.nombre}</td>
                <td className="py-3 px-4 border-b border-teal-500/10">{junior.estructura}</td>
                <td className="py-3 px-4 border-b border-teal-500/10">{junior.sistemas}</td>
                <td className="py-3 px-4 border-b border-teal-500/10">{junior.web}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
