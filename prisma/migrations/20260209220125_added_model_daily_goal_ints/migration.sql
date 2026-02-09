/*
  Warnings:

  - Added the required column `pullupsCount` to the `DailyGoal` table without a default value. This is not possible if the table is not empty.
  - Added the required column `pushupsCount` to the `DailyGoal` table without a default value. This is not possible if the table is not empty.
  - Added the required column `situpsCount` to the `DailyGoal` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "public"."DailyGoal" ADD COLUMN     "pullupsCount" INTEGER NOT NULL,
ADD COLUMN     "pushupsCount" INTEGER NOT NULL,
ADD COLUMN     "situpsCount" INTEGER NOT NULL;
