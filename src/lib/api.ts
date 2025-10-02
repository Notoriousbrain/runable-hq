import type { TitleToken } from "@/types";

export type TitleComponentRecord = {
  id: string;
  text: string;
  color: string;
  size: number;
  weight: number;
  createdAt: string;
  updatedAt: string;
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

export async function listTitles() {
  const res = await fetch(`/api/title`, { cache: "no-store" });
  return json<TitleComponentRecord[]>(res);
}

export async function getTitle(id: string) {
  const res = await fetch(`/api/title/${encodeURIComponent(id)}`, {
    cache: "no-store",
  });
  return json<TitleComponentRecord>(res);
}

export async function createTitle(input: TitleToken) {
  const res = await fetch(`/api/title`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(input),
  });
  return json<TitleComponentRecord>(res);
}

export async function updateTitle(id: string, data: Partial<TitleToken>) {
  const res = await fetch(`/api/title/${encodeURIComponent(id)}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  return json<TitleComponentRecord>(res);
}

export async function deleteTitle(id: string) {
  const res = await fetch(`/api/title/${encodeURIComponent(id)}`, {
    method: "DELETE",
  });
  return json<{ success: boolean }>(res);
}
