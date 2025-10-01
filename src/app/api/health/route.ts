export const runtime = "nodejs";
import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
  // small no-op query to force-instantiate the client
  await prisma.$queryRaw`SELECT 1`;
  return NextResponse.json({ ok: true });
}
