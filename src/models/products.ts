import {
  pgTable,
  uuid,
  text,
  timestamp,
  decimal,
  integer,
} from "drizzle-orm/pg-core";
import { relations, sql } from "drizzle-orm";
import { category } from "./categories";

export const product = pgTable("products", {
  id: uuid("id")
    .primaryKey()
    .default(sql`gen_random_uuid()`),
  name: text("name").notNull(),
  description: text("description").notNull(),
  image: text("image").notNull().default("gadget/example.jpg"),
  quantity: integer("quantity").notNull(),
  price: decimal("price").notNull(),
  categoryID: uuid("category_id")
    .notNull()
    .references(() => category.id, { onDelete: "cascade" }),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

export const productRelations = relations(product, ({ one, many }) => ({
  category: one(category, {
    fields: [product.categoryID],
    references: [category.id],
  }),
}));
