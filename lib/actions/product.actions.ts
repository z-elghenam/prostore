"use server";
import { LATEST_PRODUCTS_LIMIT } from "../constants";
import { prisma } from "../db";
import { convertToPlainObject } from "../utils";

// Get the latest products
export async function getLatestProducts() {
  const data = await prisma.product.findMany({
    take: LATEST_PRODUCTS_LIMIT,
    orderBy: { createdAt: "desc" },
  });

  const formattedProducts = data.map((product) => ({
    ...product,
    price: product.price.toString(),
    rating: product.rating.toString(), // if necessary
  }));

  return convertToPlainObject(formattedProducts);
}

// Get single product by slug
export async function getProductBySlug(slug: string) {
  return await prisma.product.findFirst({
    where: { slug: slug },
  });
}
