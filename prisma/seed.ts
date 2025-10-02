import { PrismaClient } from "./src/generated/prisma";

const prisma = new PrismaClient();

const TEXTS: Array<{
  id: string;
  text: string;
  color: string;
  size: number; 
  weight: number;
}> = [
  {
    id: "landing-heading",
    text: "What can I get done for you?",
    color: "#ffffff",
    size: 40,
    weight: 600,
  },

  {
    id: "landing-input-placeholder",
    text: "Create a weekly report of stock market trends",
    color: "#ffffffb3",
    size: 15,
    weight: 400,
  },

  {
    id: "landing-upgrade-banner",
    text: "Upgrade your plan to unlock more power of Runable",
    color: "#ffffff",
    size: 15,
    weight: 500,
  },
  {
    id: "landing-upgrade-button",
    text: "Upgrade",
    color: "#5ba8f4",
    size: 14,
    weight: 700,
  },

  {
    id: "landing-runbooks-title",
    text: "Runbooks",
    color: "#ffffff",
    size: 14,
    weight: 900,
  },

  {
    id: "card-title-create-presentation",
    text: "Create a presentation",
    color: "#ffffff",
    size: 14,
    weight: 600,
  },
  {
    id: "card-title-make-website",
    text: "Make a website",
    color: "#ffffff",
    size: 14,
    weight: 600,
  },
  {
    id: "card-title-create-report",
    text: "Create report",
    color: "#ffffff",
    size: 14,
    weight: 600,
  },
  {
    id: "card-title-create-podcast",
    text: "Create a podcast",
    color: "#ffffff",
    size: 14,
    weight: 600,
  },
  {
    id: "card-title-research-about",
    text: "Research about",
    color: "#ffffff",
    size: 14,
    weight: 600,
  },
  {
    id: "card-title-browse-for-me",
    text: "Browse for me",
    color: "#ffffff",
    size: 14,
    weight: 600,
  },
  {
    id: "card-title-connect-your-apps",
    text: "Connect your apps",
    color: "#ffffff",
    size: 14,
    weight: 600,
  },
];

async function main() {
  for (const t of TEXTS) {
    await prisma.titleComponent.upsert({
      where: { id: t.id },
      update: {
        text: t.text,
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
