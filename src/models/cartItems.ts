import { relations, sql } from "drizzle-orm";
import { integer, pgTable, uuid, timestamp } from "drizzle-orm/pg-core";
import { product } from "./products";
import { cart } from "./carts";
export const cartItem = pgTable("cartItems", {
  id: uuid("id")
    .primaryKey()
    .default(sql`gen_random_uuid()`),
  quantity: integer("quantity").notNull(),
  productID: uuid("product_id")
    .notNull()
    .references(() => product.id, { onDelete: "cascade" }),
  cartID: uuid("cart_id")
    .notNull()
    .references(() => cart.id, { onDelete: "cascade" }),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

export const cartItemRelations = relations(cartItem, ({ one, many }) => ({
  product: one(product, {
    fields: [cartItem.productID],
    references: [product.id],
  }),
  cart: one(cart, {
    fields: [cartItem.cartID],
    references: [cart.id],
  }),
}));
