import pool from '@/app/database';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { username, password } = body;

    if (!username || !password) {
      return NextResponse.json({ error: 'Faltan datos' }, { status: 400 });
    }

    const [rows]: any = await pool.query(
      'SELECT rol FROM usuarios WHERE nombre = ? AND contrasena = ?',
      [username, password]
    );

    if (rows.length === 0) {
      return NextResponse.json({ error: 'Usuario o contraseña incorrectos' }, { status: 401 });
    }

    return NextResponse.json({ rol: rows[0].rol });
  } catch (error: any) {
    console.error('Error en POST /apilocal/usuarios:', error);
    return NextResponse.json(
      { error: 'Error en la consulta', details: error.message },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    console.log('GET /apilocal/usuarios — consultando usuarios con rol = 3');
    const [rows]: any = await pool.query(
      'SELECT id_usuario, nombre FROM usuarios WHERE rol = 3'
    );
    console.log(`GET /apilocal/usuarios — encontrados ${rows.length} registros`);
    return NextResponse.json(rows);
  } catch (error: any) {
    console.error('Error en GET /apilocal/usuarios:', error);
    return NextResponse.json(
      { error: 'Error al obtener usuarios', details: error.message },
      { status: 500 }
    );
  }
}

export async function DELETE(request: Request) {
  try {
    const { id } = await request.json();
    console.log('DELETE /apilocal/usuarios — id recibido:', id);

    if (!id) {
      return NextResponse.json({ error: 'Falta el id del usuario' }, { status: 400 });
    }

    const [result]: any = await pool.query(
      'DELETE FROM usuarios WHERE id_usuario = ? AND rol = 3',
      [id]
    );

    if (result.affectedRows === 0) {
      return NextResponse.json(
        { error: 'Usuario no encontrado o no es junior' },
        { status: 404 }
      );
    }

    console.log(`DELETE /apilocal/usuarios — usuario ${id} eliminado`);
    return NextResponse.json({ message: 'Usuario eliminado correctamente' });
  } catch (error: any) {
    console.error('Error en DELETE /apilocal/usuarios:', error);
    return NextResponse.json(
      { error: 'Error al eliminar usuario', details: error.message },
      { status: 500 }
    );
  }
}
