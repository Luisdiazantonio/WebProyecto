'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { FaChalkboardTeacher, FaUserGraduate, FaClipboardList, FaStar, FaSignOutAlt } from 'react-icons/fa';
import { IoMdAlert } from 'react-icons/io';
import '../../Estilos/dashboard.css';

export default function DashboardProfesor() {
  const router = useRouter();

  const handleLogout = () => {
    router.push('/paginas/login');
  };

  return (
    <>
      <nav className="navbar">
        <h1><FaChalkboardTeacher /> Profesor</h1>
        <Link href="/alumnos">
          <span className="active"><FaUserGraduate /> Alumnos</span>
        </Link>
        <Link href="#">
          <span><FaClipboardList /> Calificaciones</span>
        </Link>
        <Link href="#">
          <span><IoMdAlert /> Acerca de</span>
        </Link>
        <button onClick={handleLogout} className="logout-button">
          <FaSignOutAlt />
        </button>
      </nav>

      <main className="main-content">
        <h2 className="section-title">Bienvenido</h2>
        <div className="card">
          <p>Quiubole profe</p>
        </div>
      </main>
    </>
  );
}
