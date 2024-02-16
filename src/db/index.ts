import { drizzle } from 'drizzle-orm/mysql2'
import mysql from 'mysql2/promise'

import * as schema from './schema'

// Create the connection
const poolConnection = mysql.createPool({
	host: process.env.DATABASE_HOST,
	user: process.env.DATABASE_USER,
	database: process.env.DATABASE_NAME,
	port: parseInt(process.env.DATABASE_PORT!),
	password: process.env.DATABASE_PASSWORD,
})

export const db = drizzle(poolConnection, { schema })
