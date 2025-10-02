import type { TitleToken } from "@/types";
import type { TitleComponentRecord } from "@/lib/api";

export function toTitleToken(record: TitleComponentRecord): TitleToken {
  return {
    text: record.text,
    color: record.color,
    size: record.size,
    weight: record.weight,
  };
}
