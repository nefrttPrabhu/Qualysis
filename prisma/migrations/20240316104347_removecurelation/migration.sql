-- DropForeignKey
ALTER TABLE "Company" DROP CONSTRAINT "Company_user_id_fkey";

-- DropIndex
DROP INDEX "Company_user_id_key";
