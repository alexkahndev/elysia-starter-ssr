import { Kysely, PostgresDialect } from "kysely";
import { Database } from "./db-types";
import { Pool } from "pg";


const dialect = new PostgresDialect({
    pool: new Pool({
        database: process.env.PGDATABASE,
        host: process.env.PGHOST,
        user: process.env.PGUSER,
        password: process.env.PGPASSWORD,
        ssl: {
            rejectUnauthorized: false,
        }
    })
})

export const db = new Kysely<Database>({
    dialect,
});

/*

async function testConnection() {
    try {
      await db.selectFrom("appuser").execute();
      console.log('Database connection successful');
    } catch (error) {
      console.error('Failed to connect to the database', error);
      console.error('Error details:', error.message);
    }
  }
  
testConnection()
*/