import { category, product } from "@/models";
import db from "./db";
import { promises as fs } from "fs";
import path from "path";
import { PgTableWithColumns } from "drizzle-orm/pg-core";

const data = [
  {
    name: "categories",
    path: path.join("data", "categories.json"),
    record: category,
  },
  {
    name: "products",
    path: path.join("data", "products.json"),
    record: product,
  },
];

async function populate(
  data: { name: string; path: string; record: PgTableWithColumns<any> }[]
) {
  try {
    for (const model of data) {
      const modelData = await fs.readFile(model.path, "utf-8");
      if (modelData.trim() === "") {
        continue;
      }
      const modelJson = JSON.parse(modelData);
      await db.delete(model.record);
      await db.insert(model.record).values(modelJson);
      console.log(`${model.name} inserted succefully`);
    }
  } catch (error) {
    console.log((error as Error).message);
  } finally {
    process.exit(0);
  }
}

populate(data);
