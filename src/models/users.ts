import { drizzle } from "drizzle-orm/libsql/node"
import { usersTable } from "../db/schema";
import 'dotenv/config';

const db = drizzle({
    connection: {
        url: process.env.TURSO_DATABASE_URL!,
        authToken: process.env.TURSO_AUTH_TOKEN!
    }
});

export class UserModel {
    static async getAll() {
        return await db.select().from(usersTable);
    }

    static async create({ input }: any) {
        const user: typeof usersTable.$inferInsert = {
            ...input
        };

        return await db.insert(usersTable).values(user).returning();
    }



}