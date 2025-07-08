import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function GET() {
  const missions = await prisma.mission.findMany();
  return NextResponse.json(missions);
}

export async function POST(req: NextRequest) {
  const { id, assigned } = await req.json();
  const mission = await prisma.mission.update({
    where: { id },
    data: { assigned },
  });
  return NextResponse.json(mission);
} 