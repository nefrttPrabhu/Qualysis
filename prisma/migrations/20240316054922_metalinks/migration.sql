/*
  Warnings:

  - Added the required column `resume_url` to the `Applicant` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Applicant" ADD COLUMN     "resume_url" TEXT NOT NULL,
ALTER COLUMN "linkedin_url" DROP NOT NULL,
ALTER COLUMN "github_url" DROP NOT NULL,
ALTER COLUMN "portfolio_url" DROP NOT NULL;

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "github_url" TEXT,
ADD COLUMN     "linkedin_url" TEXT,
ADD COLUMN     "portfolio_url" TEXT,
ADD COLUMN     "resume_url" TEXT;
