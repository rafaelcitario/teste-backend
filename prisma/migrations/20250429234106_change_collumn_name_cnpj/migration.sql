/*
  Warnings:

  - You are about to drop the column `number` on the `cnpjs` table. All the data in the column will be lost.
  - Added the required column `cnpj` to the `cnpjs` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `cnpjs` DROP COLUMN `number`,
    ADD COLUMN `cnpj` VARCHAR(14) NOT NULL;
