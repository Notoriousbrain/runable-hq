// src/lib/api.ts
export type ComponentRecord<T = unknown> = {
  id: string;
  rev: number;
  name: string;
  sourceCode: string;
  props: T;
  createdAt: string;
  updatedAt: string;
};

export async function createComponent<T>(payload: {
  sourceCode: string;
  name?: string;
  props?: T;
}): Promise<ComponentRecord<T>> {
  const res = await fetch(`/api/component`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });
  if (!res.ok) throw new Error(await res.text());
  return res.json() as Promise<ComponentRecord<T>>;
}

export async function getComponent<T>(id: string): Promise<ComponentRecord<T>> {
  const res = await fetch(`/api/preview/${id}`);
  if (!res.ok) throw new Error(await res.text());
  return res.json() as Promise<ComponentRecord<T>>;
}

export async function updateComponent<T>(
  id: string,
  payload: Partial<Pick<ComponentRecord<T>, "sourceCode" | "props">> & {
    rev: number;
  }
): Promise<ComponentRecord<T>> {
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
  return res.json() as Promise<ComponentRecord<T>>;
}
