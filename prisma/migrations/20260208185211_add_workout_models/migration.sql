-- CreateTable
CREATE TABLE "public"."PushUps" (
    "id" SERIAL NOT NULL,
    "count" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "deviceId" TEXT,
    "userId" TEXT NOT NULL,

    CONSTRAINT "PushUps_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."SitUps" (
    "id" SERIAL NOT NULL,
    "count" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "deviceId" TEXT,
    "userId" TEXT NOT NULL,

    CONSTRAINT "SitUps_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "PushUps_userId_idx" ON "public"."PushUps"("userId");

-- CreateIndex
CREATE INDEX "SitUps_userId_idx" ON "public"."SitUps"("userId");

-- AddForeignKey
ALTER TABLE "public"."PushUps" ADD CONSTRAINT "PushUps_userId_fkey" FOREIGN KEY ("userId") REFERENCES "public"."UserProfile"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."SitUps" ADD CONSTRAINT "SitUps_userId_fkey" FOREIGN KEY ("userId") REFERENCES "public"."UserProfile"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
