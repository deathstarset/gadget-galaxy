import { pgTable, timestamp, uuid } from "drizzle-orm/pg-core";
import { relations, sql } from "drizzle-orm";
import { cartItem } from "./cartItems";

export const cart = pgTable("carts", {
  id: uuid("id")
    .primaryKey()
    .default(sql`gen_random_uuid()`),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

export const cartRelations = relations(cart, ({ one, many }) => ({
  cartItems: many(cartItem),
}));
