'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { FaIdCard, FaPen, FaChartBar, FaSignOutAlt } from 'react-icons/fa';
import { IoMdAlert } from "react-icons/io";
import { BsPersonFillGear, BsPersonPlusFill, BsPersonDashFill, BsPersonFillLock } from "react-icons/bs";
import '../../Estilos/dashboard.css';

export default function DashboardAlumno() {
  const router = useRouter();

  const handleLogout = () => {
    router.push('/paginas/login');
  };

  return (
    <>
      <nav className="navbar">
        <h1><BsPersonFillLock /> Administrador</h1>
        <Link href="/admin">
          <span className="active"><FaIdCard /> Perfil</span>
        </Link>
        <Link href="/examen">
          <span><BsPersonPlusFill /> Agregar</span>
        </Link>
        <Link href="/resultados">
          <span><BsPersonDashFill /> Eliminar</span>
        </Link>
        <Link href="/modificar">
          <span><BsPersonFillGear /> Modificar</span>
        </Link>
        <Link href="/acerca-de">
          <span><IoMdAlert /> Acerca de</span>
        </Link>
        <button onClick={handleLogout} className="logout-button">
          <FaSignOutAlt />
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
