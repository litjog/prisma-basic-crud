-- AlterTable
ALTER TABLE `todos` MODIFY `has_completed` BOOLEAN NOT NULL DEFAULT false,
    ALTER COLUMN `updated_at` DROP DEFAULT;
