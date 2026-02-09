-- CreateTable
CREATE TABLE "public"."DailyGoal" (
    "id" SERIAL NOT NULL,
    "situps" BOOLEAN NOT NULL,
    "pullups" BOOLEAN NOT NULL,
    "pushups" BOOLEAN NOT NULL,
    "userId" TEXT NOT NULL,

    CONSTRAINT "DailyGoal_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "DailyGoal_userId_key" ON "public"."DailyGoal"("userId");

-- CreateIndex
CREATE INDEX "DailyGoal_userId_idx" ON "public"."DailyGoal"("userId");

-- AddForeignKey
ALTER TABLE "public"."DailyGoal" ADD CONSTRAINT "DailyGoal_userId_fkey" FOREIGN KEY ("userId") REFERENCES "public"."UserProfile"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
