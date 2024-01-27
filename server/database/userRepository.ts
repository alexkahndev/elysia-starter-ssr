import { db } from "./database";
import { User, NewUser, UpdatedUser } from "./db-types";

export async function createUser(appuser: NewUser) {
    return await db.insertInto("appuser")
        .values(appuser)
        .returningAll()
        .executeTakeFirst();
}