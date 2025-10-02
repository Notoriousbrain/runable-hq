// prisma/seed.ts
import { initialShowcaseProps } from "../src/types";
import { PrismaClient } from "./src/generated/prisma";

const prisma = new PrismaClient();

async function main() {
  // Showcase heading component (only "showcase" token inside)
  await prisma.component.upsert({
    where: { id: "showcase-heading" },
    update: {
      name: "Showcase Heading",
      sourceCode: "<ShowcaseHeading />",
      props: { tokens: { showcase: initialShowcaseProps.tokens.showcase } },
      schemaVer: 1,
    },
    create: {
      id: "showcase-heading",
      name: "Showcase Heading",
      sourceCode: "<ShowcaseHeading />",
      props: { tokens: { showcase: initialShowcaseProps.tokens.showcase } },
      schemaVer: 1,
    },
  });

  // Landing heading component (only "landing" token inside)
  await prisma.component.upsert({
    where: { id: "landing-heading" },
    update: {
      name: "Landing Heading",
      sourceCode: "<LandingHeading />",
      props: { tokens: { landing: initialShowcaseProps.tokens.landing } },
      schemaVer: 1,
    },
    create: {
      id: "landing-heading",
      name: "Landing Heading",
      sourceCode: "<LandingHeading />",
      props: { tokens: { landing: initialShowcaseProps.tokens.landing } },
      schemaVer: 1,
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
