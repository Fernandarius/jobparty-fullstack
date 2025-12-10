import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
  const workers = await prisma.workerProfile.findMany({
    select: {
      id: true,
      pricePerHour: true,
      experience: true,
      skills: true,
      rating: true,
      availability: true,
      user: { select: { name: true, lastName: true } },
    },
    take: 20,
  });
  return NextResponse.json({ workers });
}
