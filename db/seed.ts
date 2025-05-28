import { PrismaClient } from "../lib/generated/prisma";
import sampleData from "./sample-data";

const prisma = new PrismaClient();

export async function main() {
  for (const pro of sampleData) {
    await prisma.product.create({ data: pro });
  }
}

main();
