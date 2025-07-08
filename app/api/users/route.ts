import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function POST(req: NextRequest) {
  const body = await req.json();
  const user = await prisma.user.create({
    data: {
      firstName: body.firstName,
      lastName: body.lastName,
      email: body.email,
      role: body.role,
    },
  });

  return NextResponse.json(user);
} 