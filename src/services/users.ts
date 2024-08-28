import { user } from "@/models/users";
import db from "@/utils/db";
import { eq } from "drizzle-orm";

export async function createUser(createUser: CreateUser) {
  return db
    .insert(user)
    .values({ ...createUser })
    .returning();
}

export async function getUserByEmail(email: string) {
  return db.query.user.findFirst({ where: eq(user.email, email) });
}

export async function getUserByID(id: string) {
  return db.select().from(user).where(eq(user.id, id));
}
