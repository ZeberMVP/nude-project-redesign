import { type Metadata } from 'next'
import { products } from '@/db/schema'

import { Header } from '@/components/Header'
import { Products } from '@/components/Products'
import { Shell } from '@/components/Shell'
import { getProductsAction } from '@/app/_actions/product'

export const metadata: Metadata = {
	title: 'Clothing',
	description: 'Explore all our products',
}

interface ProductsPageProps {
	searchParams: {
		[key: string]: string | string[] | undefined
	}
}

export default async function ProductsPage({
	searchParams,
}: ProductsPageProps) {
	const { page, per_page, sort, categories, price_range } = searchParams

	// Products transaction
	const limit = typeof per_page === 'string' ? parseInt(per_page) : 8
	const offset = typeof page === 'string' ? (parseInt(page) - 1) * limit : 0

	const productsTransaction = await getProductsAction({
		limit,
		offset,
		sort: typeof sort === 'string' ? sort : null,
		categories: typeof categories === 'string' ? categories : null,
		price_range: typeof price_range === 'string' ? price_range : null,
	})

	const pageCount = Math.ceil(productsTransaction.total / limit)

	return (
		<Shell>
			<Header
				title='Clothing'
				description='Buy clothes from our store'
				size='sm'
			/>
			<Products
				products={productsTransaction.items}
				pageCount={pageCount}
				categories={Object.values(products.category.enumValues)}
			/>
		</Shell>
	)
}
