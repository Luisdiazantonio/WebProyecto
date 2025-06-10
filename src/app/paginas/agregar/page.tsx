'use client';

import Link from 'next/link';
import { useState } from 'react';
import { FaArrowLeft } from 'react-icons/fa';

export default function AgregarJuniorPage() {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    email: '',
    rol: 3, // rol por defecto
  });

  const [mensaje, setMensaje] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setMensaje(null);
    setError(null);

    try {
      const res = await fetch('http://localhost:3000/apilocal/agregar', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.error || 'Error desconocido');
        return;
      }

      setMensaje(data.message || 'Usuario agregado correctamente');
      setFormData({
        username: '',
        password: '',
        email: '',
        rol: 3,
      });
    } catch (error) {
      setError('Error al conectar con el servidor');
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-black text-teal-300 font-mono px-6 py-6">
      {/* Navbar */}
      <nav className="flex justify-between items-center border-b border-teal-500/30 pb-4 mb-6">
        <h1 className="text-2xl font-bold text-green-400">Agregar Junior</h1>
        <Link
          href="/paginas/admin"
          className="flex items-center gap-2 text-teal-300 hover:text-orange-400 transition hover:underline"
        >
          <FaArrowLeft className="text-xl" />
          Regresar
        </Link>
      </nav>

      {/* Formulario */}
      <div className="max-w-md mx-auto bg-neutral-900 p-6 rounded-xl shadow-md border border-teal-500/30">
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <label>
            Nombre de usuario:
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
              required
              className="w-full mt-1 px-4 py-2 bg-black text-white border border-teal-500/30 rounded"
            />
          </label>

          <label>
            Contraseña:
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              className="w-full mt-1 px-4 py-2 bg-black text-white border border-teal-500/30 rounded"
            />
          </label>

          <label>
            Correo:
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full mt-1 px-4 py-2 bg-black text-white border border-teal-500/30 rounded"
            />
          </label>

          {/* Campo oculto para rol */}
          <input type="hidden" name="rol" value={formData.rol} />

          <button
            type="submit"
            className="bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded transition"
          >
            Guardar
          </button>
        </form>

        {mensaje && <p className="mt-4 text-green-400">{mensaje}</p>}
        {error && <p className="mt-4 text-red-500">{error}</p>}
      </div>
    </div>
  );
}
