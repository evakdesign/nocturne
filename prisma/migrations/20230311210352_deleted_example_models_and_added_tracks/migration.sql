/*
  Warnings:

  - You are about to drop the column `name` on the `Track` table. All the data in the column will be lost.
  - The primary key for the `User` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the `Post` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Profile` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `albumName` to the `Track` table without a default value. This is not possible if the table is not empty.
  - Added the required column `inQueue` to the `Track` table without a default value. This is not possible if the table is not empty.
  - Added the required column `labelName` to the `Track` table without a default value. This is not possible if the table is not empty.
  - Added the required column `songName` to the `Track` table without a default value. This is not possible if the table is not empty.
  - Added the required column `trackImageSrc` to the `Track` table without a default value. This is not possible if the table is not empty.
  - Added the required column `trackSrc` to the `Track` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Post" DROP CONSTRAINT "Post_authorId_fkey";

-- DropForeignKey
ALTER TABLE "Profile" DROP CONSTRAINT "Profile_userId_fkey";

-- AlterTable
ALTER TABLE "Track" DROP COLUMN "name",
ADD COLUMN     "albumName" TEXT NOT NULL,
ADD COLUMN     "inQueue" BOOLEAN NOT NULL,
ADD COLUMN     "labelName" TEXT NOT NULL,
ADD COLUMN     "songName" TEXT NOT NULL,
ADD COLUMN     "trackImageSrc" TEXT NOT NULL,
ADD COLUMN     "trackSrc" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "User" DROP CONSTRAINT "User_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "User_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "User_id_seq";

-- DropTable
DROP TABLE "Post";

-- DropTable
DROP TABLE "Profile";

-- CreateTable
CREATE TABLE "Show" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Show_pkey" PRIMARY KEY ("id")
);
