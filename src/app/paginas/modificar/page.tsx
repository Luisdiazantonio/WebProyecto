'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { BsArrowLeft, BsPersonFillGear } from 'react-icons/bs';

interface Junior {
  id: number;
  username: string;
  password: string;
  email: string;
  rol: number;
}

export default function ModificarJuniorPage() {
  const router = useRouter();
  const [juniors, setJuniors] = useState<Junior[]>([]);
  const [selectedJunior, setSelectedJunior] = useState<Junior | null>(null);
  const [formData, setFormData] = useState({
    id: 0,
    username: '',
    password: '',
    email: '',
    rol: 3,
  });

  useEffect(() => {
    const mockData: Junior[] = [
      { id: 1, username: 'junior1', password: '123', email: 'junior1@mail.com', rol: 3 },
      { id: 2, username: 'junior2', password: '456', email: 'junior2@mail.com', rol: 3 },
    ];
    setJuniors(mockData);
  }, []);

  const handleSelect = (junior: Junior) => {
    setSelectedJunior(junior);
    setFormData({
      id: junior.id,
      username: junior.username,
      password: junior.password,
      email: junior.email,
      rol: 3, // fijo
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aquí podrías hacer una petición a la API
    console.log('Enviado:', formData);
    alert(`Modificado: ${formData.username}`);
    router.push('/paginas/admin');
  };

  return (
    <div className="min-h-screen flex flex-col bg-black text-teal-300 font-mono">
      <nav className="flex justify-between items-center px-6 py-4 border-b border-teal-500/30 shadow-md bg-gradient-to-r from-neutral-900 to-black">
        <h1 className="flex items-center gap-2 text-xl font-bold">
          <BsPersonFillGear className="text-teal-300 text-2xl" />
          Modificar Junior
        </h1>
        <Link
          href="/paginas/admin"
          className="flex items-center gap-2 text-teal-400 hover:text-teal-300 transition hover:underline"
        >
          <BsArrowLeft className="text-2xl" /> Regresar
        </Link>
      </nav>

      <main className="flex-1 px-6 py-10">
        {!selectedJunior ? (
          <div className="grid gap-4 max-w-md mx-auto">
            {juniors.map((junior) => (
              <button
                key={junior.id}
                onClick={() => handleSelect(junior)}
                className="w-full bg-neutral-900 border border-teal-400/30 hover:border-teal-300 shadow-md rounded-xl p-4 hover:shadow-teal-300/20 transition text-left"
              >
                <strong>{junior.username}</strong> — {junior.email}
              </button>
            ))}
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="bg-neutral-900 border border-teal-400/30 p-6 rounded-xl max-w-md mx-auto"
          >
            <div className="flex flex-col gap-4">
              <label>
                Nombre de usuario:
                <input
                  type="text"
                  name="username"
                  value={formData.username}
                  onChange={handleChange}
                  className="mt-1 w-full px-4 py-2 bg-black border border-teal-500/30 rounded"
                  required
                />
              </label>
              <label>
                Contraseña:
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  className="mt-1 w-full px-4 py-2 bg-black border border-teal-500/30 rounded"
                  required
                />
              </label>
              <label>
                Correo electrónico:
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="mt-1 w-full px-4 py-2 bg-black border border-teal-500/30 rounded"
                  required
                />
              </label>
              <input type="hidden" name="rol" value={formData.rol} />
              <button
                type="submit"
                className="mt-4 bg-teal-600 hover:bg-teal-700 text-white py-2 rounded"
              >
                Guardar cambios
              </button>
            </div>
          </form>
        )}
      </main>
    </div>
  );
}
