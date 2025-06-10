// src/app/api/consulta/[id]/route.ts
import pool from '@/app/database';
import { NextResponse } from 'next/server';

export async function GET() {

  try {
    const [rows] = await pool.query('SELECT * FROM usuarios');

    return NextResponse.json(rows);
  } catch (error: any) {
    console.error('Error completo:', {
      message: error.message,
      code: error.code,
      sql: error.sql,
      stack: error.stack
    });
    
    return NextResponse.json(
      { 
        error: 'Error en la consulta',
        details: {
          message: error.message,
          code: error.code
        }
      },
      { status: 500 }
    );
  }
}