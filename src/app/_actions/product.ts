'use server'

import { db } from '@/db'
import { products, type Product } from '@/db/schema'
import {
	and,
	asc,
	desc,
	eq,
	gt,
	gte,
	inArray,
	like,
	lt,
	lte,
	not,
	sql,
} from 'drizzle-orm'
import { type z } from 'zod'

import type {
	getProductSchema,
	getProductsSchema,
} from '@/lib/validations/product'

export async function filterProductsAction(query: string) {
	if (typeof query !== 'string') {
		throw new Error('Invalid input.')
	}

	if (query.length === 0) return null

	const filteredProducts = await db
		.select({
			id: products.id,
			name: products.name,
			category: products.category,
		})
		.from(products)
		.where(like(products.name, `%${query}%`))
		.orderBy(desc(products.createdAt))
		.limit(10)

	const productsByCategory = Object.values(products.category.enumValues).map(
		(category) => ({
			category,
			products: filteredProducts.filter(
				(product) => product.category === category
			),
		})
	)

	return productsByCategory
}

export async function getProductsAction(
	input: z.infer<typeof getProductsSchema>
) {
	const [column, order] =
		(input.sort?.split('.') as [
			keyof Product | undefined,
			'asc' | 'desc' | undefined
		]) ?? []
	const [minPrice, maxPrice] = input.price_range?.split('-') ?? []
	const categories =
		(input.categories?.split('.') as Product['category'][]) ?? []

	const { items, total } = await db.transaction(async (tx) => {
		const items = await tx
			.select()
			.from(products)
			.limit(input.limit)
			.offset(input.offset)
			.where(
				and(
					categories.length
						? inArray(products.category, categories)
						: undefined,
					minPrice ? gte(products.price, minPrice) : undefined,
					maxPrice ? lte(products.price, maxPrice) : undefined
				)
			)
			.orderBy(
				column && column in products
					? order === 'asc'
						? asc(products[column])
						: desc(products[column])
					: desc(products.createdAt)
			)

		const total = await tx
			.select({
				count: sql<number>`count(${products.id})`,
			})
			.from(products)
			.where(
				and(
					categories.length
						? inArray(products.category, categories)
						: undefined,
					minPrice ? gte(products.price, minPrice) : undefined,
					maxPrice ? lte(products.price, maxPrice) : undefined
				)
			)

		return {
			items,
			total: Number(total[0]?.count) ?? 0,
		}
	})

	return {
		items,
		total,
	}
}

export async function checkProductAction(input: { name: string; id?: number }) {
	if (typeof input.name !== 'string') {
		throw new Error('Invalid input.')
	}

	const productWithSameName = await db.query.products.findFirst({
		where: input.id
			? and(not(eq(products.id, input.id)), eq(products.name, input.name))
			: eq(products.name, input.name),
	})

	if (productWithSameName) {
		throw new Error('Product name already taken.')
	}
}

export async function getNextProductIdAction(
	input: z.infer<typeof getProductSchema>
) {
	if (typeof input.id !== 'number') {
		throw new Error('Invalid input.')
	}

	const product = await db.query.products.findFirst({
		where: gt(products.id, input.id),
		orderBy: asc(products.id),
	})

	if (!product) {
		throw new Error('Product not found.')
	}

	return product.id
}

export async function getPreviousProductIdAction(
	input: z.infer<typeof getProductSchema>
) {
	if (typeof input.id !== 'number') {
		throw new Error('Invalid input.')
	}

	const product = await db.query.products.findFirst({
		where: lt(products.id, input.id),
		orderBy: desc(products.id),
	})

	if (!product) {
		throw new Error('Product not found.')
	}

	return product.id
}
