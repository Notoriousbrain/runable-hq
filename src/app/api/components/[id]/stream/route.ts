// app/api/components/[id]/stream/route.ts
import { NextRequest } from "next/server";
import { prisma } from "@/lib/prisma";
import { subscribe } from "@/lib/realtime";

export const runtime = "nodejs";

export async function GET(
  _req: NextRequest,
  { params }: { params: { id: string } }
) {
  const { id } = params;

  const snapshot = await prisma.component.findUnique({ where: { id } });
  if (!snapshot) {
    return new Response("Not found", { status: 404 });
  }

  const stream = new ReadableStream({
    start(controller) {
      const enc = new TextEncoder();
      const send = (msg: unknown) =>
        controller.enqueue(enc.encode(`data: ${JSON.stringify(msg)}\n\n`));

      send({ type: "snapshot", data: snapshot });

      const hb = setInterval(
        () => send({ type: "ping", t: Date.now() }),
        25000
      );

      const unsubscribe = subscribe(`component:${id}`, (payload) =>
        send(payload)
      );

      return () => {
        clearInterval(hb);
        unsubscribe?.();
      };
    },
    cancel() {},
  });

  return new Response(stream, {
    headers: {
      "Content-Type": "text/event-stream",
      "Cache-Control": "no-cache, no-transform",
      Connection: "keep-alive",
      "X-Accel-Buffering": "no",
    },
  });
}
