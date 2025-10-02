// src/lib/api.ts
import type { Json } from "@/types/json";
import type { ShowcaseProps } from "@/types";

export type ComponentRecord<TProps = ShowcaseProps> = {
  id: string;
  name: string;
  sourceCode: string;
  props: TProps;
  createdAt: string;
  updatedAt: string;
  schemaVer?: number;
};

export type ApiError = Error & {
  code?: number;
  body?: unknown;
};

async function json<T>(res: Response): Promise<T> {
  if (!res.ok) {
    let body: unknown = null;
    try {
      body = await res.json();
    } catch {}

    let msg = res.statusText || "Request failed";
    if (body && typeof body === "object" && "error" in body) {
      msg = String((body as { error?: unknown }).error ?? msg);
    }

    const err = new Error(msg) as ApiError;
    err.code = res.status;
    err.body = body;
    throw err;
  }
  return res.json() as Promise<T>;
}

export async function getComponent<TProps = Json>(
  id: string
): Promise<ComponentRecord<TProps>> {
  const res = await fetch(`/api/components/${encodeURIComponent(id)}`, {
    cache: "no-store",
  });
  return json<ComponentRecord<TProps>>(res);
}

export async function createComponent<TProps = Json>(input: {
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

export async function updateComponent<TProps = Json>(
  id: string,
  data: {
    name?: string;
    sourceCode?: string;
    props?: TProps;
    schemaVer?: number;
  }
): Promise<ComponentRecord<TProps>> {
  const res = await fetch(`/api/components/${encodeURIComponent(id)}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  return json<ComponentRecord<TProps>>(res);
}

export async function deleteComponent(id: string): Promise<void> {
  const res = await fetch(`/api/components/${encodeURIComponent(id)}`, {
    method: "DELETE",
  });
  if (!res.ok) {
    await json(res);
  }
}
