// prisma/seed.ts
import { PrismaClient } from "./src/generated/prisma";

const prisma = new PrismaClient();

/**
 * All landing + showcase page texts.
 * - Heading
 * - Category labels
 * - Showcase item titles/descriptions
 * - Badge labels used inside item cards
 */
const TEXTS: Array<{
  id: string;
  text: string;
  color: string; // used on create only
  size: number; // used on create only
  weight: number; // used on create only
}> = [
  // ---- HERO & LANDING ----
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

  // ---- SHOWCASE SECTION ----
  // Section heading
  {
    id: "showcase-heading",
    text: "Explore what people are building with Runable",
    color: "#ffffffb3",
    size: 16,
    weight: 400,
  },

  // Category chips (labels only; icons are in code)
  {
    id: "showcase-cat-featured",
    text: "Featured",
    color: "#ffffff",
    size: 13,
    weight: 600,
  },
  {
    id: "showcase-cat-marketing",
    text: "Marketing",
    color: "#ffffff",
    size: 13,
    weight: 600,
  },
  {
    id: "showcase-cat-sales",
    text: "Sales",
    color: "#ffffff",
    size: 13,
    weight: 600,
  },
  {
    id: "showcase-cat-programming",
    text: "Programming",
    color: "#ffffff",
    size: 13,
    weight: 600,
  },
  {
    id: "showcase-cat-research",
    text: "Research",
    color: "#ffffff",
    size: 13,
    weight: 600,
  },
  {
    id: "showcase-cat-productivity",
    text: "Productivity",
    color: "#ffffff",
    size: 13,
    weight: 600,
  },
  {
    id: "showcase-cat-education",
    text: "Education",
    color: "#ffffff",
    size: 13,
    weight: 600,
  },
  {
    id: "showcase-cat-hiring",
    text: "Hiring",
    color: "#ffffff",
    size: 13,
    weight: 600,
  },
  {
    id: "showcase-cat-lifestyle",
    text: "Lifestyle",
    color: "#ffffff",
    size: 13,
    weight: 600,
  },

  // Showcase item titles (1..8)
  {
    id: "showcase-item-1-title",
    text: "Startup Ebook Landing Page",
    color: "#ffffff",
    size: 15,
    weight: 600,
  },
  {
    id: "showcase-item-2-title",
    text: "Image Cropper Tool",
    color: "#ffffff",
    size: 15,
    weight: 600,
  },
  {
    id: "showcase-item-3-title",
    text: "Python Cheatsheet",
    color: "#ffffff",
    size: 15,
    weight: 600,
  },
  {
    id: "showcase-item-4-title",
    text: "Vietnam Travel Guide",
    color: "#ffffff",
    size: 15,
    weight: 600,
  },
  {
    id: "showcase-item-5-title",
    text: "Character.AI Mentions",
    color: "#ffffff",
    size: 15,
    weight: 600,
  },
  {
    id: "showcase-item-6-title",
    text: "US-China Comparison",
    color: "#ffffff",
    size: 15,
    weight: 600,
  },
  {
    id: "showcase-item-7-title",
    text: "Perplexity AI",
    color: "#ffffff",
    size: 15,
    weight: 600,
  },
  {
    id: "showcase-item-8-title",
    text: "Daily Habits Dashboard",
    color: "#ffffff",
    size: 15,
    weight: 600,
  },

  // Showcase item descriptions (1..8)
  {
    id: "showcase-item-1-desc",
    text: "High-conversion landing page designed to capture leads for your startup’s downloadable ebook.",
    color: "#ffffffb3",
    size: 13,
    weight: 400,
  },
  {
    id: "showcase-item-2-desc",
    text: "Web-based cropping solution with live preview, adjustable dimensions, and instant image download.",
    color: "#ffffffb3",
    size: 13,
    weight: 400,
  },
  {
    id: "showcase-item-3-desc",
    text: "Beginner-friendly PDF cheatsheet for Python covering essential syntax, tips, and quick reference guides.",
    color: "#ffffffb3",
    size: 13,
    weight: 400,
  },
  {
    id: "showcase-item-4-desc",
    text: "One-week travel itinerary for Vietnam covering destinations, activities, and tips.",
    color: "#ffffffb3",
    size: 13,
    weight: 400,
  },
  {
    id: "showcase-item-5-desc",
    text: "Spreadsheet analyzing mentions on social platforms with sentiment insights.",
    color: "#ffffffb3",
    size: 13,
    weight: 400,
  },
  {
    id: "showcase-item-6-desc",
    text: "Report comparing US and China financial years with sector developments and economic trends.",
    color: "#ffffffb3",
    size: 13,
    weight: 400,
  },
  {
    id: "showcase-item-7-desc",
    text: "Comprehensive analysis & strategy: report layout with executive summary.",
    color: "#ffffffb3",
    size: 13,
    weight: 400,
  },
  {
    id: "showcase-item-8-desc",
    text: "Build better habits with a clean productivity dashboard and streak tracking.",
    color: "#ffffffb3",
    size: 13,
    weight: 400,
  },

  // Badge labels used inside cards
  {
    id: "showcase-badge-marketing",
    text: "Marketing",
    color: "#ffffff",
    size: 11,
    weight: 600,
  },
  {
    id: "showcase-badge-website",
    text: "Website",
    color: "#ffffff",
    size: 11,
    weight: 600,
  },
  {
    id: "showcase-badge-programming",
    text: "Programming",
    color: "#ffffff",
    size: 11,
    weight: 600,
  },
  {
    id: "showcase-badge-education",
    text: "Education",
    color: "#ffffff",
    size: 11,
    weight: 600,
  },
  {
    id: "showcase-badge-report",
    text: "Report",
    color: "#ffffff",
    size: 11,
    weight: 600,
  },
  {
    id: "showcase-badge-lifestyle",
    text: "Lifestyle",
    color: "#ffffff",
    size: 11,
    weight: 600,
  },
  {
    id: "showcase-badge-data-analytics",
    text: "Data Analytics",
    color: "#ffffff",
    size: 11,
    weight: 600,
  },
  {
    id: "showcase-badge-document",
    text: "Document",
    color: "#ffffff",
    size: 11,
    weight: 600,
  },
  {
    id: "showcase-badge-finance",
    text: "Finance",
    color: "#ffffff",
    size: 11,
    weight: 600,
  },
  {
    id: "showcase-badge-productivity",
    text: "Productivity",
    color: "#ffffff",
    size: 11,
    weight: 600,
  },
];

async function main() {
  for (const t of TEXTS) {
    await prisma.titleComponent.upsert({
      where: { id: t.id },
      update: { text: t.text }, // do not overwrite styling on update
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
