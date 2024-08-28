import type { Config } from "drizzle-kit";
import "dotenv/config";

export default {
  dialect: "postgresql",
  schema: "./src/models/index.ts",
  out: "./drizzle",
  verbose: true,
  dbCredentials: {
    url: process.env.DB_STR as string,
  },
} satisfies Config;
