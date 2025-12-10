import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
  const hires = await prisma.hire.findMany({ orderBy: { createdAt: "desc" }, take: 20 });
  return NextResponse.json({ hires });
}
