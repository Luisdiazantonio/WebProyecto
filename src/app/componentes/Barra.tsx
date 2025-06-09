import Link from "next/link";
import Image from "next/image";
import { FaCar, FaCarRear, FaCartShopping, FaUser } from "react-icons/fa6";
import { BarraMenuItem } from './BarraMenuItem';

const menuItems = [
  {
    path: '/paginas/carros',
    icon: <FaCar size={30} />,
    title: 'Carros'
  },
  {
    path: '/paginas/carritocompra',
    icon: <FaCartShopping size={30} />,
    title: 'Carrito'
  },
  {
    path: '/paginas/acercade',
    icon: <FaUser size={30} />,
    title: 'Acerca de'
  }
];

export const Barra = () => {
  return (
    <header className="bg-black text-slate-300 w-full py-10 px-10 md:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Contenedor izquierdo (Logo + Título) */}
        <div className="flex items-center gap-4 md:mr-auto">
          <Image 
            className="rounded-full w-20 h-20 object-cover" 
            src="https://imgs.search.brave.com/VxrVHUOfVLQQ91pPcDVX5ZRN3nu2jTj7PmZCXbqjL1Y/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly90cmVu/ZXMubXgvd3AtY29u/dGVudC91cGxvYWRz/LzIwMjEvMDUvcGx5/bW91dGgtYWFyLWN1/ZGEtMS11ZC0zMDc2/NjMtZXMtMTUzNng4/Nzgtb3B0aW1pemVk/LmpwZw" 
            alt="Logo de la tienda" 
            width={80}
            height={80}
            priority
          />
          <Link href="/paginas/main" className="font-bold text-blue text-xl md:text-2xl whitespace-nowrap">
            Carros a escala
          </Link>
        </div>

        {/* Menú centrado */}
        <nav className="w-full md:w-auto">
          <ul className="flex flex-wrap justify-center gap-4 md:gap-6">
            {menuItems.map((item) => (
              <li key={item.path}>
                <BarraMenuItem {...item} />
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};