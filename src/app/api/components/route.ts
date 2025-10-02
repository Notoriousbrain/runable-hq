import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
  try {
    const components = await prisma.component.findMany({
      orderBy: { updatedAt: "desc" },
    });
    return NextResponse.json(components);
  } catch (err) {
    console.error("GET /api/components error:", err);
    return NextResponse.json({ error: String(err) }, { status: 500 });
  }
}

export async function POST(req: Request) {
  try {
    const { id, name, sourceCode, props, schemaVer } = await req.json();

    if (!id) {
      return NextResponse.json({ error: "id is required" }, { status: 400 });
    }

    // UPSERT: if exists, update; else create
    const component = await prisma.component.upsert({
      where: { id },
      update: { name, sourceCode, props, schemaVer },
      create: {
        id,
        name: name ?? "Untitled Component",
        sourceCode: sourceCode ?? "",
        props: props ?? {},
        schemaVer: schemaVer ?? 1,
      },
    });

    return NextResponse.json(component);
  } catch (err) {
    console.error("POST /api/components error:", err);
    return NextResponse.json({ error: String(err) }, { status: 500 });
  }
}
