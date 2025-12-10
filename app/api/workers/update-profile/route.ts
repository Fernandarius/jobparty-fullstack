import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function POST(request: Request) {
  const body = await request.json();
  const { id, skills, pricePerHour, bio, availability } = body;
  const worker = await prisma.workerProfile.update({
    where: { id },
    data: { skills, pricePerHour, bio, availability },
  });
  return NextResponse.json({ worker });
}
