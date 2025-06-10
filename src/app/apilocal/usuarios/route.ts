import pool from '@/app/database';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { username, password } = body;

    console.log("Nombre: %s", username);
    console.log("Contraseña: %s", password);

    if (!username || !password) {
      return NextResponse.json({ error: 'Faltan datos' }, { status: 400 });
    }

    // Consulta segura con prepared statement
    const [rows]: any = await pool.query(
      'SELECT rol FROM usuarios WHERE nombre = ? AND contrasena = ?',
      [username, password]
    );

    if (!rows || rows.length === 0) {
      return NextResponse.json({ error: 'Usuario o contraseña incorrectos' }, { status: 401 });
    }

    const rol = rows[0].rol;

    console.log("Rol encontrado: %s", rol);

    // Validar tipo de rol
    if (![1, 2, 3].includes(rol)) {
      return NextResponse.json({ error: 'Rol no válido' }, { status: 403 });
    }

    return NextResponse.json({ rol });
  } catch (error: any) {
    console.error('Error en la consulta:', error);
    return NextResponse.json(
      { error: 'Error en la consulta', details: error.message },
      { status: 500 }
    );
  }
}
