import Link from "next/link";
import { FaGithub, FaInstagram, FaFacebook, FaTwitter } from "react-icons/fa";
import Image from "next/image";

export default function Acerca_DePage() {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-md overflow-hidden p-8">
        <header className="text-center mb-12">
          <div className="flex flex-col items-center">
            <div className="flex items-center gap-6 mb-6">
              <Image 
                className="rounded-full w-24 h-24 object-cover border-4 border-orange-500 shadow-lg" 
                src="https://imgs.search.brave.com/VxrVHUOfVLQQ91pPcDVX5ZRN3nu2jTj7PmZCXbqjL1Y/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly90cmVu/ZXMubXgvd3AtY29u/dGVudC91cGxvYWRz/LzIwMjEvMDUvcGx5/bW91dGgtYWFyLWN1/ZGEtMS11ZC0zMDc2/NjMtZXMtMTUzNng4/Nzgtb3B0aW1pemVk/LmpwZw" 
                alt="Logo de la tienda" 
                width={96}
                height={96}
                priority
              />
              <h1 className="text-5xl md:text-6xl font-extrabold text-gray-800 drop-shadow-lg tracking-wide">
                Scala<span className="text-orange-500">Motors</span>
              </h1>
            </div>
            <p className="text-xl text-gray-700 mt-4 font-medium max-w-2xl leading-relaxed">
              ¡Hola, Coleccionista! Somos una empresa comprometida con la venta y distribución mundial de coches a escalas del tipo JDM, Deportivos, Superdeportivos, Monoplazas y Coleccionables.
            </p>
          </div>
        </header>

        <main className="space-y-8">
          <section className="bg-gray-50 p-6 rounded-lg">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Nuestra Colección</h2>
            <p className="text-lg text-gray-700">
              Ofrecemos modelos iconicos de todas las épocas, desde clásicos atemporales hasta los superdeportivos más modernos. Cada pieza es cuidadosamente seleccionada para garantizar la máxima calidad y autenticidad.
            </p>
          </section>

          <section className="bg-gray-50 p-6 rounded-lg">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Nuestra Misión</h2>
            <p className="text-lg text-gray-700">
              Conectar a coleccionistas con sus modelos soñados, proporcionando piezas exclusivas con certificación de autenticidad y un servicio de entrega mundial confiable.
            </p>
          </section>

          <section className="text-center pt-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              Síguenos en nuestra red social
            </h3>
            <div className="flex justify-center space-x-6">
              <Link href="#" className="text-gray-700 hover:text-orange-500 transition-colors">
                <FaInstagram size={28} />
              </Link>
            </div>
          </section>
          <section className="text-center pt-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              Tiendas recomendadas
            </h3>
            <div className="flex justify-center space-x-6">
              <Link href="#" className="text-gray-700 hover:text-orange-500 transition-colors">
                <FaInstagram size={28} />
              </Link>
              <Link href="#" className="text-gray-700 hover:text-orange-500 transition-colors">
                <FaFacebook size={28} />
              </Link>
              <Link href="#" className="text-gray-700 hover:text-orange-500 transition-colors">
                <FaTwitter size={28} />
              </Link>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}