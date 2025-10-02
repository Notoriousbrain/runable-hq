import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
  const titles = await prisma.titleComponent.findMany();
  return NextResponse.json(titles);
}

export async function POST(req: Request) {
  const body = await req.json();
  const title = await prisma.titleComponent.create({
    data: {
      text: body.text,
      color: body.color,
      size: body.size,
      weight: body.weight,
    },
  });
  return NextResponse.json(title, { status: 201 });
}
