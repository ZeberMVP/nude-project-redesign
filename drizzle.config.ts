import * as dotenv from 'dotenv'
import type { Config } from 'drizzle-kit'

dotenv.config()

export default {
	schema: './src/db/schema.ts',
	driver: 'mysql2',
	out: './drizzle',
	dbCredentials: {
		host: process.env.DATABASE_HOST!,
		user: process.env.DATABASE_USER,
		database: process.env.DATABASE_NAME!,
		port: parseInt(process.env.DATABASE_PORT!),
		password: process.env.DATABASE_PASSWORD,
	},
} satisfies Config
