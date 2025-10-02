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
    const msg =
      (body && typeof body === "object" && "error" in body
        ? String((body as { error?: unknown }).error)
        : res.statusText) || "Request failed";
    const err = new Error(msg) as ApiError;
    err.code = res.status;
    err.body = body;
    throw err;
  }
  return res.json() as Promise<T>;
}

export async function getComponent<TProps = ShowcaseProps>(id: string) {
  const res = await fetch(`/api/components/${encodeURIComponent(id)}`, {
    cache: "no-store",
  });
  return json<ComponentRecord<TProps>>(res);
}

export async function createOrGetComponent<TProps = ShowcaseProps>(input: {
  id: string;
  name?: string;
  sourceCode?: string;
  props?: TProps;
  schemaVer?: number;
}) {
  const res = await fetch(`/api/components`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(input),
  });
  return json<ComponentRecord<TProps>>(res);
}

export async function updateComponent<TProps = ShowcaseProps>(
  id: string,
  data: {
    name?: string;
    sourceCode?: string;
    props?: TProps;
    schemaVer?: number;
  }
) {
  const res = await fetch(`/api/components/${encodeURIComponent(id)}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  return json<ComponentRecord<TProps>>(res);
}
