'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import {
  FaChalkboardTeacher,
  FaUserGraduate,
  FaClipboardList,
  FaSignOutAlt,
} from 'react-icons/fa';
import { IoMdAlert } from 'react-icons/io';

export default function DashboardProfesor() {
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
          <FaChalkboardTeacher className="text-2xl" />
          Senior:
        </h1>

        {/* Links centrados en columna o fila */}
        <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6 text-sm font-medium">
          <Link href="/paginas/juniors" className="flex items-center gap-2 hover:text-teal-100 transition">
            <FaUserGraduate />
            Junior's
          </Link>
        </div>

        {/* Botón cerrar sesión lado derecho */}
        <button
          onClick={handleLogout}
          className="flex items-center gap-2 text-red-400 hover:text-red-500 transition hover:underline ml-4"
        >
          <FaSignOutAlt className="text-2xl" />
        </button>
      </nav>

      {/* Contenido principal */}
      <main className="flex-1 px-6 py-10 bg-neutral-950">
        <h2 className="text-2xl border-b border-teal-500/30 pb-2 mb-6 font-semibold">Bienvenido</h2>
        <div className="bg-neutral-900 p-6 rounded-xl border border-teal-500/20 shadow-md text-base text-teal-100">
          <p>Quiubole profe</p>
        </div>
      </main>
    </div>
  );
}
