import { type Product } from '@/db/schema'

import { toTitleCase } from '@/lib/utils'
import { Header } from '@/components/Header'
import { Products } from '@/components/Products'
import { Shell } from '@/components/Shell'
import { getProductsAction } from '@/app/_actions/product'

// Running out of edge function execution units on vercel free plan
// export const runtime = "edge"

interface CategoryPageProps {
	params: {
		category: Product['category']
	}
	searchParams: {
		[key: string]: string | string[] | undefined
	}
}

export function generateMetadata({ params }: CategoryPageProps) {
	return {
		title: toTitleCase(params.category),
		description: `Buy products from the ${params.category} category`,
	}
}

export default async function CategoryPage({
	params,
	searchParams,
}: CategoryPageProps) {
	const { category } = params
	const { page, per_page, sort, price_range } = searchParams

	// Products transaction
	const limit = typeof per_page === 'string' ? parseInt(per_page) : 8
	const offset = typeof page === 'string' ? (parseInt(page) - 1) * limit : 0

	const productsTransaction = await getProductsAction({
		limit,
		offset,
		sort: typeof sort === 'string' ? sort : null,
		categories: category,
		price_range: typeof price_range === 'string' ? price_range : null,
	})

	const pageCount = Math.ceil(productsTransaction.total / limit)

	return (
		<Shell>
			<Header title={toTitleCase(category)} size='sm' />
			<Products products={productsTransaction.items} pageCount={pageCount} />
		</Shell>
	)
}
