import type { CartItem } from '@/types'
import { sql, type InferModel } from 'drizzle-orm'
import {
	boolean,
	datetime,
	decimal,
	int,
	json,
	mysqlEnum,
	mysqlTable,
	serial,
	text,
	timestamp,
	varchar,
} from 'drizzle-orm/mysql-core'

export const products = mysqlTable('products', {
	id: serial('id').primaryKey(),
	name: varchar('name', { length: 191 }).notNull(),
	description: text('description'),
	image: text('image'),
	category: mysqlEnum('category', [
		'tees',
		'hoodies & sweaters',
		'bottoms',
		'swimwear',
		'knitwear',
		'shirts & polos',
		'underwear',
		'outerwear',
	])
		.notNull()
		.default('tees'),
	price: decimal('price', { precision: 10, scale: 2 }).notNull().default('0'),
	inventory: int('inventory').notNull().default(0),
	createdAt: datetime('createdAt', { mode: 'string', fsp: 3 })
		.notNull()
		.default(sql`CURRENT_TIMESTAMP(3)`),
})

export type Product = InferModel<typeof products>

export const carts = mysqlTable('carts', {
	id: serial('id').primaryKey(),
	userId: varchar('userId', { length: 191 }),
	paymentIntentId: varchar('paymentIntentId', { length: 191 }),
	clientSecret: varchar('clientSecret', { length: 191 }),
	items: json('items').$type<CartItem[] | null>().default(null),
	createdAt: timestamp('createdAt').defaultNow(),
})

export type Cart = InferModel<typeof carts>

export const emailPreferences = mysqlTable('email_preferences', {
	id: serial('id').primaryKey(),
	userId: varchar('userId', { length: 191 }),
	email: varchar('email', { length: 191 }).notNull(),
	token: varchar('token', { length: 191 }).notNull(),
	newsletter: boolean('newsletter').notNull().default(false),
	marketing: boolean('marketing').notNull().default(false),
	transactional: boolean('transactional').notNull().default(false),
	createdAt: timestamp('createdAt').defaultNow(),
})

export type EmailPreference = InferModel<typeof emailPreferences>
