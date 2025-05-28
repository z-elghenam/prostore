"use server";
import { convertToPlainObject } from "../utils";
import { prisma } from "../db";

// Get the latest products
export async function getLatestProducts() {
  const data = await prisma.product.findMany({
    take: 4,
    orderBy: { createdAt: "desc" },
  });

  return convertToPlainObject(data);
}
