import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const q = searchParams.get('q') || '';

  const insights = await prisma.comparativeInsight.findMany({
    where: {
      OR: [
        { title: { contains: q, mode: 'insensitive' } },
        { description: { contains: q, mode: 'insensitive' } },
      ],
    },
    include: {
      primaryEntity: true,
      competitorEntity: true,
    },
  });

  return NextResponse.json(insights);
} 