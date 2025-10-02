/*
  Warnings:

  - You are about to drop the column `propsJson` on the `Component` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Component" DROP COLUMN "propsJson",
ADD COLUMN     "props" JSONB NOT NULL DEFAULT '{}',
ADD COLUMN     "schemaVer" INTEGER NOT NULL DEFAULT 1;

-- CreateTable
CREATE TABLE "ComponentVersion" (
    "id" TEXT NOT NULL,
    "componentId" TEXT NOT NULL,
    "rev" INTEGER NOT NULL,
    "sourceCode" TEXT NOT NULL,
    "props" JSONB NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "ComponentVersion_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "component_rev_idx" ON "ComponentVersion"("componentId", "rev");

-- CreateIndex
CREATE INDEX "Component_updatedAt_idx" ON "Component"("updatedAt");
