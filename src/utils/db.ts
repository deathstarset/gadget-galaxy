import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";
import * as schema from "@/models/index";
import "dotenv/config";

// for query purposes
const queryClient = postgres(process.env.DB_STR as string);
const db = drizzle(queryClient, { schema });

export default db;
