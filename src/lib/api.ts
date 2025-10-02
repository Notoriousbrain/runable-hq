// src/lib/api.ts
import type { Json } from "@/types/json";

export type ComponentRecord<TProps = Json> = {
  id: string;
  name: string;
  sourceCode: string;
  props: TProps;
  rev: number;
  createdAt: string;
  updatedAt: string;
  schemaVer?: number;
};

export type UpdateConflictError<TProps = Json> = Error & {
  code?: number;
  data?: { serverRev: number; server: { sourceCode: string; props: TProps } };
  body?: unknown; // <- carry server JSON body through for other errors (404, etc.)
};

async function json<T>(res: Response): Promise<T> {
  if (!res.ok) {
    let body: unknown = null;
    try {
      body = await res.json();
    } catch {}
    const msg =
      (body && typeof body === "object" && body.error) ||
      res.statusText ||
      "Request failed";
    const err = new Error(msg) as UpdateConflictError;
    err.code = res.status;
    if (res.status === 409 && body && typeof body === "object") {
      err.data = body.data;
    }
    err.body = body;
    throw err;
  }
  return res.json();
}

/** Read a component by id */
export async function getComponent<TProps = Json>(
  id: string
): Promise<ComponentRecord<TProps>> {
  const res = await fetch(`/api/components/${encodeURIComponent(id)}`, {
    cache: "no-store",
  });
  return json<ComponentRecord<TProps>>(res);
}

/** Create a component (used only when allowed) */
export async function createComponent<TProps = Json>(input: {
  id?: string;
  name?: string;
  sourceCode?: string;
  props?: TProps;
  schemaVer?: number;
}): Promise<ComponentRecord<TProps>> {
  const res = await fetch(`/api/components`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(input),
  });
  return json<ComponentRecord<TProps>>(res);
}

/** Update with optimistic concurrency */
export async function updateComponent<TProps = Json>(
  id: string,
  data: {
    rev: number;
    sourceCode?: string;
    props?: TProps;
    schemaVer?: number;
  }
): Promise<{ id: string; rev: number }> {
  const res = await fetch(`/api/components/${encodeURIComponent(id)}`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  return json<{ id: string; rev: number }>(res);
}
