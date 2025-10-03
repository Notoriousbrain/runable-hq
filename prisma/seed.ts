import { PrismaClient } from "prisma/src/generated/prisma";
import { TEXTS } from "../src/lib/seed-data";

const prisma = new PrismaClient();

async function main() {
  for (const t of TEXTS) {
    await prisma.titleComponent.upsert({
      where: { id: t.id },
      update: {
        text: t.text,
        color: t.color,
        size: t.size,
        weight: t.weight,
      },
      create: {
        id: t.id,
        text: t.text,
        color: t.color,
        size: t.size,
        weight: t.weight,
      },
    });
  }
  console.log(`🌱 Seed completed (${TEXTS.length} texts)`);
}

main()
  .catch((e) => {
    console.error("❌ Seed error:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
