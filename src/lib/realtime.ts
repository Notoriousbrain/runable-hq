export type Handler = (msg: unknown) => void;

const mem = new Map<string, Set<Handler>>();

export async function publish(
  channel: string,
  payload: unknown
): Promise<void> {
  const set = mem.get(channel);
  if (!set || set.size === 0) return;
  for (const h of Array.from(set)) {
    try {
      h(payload);
    } catch {}
  }
}

export function subscribe(channel: string, handler: Handler): () => void {
  let set = mem.get(channel);
  if (!set) {
    set = new Set<Handler>();
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
