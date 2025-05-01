-- CreateTable
CREATE TABLE `bloquedCPFs` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `blockedCPF` VARCHAR(11) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
