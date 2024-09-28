/*
  Warnings:

  - Added the required column `location` to the `Jobs` table without a default value. This is not possible if the table is not empty.
  - Added the required column `mode` to the `Jobs` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "jobMode" AS ENUM ('REMOTE', 'HYBRID', 'ONSITE');

-- AlterTable
ALTER TABLE "Company" ADD COLUMN     "website_url" TEXT;

-- AlterTable
ALTER TABLE "Jobs" ADD COLUMN     "location" TEXT NOT NULL,
ADD COLUMN     "mode" "jobMode" NOT NULL;
