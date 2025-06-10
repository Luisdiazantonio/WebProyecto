'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import {
  FaUserGraduate,
  FaIdCard,
  FaPen,
  FaChartBar,
  FaSignOutAlt,
} from 'react-icons/fa';
import { IoMdAlert } from 'react-icons/io';

export default function DashboardAlumno() {
  const router = useRouter();

  const handleLogout = () => {
    router.push('/paginas/login');
  };

  return (
    <div className="min-h-screen flex flex-col bg-black text-teal-300 font-mono">
      {/* Navbar */}
      <nav className="flex flex-wrap items-center justify-between px-6 py-4 bg-gradient-to-r from-neutral-900 to-black border-b border-teal-500/30 shadow-md">
        {/* Título lado izquierdo */}
        <h1 className="flex items-center gap-2 text-xl font-bold text-teal-300 mr-auto">
          <FaUserGraduate className="text-2xl" />
          Junior:
        </h1>

        {/* Links centrados en columna */}
        <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6 text-sm font-medium">
          <Link href="/paginas/examen" className="flex items-center gap-2 hover:text-teal-100 transition">
            <FaPen />
            Examen
          </Link>
          <Link href="/paginas/resultados" className="flex items-center gap-2 hover:text-teal-100 transition">
            <FaChartBar />
            Resultados
          </Link>
        </div>
        {/* Acerca de - esquina inferior derecha */}
          <div className="absolute bottom-4 right-6">
            <Link
              href="/paginas/acercade"
              className="flex items-center gap-2 text-sm text-teal-400 hover:text-teal-300 transition"
            >
              <IoMdAlert />
              Acerca de
            </Link>
          </div>
        {/* Botón cerrar sesión al lado derecho */}
        <button
          onClick={handleLogout}
          className="flex items-center gap-2 text-red-400 hover:text-red-500 transition hover:underline ml-4"
        >
          <FaSignOutAlt className="text-2xl" />
        </button>
      </nav>

      {/* Contenido principal */}
      <main className="flex-1 px-6 py-10 bg-neutral-950">
        <h2 className="text-2xl border-b border-teal-500/30 pb-2 mb-6 font-semibold">Bienvenido al Sistema de Programadores Mexicanos (SPM)</h2>
        <div className="bg-neutral-900 p-6 rounded-xl border border-teal-500/20 shadow-md text-base text-teal-100">
          <p>Realiza los examenes asignados y demuestra tus habilidades</p>
        </div>
      </main>
    </div>
  );
}
