import { category, product } from "@/models";
import { count, eq } from "drizzle-orm";
import db from "@/utils/db";
export async function createProduct(createProduct: CreateProduct) {
  return db
    .insert(product)
    .values({
      name: createProduct.name,
      description: createProduct.description,
      quantity: createProduct.quantity,
      price: createProduct.price,
      categoryID: createProduct.categoryID,
      image: createProduct.image as string,
    })
    .returning();
}

export async function getProducts() {
  return db
    .select()
    .from(product)
    .rightJoin(category, eq(product.categoryID, category.id));
}

export async function getProductsPaginate(
  limit: number = 5,
  offset: number = 0
) {
  return db
    .select()
    .from(product)
    .rightJoin(category, eq(product.categoryID, category.id))
    .limit(limit)
    .offset(offset);
}

export async function getProductsCount() {
  return db.select({ count: count() }).from(product);
}
export async function getProductByID(id: string) {
  return db.query.product.findFirst({
    where: eq(product.id, id),
    with: { category: true },
  });
}
