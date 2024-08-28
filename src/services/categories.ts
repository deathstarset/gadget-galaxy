import { category } from "@/models/categories";
import db from "@/utils/db";
import { eq } from "drizzle-orm";

export async function getCategories() {
  return db.select().from(category);
}

export async function getCategoryByID(id: string) {
  return db.query.category.findFirst({ where: eq(category.id, id) });
}

export async function createCategory(createCategoryInfo: CreateCategory) {
  return db.insert(category).values(createCategoryInfo).returning();
}
