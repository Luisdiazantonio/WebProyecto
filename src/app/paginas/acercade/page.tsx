import Link from "next/link";
import Image from "next/image";
import {
  FaGithub,
  FaInstagram,
  FaFacebook,
  FaTwitter,
} from "react-icons/fa";

export default function Acerca_DePage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-neutral-100 px-4 py-10 text-gray-800 font-sans">
      <div className="w-full max-w-4xl bg-white rounded-2xl shadow-xl p-8 md:p-12 space-y-12">
        {/* Header */}
        <header className="text-center">
          <p className="mt-6 text-lg md:text-xl text-gray-700 leading-relaxed max-w-2xl mx-auto">
            ¡Hola, Programador! Somos una empresa dedicada a la promocion y apoyo mundial de programadores.
          </p>
        </header>

        {/* Main Content */}
        <main className="space-y-10">
          <section className="bg-gray-50 p-6 rounded-xl shadow-sm">
            <h2 className="text-2xl font-bold mb-3">Nuestra Comunidad</h2>
            <p className="text-lg text-gray-700">
              Ofrecemos diversos tipos de examenes en los cuales puedes poner a prueba tus conosimientos y demostrar que eres el mejor entre todos.
            </p>
          </section>

          <section className="bg-gray-50 p-6 rounded-xl shadow-sm">
            <h2 className="text-2xl font-bold mb-3">Nuestra Misión</h2>
            <p className="text-lg text-gray-700">
              Conectar a programadores Mexicanos a nivel mundial.
            </p>
          </section>

          {/* Redes Sociales */}
          <section className="text-center space-y-4">
            <h3 className="text-xl font-semibold">Síguenos en redes sociales</h3>
            <div className="flex justify-center gap-6 text-gray-700">
              <Link href="#" aria-label="Instagram" className="hover:text-orange-500 transition-colors">
                <FaInstagram size={28} />
              </Link>
              <Link href="#" aria-label="Facebook" className="hover:text-orange-500 transition-colors">
                <FaFacebook size={28} />
              </Link>
              <Link href="#" aria-label="Twitter" className="hover:text-orange-500 transition-colors">
                <FaTwitter size={28} />
              </Link>
              <Link href="#" aria-label="GitHub" className="hover:text-orange-500 transition-colors">
                <FaGithub size={28} />
              </Link>
            </div>
            <div className="flex justify-center gap-6 text-gray-700">
              <Link href="/paginas/alumno" aria-label="GitHub" className="hover:text-orange-500 transition-colors">
                {'Regresar'}
              </Link>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
