'use client';

import { FaUserGraduate, FaIdCard, FaPen, FaChartBar, FaSignOutAlt } from 'react-icons/fa';
import { IoMdAlert } from "react-icons/io";
import '../../Estilos/dashboard.css';
import { useRouter } from 'next/navigation';

export default function DashboardAlumno() {
  const router = useRouter();

  const handleLogout = () => {
    router.push('/interfaces/login');
  };

  return (
    <>
      <nav className="navbar">
        <h1><FaUserGraduate /> Alumno</h1>
        <a href="#" className="active"><FaIdCard /> Perfil</a>
        <a href="#"><FaPen /> Examen</a>
        <a href="#"><FaChartBar /> Resultados</a>
        <a href="#"><IoMdAlert />Acerca de</a>
        <button onClick={handleLogout} className="logout-button">
          <FaSignOutAlt /> {'>'} Cerrar sesión
        </button>
      </nav>

      <main className="main-content">
        <h2 className="section-title">Bienvenido</h2>
        <div className="card">
          <p>Suerte mijin</p>
        </div>
      </main>
    </>
  );
}
