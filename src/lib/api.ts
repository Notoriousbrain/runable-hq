export type ComponentRecord = {
  id: string;
  rev: number;
  name: string;
  sourceCode: string;
  props: Record<string, unknown>;
  createdAt: string;
  updatedAt: string;
};

export async function createComponent(payload: {
  sourceCode: string;
  name?: string;
  props?: unknown;
}): Promise<ComponentRecord> {
  const res = await fetch(`/api/component`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });
  if (!res.ok) throw new Error(await res.text());
  return res.json();
}

export async function getComponent(id: string): Promise<ComponentRecord> {
  const res = await fetch(`/api/preview/${id}`);
  if (!res.ok) throw new Error(await res.text());
  return res.json();
}

export async function updateComponent(
  id: string,
  payload: Partial<Pick<ComponentRecord, "sourceCode" | "props">> & {
    rev: number;
  }
): Promise<ComponentRecord> {
  const res = await fetch(`/api/component/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });
  if (res.status === 409) {
    const data = await res.json();
    throw Object.assign(new Error("Revision conflict"), { code: 409, data });
  }
  if (!res.ok) throw new Error(await res.text());
  return res.json();
}
