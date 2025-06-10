'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { IoLogIn, IoLockClosed, IoPersonSharp } from "react-icons/io5";
import '../../Estilos/estilo.css'; // Asegúrate de que esta ruta sea válida

export default function LoginPage() {
  const router = useRouter();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const res = await fetch('/api/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, password }),
    });

    if (res.ok) {
      router.push('/dashboard');
    } else {
      alert('Usuario o contraseña incorrectos');
    }
  };

  return (
    <div className="container">
      <h2>// Examenes</h2>
      <form onSubmit={handleSubmit}>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <IoPersonSharp style={{ marginRight: '10px' }} />
          <input
            type="text"
            name="username"
            placeholder="> usuario"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <IoLockClosed style={{ marginRight: '10px' }} />
          <input
            type="password"
            name="password"
            placeholder="> contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit"><IoLogIn style={{ marginRight: '8px' }} />{'>'} Entrar
        </button>
      </form>
    </div>
  );
}
