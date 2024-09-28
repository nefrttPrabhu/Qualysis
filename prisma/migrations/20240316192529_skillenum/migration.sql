/*
  Warnings:

  - The `skills` column on the `Jobs` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- CreateEnum
CREATE TYPE "skillsRequired" AS ENUM ('CPP', 'JAVA', 'PYTHON', 'JAVASCRIPT', 'TYPESCRIPT', 'HTML', 'CSS', 'DOCKER', 'KUBERNETES', 'OOPS', 'DSA', 'COMMUNICATION', 'KOTLIN', 'SWIFT', 'RUBY', 'RUST', 'REACT', 'NEXT', 'VUE', 'FLASK', 'DJANGO', 'ML');

-- AlterTable
ALTER TABLE "Jobs" DROP COLUMN "skills",
ADD COLUMN     "skills" "skillsRequired"[];
