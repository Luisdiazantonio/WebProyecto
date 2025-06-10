'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { FaIdCard, FaSignOutAlt } from 'react-icons/fa';
import { IoMdAlert } from 'react-icons/io';
import {
  BsPersonFillGear,
  BsPersonPlusFill,
  BsPersonDashFill,
  BsPersonFillLock,
} from 'react-icons/bs';

export default function DashboardAlumno() {
  const router = useRouter();

  const handleLogout = () => {
    router.push('/paginas/login');
  };

  return (
    <div className="min-h-screen flex flex-col bg-black text-teal-300 font-mono">
      {/* Navbar */}
      <nav className="flex justify-between items-center px-6 py-4 border-b border-teal-500/30 shadow-md bg-gradient-to-r from-neutral-900 to-black">
        <h1 className="flex items-center gap-2 text-xl font-bold">
          <BsPersonFillLock className="text-teal-300 text-2xl" />
          Administrador
        </h1>
        <button
          onClick={handleLogout}
          className="flex items-center gap-2 text-red-400 hover:text-red-500 transition hover:underline"
        >
          <FaSignOutAlt className="text-4xl" />
        </button>

      </nav>

      {/* Contenido principal */}
      <main className="flex-1 px-6 py-10 relative">

        {/* Enlaces centrales en 2 columnas */}
          <div className="flex flex-col items-center gap-6 max-w-xs mx-auto text-center">
            <Link
              href="/paginas/agregar"
              className="w-full bg-neutral-900 border border-teal-400/30 hover:border-teal-300 shadow-md rounded-xl p-6 hover:shadow-teal-300/20 transition"
            >
              <div className="flex flex-col items-center text-lg">
                <BsPersonPlusFill className="mb-2 text-2xl" />
                Agregar Junior
              </div>
            </Link>

            <Link
              href="/paginas/eliminar"
              className="w-full bg-neutral-900 border border-teal-400/30 hover:border-teal-300 shadow-md rounded-xl p-6 hover:shadow-teal-300/20 transition"
            >
              <div className="flex flex-col items-center text-lg">
                <BsPersonDashFill className="mb-2 text-2xl" />
                Eliminar Junior
              </div>
            </Link>

            <Link
              href="/paginas/modificar"
              className="w-full bg-neutral-900 border border-teal-400/30 hover:border-teal-300 shadow-md rounded-xl p-6 hover:shadow-teal-300/20 transition"
            >
              <div className="flex flex-col items-center text-lg">
                <BsPersonFillGear className="mb-2 text-2xl" />
                Modificar Junior
              </div>
            </Link>
          </div>
      </main>
    </div>
  );
}
