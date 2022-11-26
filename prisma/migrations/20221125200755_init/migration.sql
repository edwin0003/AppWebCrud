-- CreateTable
CREATE TABLE "Users" (
    "id" SERIAL NOT NULL,
    "user" TEXT NOT NULL,
    "rol" TEXT NOT NULL,

    CONSTRAINT "Users_pkey" PRIMARY KEY ("id")
);
