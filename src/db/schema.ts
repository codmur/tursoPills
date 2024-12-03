import { int, sqliteTable, text } from "drizzle-orm/sqlite-core";
export const usersTable = sqliteTable("users_table", {
  id: int().primaryKey({ autoIncrement: true }),
  name: text().notNull(),
  age: int().notNull(),
  email: text().notNull().unique(),
});

export const pillsTable = sqliteTable("pills_table", {
  id: int().primaryKey({ autoIncrement: true }),
  name: text().notNull(),
  unids: int().notNull(),
  date: text().notNull(),
});