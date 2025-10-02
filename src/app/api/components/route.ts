import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function POST(req: Request) {
  try {
    const { name, sourceCode, props } = await req.json();
    const component = await prisma.component.create({
      data: { name, sourceCode, props },
    });
    return NextResponse.json(component);
  } catch (err) {
    console.error(err);
    return NextResponse.json(
      { error: "Failed to create component" },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    const components = await prisma.component.findMany({
      orderBy: { updatedAt: "desc" },
    });
    return NextResponse.json(components);
  } catch (err) {
    console.error(err);
    return NextResponse.json(
      { error: "Failed to fetch components" },
      { status: 500 }
    );
  }
}
