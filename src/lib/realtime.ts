// lib/realtime.ts
export type Handler = (msg: unknown) => void;

let usingUpstash = false;
let upstashPublish:
  | ((channel: string, payload: unknown) => Promise<void>)
  | null = null;
let upstashSubscribe:
  | ((channel: string, handler: Handler) => () => void)
  | null = null;

if (
  process.env.UPSTASH_REDIS_REST_URL &&
  process.env.UPSTASH_REDIS_REST_TOKEN &&
  process.env.UPSTASH_REDIS_WS_URL &&
  process.env.UPSTASH_REDIS_WS_TOKEN
) {
  try {
    const mod =
      require("./realtime-redis") as typeof import("./realtime-redis");
    upstashPublish = mod.publish;
    upstashSubscribe = mod.subscribe;
    usingUpstash = true;
  } catch (e) {
    console.warn(
      "[realtime] Upstash module unavailable:",
      (e as Error).message
    );
  }
}

// fallback: in-memory pub/sub
const mem = new Map<string, Set<Handler>>();

async function memoryPublish(channel: string, payload: unknown): Promise<void> {
  const set = mem.get(channel);
  if (!set) return;
  for (const h of Array.from(set)) {
    try {
      h(payload);
    } catch {}
  }
}

function memorySubscribe(channel: string, handler: Handler): () => void {
  let set = mem.get(channel);
  if (!set) {
    set = new Set();
    mem.set(channel, set);
  }
  set.add(handler);
  return () => {
    const s = mem.get(channel);
    if (!s) return;
    s.delete(handler);
    if (s.size === 0) mem.delete(channel);
  };
}

export async function publish(
  channel: string,
  payload: unknown
): Promise<void> {
  if (usingUpstash && upstashPublish) return upstashPublish(channel, payload);
  return memoryPublish(channel, payload);
}

export function subscribe(channel: string, handler: Handler): () => void {
  if (usingUpstash && upstashSubscribe)
    return upstashSubscribe(channel, handler);
  return memorySubscribe(channel, handler);
}
