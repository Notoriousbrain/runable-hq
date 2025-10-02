// prisma/seed.ts
import { PrismaClient } from "@prisma/client";
import { initialShowcaseProps } from "../src/types";

const prisma = new PrismaClient();

async function main() {
  await prisma.titleComponent.upsert({
    where: { id: "showcase-heading" },
    update: {
      text: initialShowcaseProps.titles.showcase.text,
      color: initialShowcaseProps.titles.showcase.color,
      size: initialShowcaseProps.titles.showcase.size,
      weight: initialShowcaseProps.titles.showcase.weight,
    },
    create: {
      id: "showcase-heading",
      text: initialShowcaseProps.titles.showcase.text,
      color: initialShowcaseProps.titles.showcase.color,
      size: initialShowcaseProps.titles.showcase.size,
      weight: initialShowcaseProps.titles.showcase.weight,
    },
  });

  await prisma.titleComponent.upsert({
    where: { id: "landing-heading" },
    update: {
      text: initialShowcaseProps.titles.landing.text,
      color: initialShowcaseProps.titles.landing.color,
      size: initialShowcaseProps.titles.landing.size,
      weight: initialShowcaseProps.titles.landing.weight,
    },
    create: {
      id: "landing-heading",
      text: initialShowcaseProps.titles.landing.text,
      color: initialShowcaseProps.titles.landing.color,
      size: initialShowcaseProps.titles.landing.size,
      weight: initialShowcaseProps.titles.landing.weight,
    },
  });
}

main()
  .then(async () => {
    console.log("🌱 Seed completed");
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error("❌ Seed error:", e);
    await prisma.$disconnect();
    process.exit(1);
  });
