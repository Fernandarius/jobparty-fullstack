import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

interface Params {
  params: { id: string };
}

export async function GET(_: Request, { params }: Params) {
  const worker = await prisma.workerProfile.findUnique({
    where: { id: params.id },
    include: { user: true },
  });
  if (!worker) return NextResponse.json({ error: "No encontrado" }, { status: 404 });
  return NextResponse.json({ worker });
}
