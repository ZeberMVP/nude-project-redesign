import { db } from '@/db'
import { products } from '@/db/schema'
import { eq } from 'drizzle-orm'
import { notFound } from 'next/navigation'

import { Icons } from '@/components/Icons'
import { Shell } from '@/components/Shell'
import { AddToCartForm } from '@/components/forms/AddToCartForm'
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from '@/components/ui/Accordion'
import { Separator } from '@/components/ui/Separator'
import { formatPrice } from '@/lib/utils'
import Image from 'next/image'

interface ProductPageProps {
	params: {
		productId: string
	}
}

export default async function ProductPage({ params }: ProductPageProps) {
	const productId = Number(params.productId)

	const product = await db.query.products.findFirst({
		where: eq(products.id, productId),
	})

	if (!product) {
		notFound()
	}

	return (
		<Shell>
			<div className='flex items-center space-x-1 text-sm capitalize text-muted-foreground'>
				<div className='truncate'>Clothing</div>
				<Icons.chevronRight className='h-4 w-4' aria-hidden='true' />
				<div className='text-foreground'>{product.category}</div>
			</div>
			<div className='flex flex-col gap-8 md:flex-row md:gap-16'>
				<div
					aria-label='Product image'
					className='flex flex-col gap-2 w-full md:w-1/2'
				>
					<Image
						src={product.image!}
						alt={product.name}
						width={500}
						height={500}
						className='aspect-square w-full object-fill'
					/>
				</div>
				<Separator className='mt-4 md:hidden' />
				<div className='flex w-full flex-col gap-4 md:w-1/2'>
					<div className='space-y-2'>
						<h2 className='line-clamp-1 text-2xl font-bold'>{product.name}</h2>
						<p className='text-base text-muted-foreground'>
							{formatPrice(product.price)}
						</p>
					</div>
					<Separator className='my-1.5' />
					<AddToCartForm productId={productId} />
					<Separator className='mt-5' />
					<Accordion type='single' collapsible className='w-full'>
						<AccordionItem value='description'>
							<AccordionTrigger>Description</AccordionTrigger>
							<AccordionContent>
								{product.description ??
									'No description is available for this product.'}
							</AccordionContent>
						</AccordionItem>
					</Accordion>
				</div>
			</div>
		</Shell>
	)
}
