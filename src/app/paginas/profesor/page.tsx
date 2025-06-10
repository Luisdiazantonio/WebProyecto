'use client';

import { FaChalkboardTeacher, FaUserGraduate, FaClipboardList, FaStar, FaSignOutAlt } from 'react-icons/fa';
import '../../Estilos/dashboard.css';
import { useRouter } from 'next/navigation';
import { IoMdAlert } from 'react-icons/io';

export default function DashboardProfesor() {
  const router = useRouter();

  const handleLogout = () => {
    router.push('/interfaces/login');
  };

  return (
    <>
      <nav className="navbar">
        <h1><FaChalkboardTeacher /> Profesor</h1>
        <a href="#" className="active"><FaUserGraduate /> Alumnos</a>
        <a href="#"><FaClipboardList /> Calificaciones</a>
        <a href="#"><IoMdAlert /> Acerca de</a>
        <button onClick={handleLogout} className="logout-button">
          <FaSignOutAlt /> {'>'} Cerrar sesión
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
