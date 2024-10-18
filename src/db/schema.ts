import { sql } from 'drizzle-orm'

import type { CartItem } from '@/types'
import {
	boolean,
	decimal,
	json,
	numeric,
	pgEnum,
	pgTable,
	serial,
	text,
	timestamp,
	varchar,
} from 'drizzle-orm/pg-core'

export const categoryEnum = pgEnum('category', [
	'tees',
	'hoodies & sweaters',
	'bottoms',
	'swimwear',
	'knitwear',
	'shirts & polos',
	'underwear',
	'outerwear',
])

export const products = pgTable('products', {
	id: serial('id').primaryKey(),
	name: varchar('name', { length: 191 }).notNull(),
	description: text('description'),
	image: text('image'),
	category: categoryEnum().notNull().default('tees'),
	price: decimal('price', { precision: 10, scale: 2 }).notNull().default('0'),
	inventory: numeric('inventory').notNull().default('0'),
	createdAt: timestamp('createdAt', { mode: 'string', precision: 3 })
		.notNull()
		.default(sql`CURRENT_TIMESTAMP(3)`),
})

export type InsertProducts = typeof products.$inferInsert
export type SelectProducts = typeof products.$inferSelect

export const carts = pgTable('carts', {
	id: serial('id').primaryKey(),
	userId: varchar('userId', { length: 191 }),
	paymentIntentId: varchar('paymentIntentId', { length: 191 }),
	clientSecret: varchar('clientSecret', { length: 191 }),
	items: json('items').$type<CartItem[] | null>().default(null),
	createdAt: timestamp('createdAt').defaultNow(),
})

export type InsertCarts = typeof carts.$inferInsert
export type SelectCarts = typeof carts.$inferSelect

export const emailPreferences = pgTable('email_preferences', {
	id: serial('id').primaryKey(),
	userId: varchar('userId', { length: 191 }),
	email: varchar('email', { length: 191 }).notNull(),
	token: varchar('token', { length: 191 }).notNull(),
	newsletter: boolean('newsletter').notNull().default(false),
	marketing: boolean('marketing').notNull().default(false),
	transactional: boolean('transactional').notNull().default(false),
	createdAt: timestamp('createdAt').defaultNow(),
})

export type InsertEmailPreferences = typeof emailPreferences.$inferInsert
export type SelectEmailPreferences = typeof emailPreferences.$inferSelect
