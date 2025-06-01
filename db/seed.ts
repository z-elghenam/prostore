import { PrismaClient } from "../lib/generated/prisma";
import sampleData from "./sample-data";

const prisma = new PrismaClient();

export async function main() {
  await prisma.product.deleteMany();
  await prisma.account.deleteMany();
  await prisma.session.deleteMany();
  await prisma.verificationToken.deleteMany();
  await prisma.user.deleteMany();

  await prisma.product.createMany({ data: sampleData.products });
  await prisma.user.createMany({ data: sampleData.users });
}

main();
