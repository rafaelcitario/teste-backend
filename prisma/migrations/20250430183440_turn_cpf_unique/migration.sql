/*
  Warnings:

  - You are about to drop the `user_cnpjs` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[cpf]` on the table `users` will be added. If there are existing duplicate values, this will fail.

*/
-- DropForeignKey
ALTER TABLE `user_cnpjs` DROP FOREIGN KEY `user_cnpjs_cnpjsId_fkey`;

-- DropForeignKey
ALTER TABLE `user_cnpjs` DROP FOREIGN KEY `user_cnpjs_usersId_fkey`;

-- DropTable
DROP TABLE `user_cnpjs`;

-- CreateTable
CREATE TABLE `users_cnpjs` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `usersId` INTEGER NOT NULL,
    `cnpjsId` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateIndex
CREATE UNIQUE INDEX `users_cpf_key` ON `users`(`cpf`);

-- AddForeignKey
ALTER TABLE `users_cnpjs` ADD CONSTRAINT `users_cnpjs_usersId_fkey` FOREIGN KEY (`usersId`) REFERENCES `users`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `users_cnpjs` ADD CONSTRAINT `users_cnpjs_cnpjsId_fkey` FOREIGN KEY (`cnpjsId`) REFERENCES `cnpjs`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
