import { db } from '@/db'
import { products } from '@/db/schema'
import { asc } from 'drizzle-orm'
import Link from 'next/link'

import { ProductCard } from '@/components/ProductCard'
import { Shell } from '@/components/Shell'
import { SubscribeToNewsletterForm } from '@/components/forms/SubscribeToNewsletterForm'
import { buttonVariants } from '@/components/ui/Button'
import { cn } from '@/lib/utils'

// Running out of edge function execution units on vercel free plan
// export const runtime = "edge"

export default async function IndexPage() {
	const allProducts = await db
		.select()
		.from(products)
		.limit(8)
		.orderBy(asc(products.createdAt))

	return (
		<Shell as='div' className='gap-12'>
			<section
				id='bestsellers'
				aria-labelledby='bestsellers-heading'
				className='space-y-6'
			>
				<div className='flex items-center'>
					<h2 className='flex-1 text-2xl font-medium sm:text-3xl'>
						BESTSELLERS
					</h2>
					<Link href='/clothing'>
						<div
							className={cn(
								buttonVariants({
									size: 'sm',
								})
							)}
						>
							VIEW ALL
							<span className='sr-only'>View all clothing section</span>
						</div>
					</Link>
				</div>
				<div className='grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
					{allProducts.map((product) => (
						<ProductCard key={product.id} product={product} />
					))}
				</div>
			</section>
			<section
				id='newsletter'
				aria-labelledby='newsletter-heading'
				className='mt-4 grid place-items-center gap-4 rounded-lg border bg-card px-6 py-16 text-center text-card-foreground shadow-sm'
			>
				<h2 className='text-2xl font-medium sm:text-3xl'>
					Join our newsletter to get the latest news and updates
				</h2>
				<SubscribeToNewsletterForm />
			</section>
		</Shell>
	)
}
