'use client'

import { type Product } from '@/db/schema'
import Image from 'next/image'
import Link from 'next/link'
import * as React from 'react'
import { toast } from 'sonner'

import { addToCartAction } from '@/app/_actions/cart'
import { Icons } from '@/components/Icons'
import { AspectRatio } from '@/components/ui/AspectRatio'
import { Button } from '@/components/ui/Button'
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from '@/components/ui/Card'
import { cn, formatPrice } from '@/lib/utils'

interface ProductCardProps extends React.HTMLAttributes<HTMLDivElement> {
	product: Product
	variant?: 'default' | 'switchable'
	isAddedToCart?: boolean
	onSwitch?: () => Promise<void>
}

export function ProductCard({
	product,
	variant = 'default',
	isAddedToCart = false,
	onSwitch,
	className,
	...props
}: ProductCardProps) {
	const [isPending, startTransition] = React.useTransition()
	const [isHovered, setIsHovered] = React.useState(false)

	const handleMouseEnter = () => {
		setIsHovered(true)
	}

	const handleMouseLeave = () => {
		setIsHovered(false)
	}

	return (
		<Card
			className={cn('h-full overflow-hidden rounded-sm', className)}
			onMouseEnter={handleMouseEnter}
			onMouseLeave={handleMouseLeave}
			{...props}
		>
			<Link
				aria-label={`View ${product.name} details`}
				href={`/product/${product.id}`}
			>
				<CardHeader className='border-b p-0'>
					<AspectRatio ratio={9 / 11}>
						{product?.image ? (
							<Image
								src={product.image}
								alt={product.name}
								sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
								fill
								className={cn('object-cover', { 'opacity-50': isHovered })}
								loading='lazy'
							/>
						) : (
							<div
								aria-label='Placeholder'
								role='img'
								aria-roledescription='placeholder'
								className='flex h-full w-full items-center justify-center bg-secondary'
							>
								<Icons.placeholder
									className='h-9 w-9 text-muted-foreground'
									aria-hidden='true'
								/>
							</div>
						)}
					</AspectRatio>
				</CardHeader>
			</Link>
			<Link
				aria-label={`View ${product.name} details`}
				href={`/product/${product.id}`}
			>
				<CardContent className='grid gap-2.5 p-4'>
					<CardTitle className='line-clamp-1'>{product.name}</CardTitle>
					<CardDescription className='line-clamp-2'>
						{formatPrice(product.price)}
					</CardDescription>
				</CardContent>
			</Link>

			{variant === 'default' ? (
				<div className='relative lg:-top-32 p-8 lg:p-0 flex w-full items-center gap-2 sm:flex-row sm:justify-between'>
					<Button
						variant='ghost'
						aria-label='Add to cart'
						size='sm'
						className={cn('h-8 w-full rounded-sm', {
							'lg:invisible': !isHovered,
						})}
						onClick={() => {
							startTransition(async () => {
								try {
									await addToCartAction({
										productId: product.id,
										quantity: 1,
									})
									toast.success('Added to cart.')
								} catch (error) {
									error instanceof Error
										? toast.error(error.message)
										: toast.error('Something went wrong, please try again.')
								}
							})
						}}
						disabled={isPending}
					>
						{isPending && (
							<Icons.spinner
								className='mr-2 h-4 w-4 animate-spin'
								aria-hidden='true'
							/>
						)}
						XS
					</Button>
					<Button
						variant='ghost'
						aria-label='Add to cart'
						size='sm'
						className={cn('h-8 w-full rounded-sm', {
							'lg:invisible': !isHovered,
						})}
						onClick={() => {
							startTransition(async () => {
								try {
									await addToCartAction({
										productId: product.id,
										quantity: 1,
									})
									toast.success('Added to cart.')
								} catch (error) {
									error instanceof Error
										? toast.error(error.message)
										: toast.error('Something went wrong, please try again.')
								}
							})
						}}
						disabled={isPending}
					>
						{isPending && (
							<Icons.spinner
								className='mr-2 h-4 w-4 animate-spin'
								aria-hidden='true'
							/>
						)}
						S
					</Button>
					<Button
						variant='ghost'
						aria-label='Add to cart'
						size='sm'
						className={cn('h-8 w-full rounded-sm', {
							'lg:invisible': !isHovered,
						})}
						onClick={() => {
							startTransition(async () => {
								try {
									await addToCartAction({
										productId: product.id,
										quantity: 1,
									})
									toast.success('Added to cart.')
								} catch (error) {
									error instanceof Error
										? toast.error(error.message)
										: toast.error('Something went wrong, please try again.')
								}
							})
						}}
						disabled={isPending}
					>
						{isPending && (
							<Icons.spinner
								className='mr-2 h-4 w-4 animate-spin'
								aria-hidden='true'
							/>
						)}
						M
					</Button>
					<Button
						variant='ghost'
						aria-label='Add to cart'
						size='sm'
						className={cn('h-8 w-full rounded-sm', {
							'lg:invisible': !isHovered,
						})}
						onClick={() => {
							startTransition(async () => {
								try {
									await addToCartAction({
										productId: product.id,
										quantity: 1,
									})
									toast.success('Added to cart.')
								} catch (error) {
									error instanceof Error
										? toast.error(error.message)
										: toast.error('Something went wrong, please try again.')
								}
							})
						}}
						disabled={isPending}
					>
						{isPending && (
							<Icons.spinner
								className='mr-2 h-4 w-4 animate-spin'
								aria-hidden='true'
							/>
						)}
						L
					</Button>
					<Button
						variant='ghost'
						aria-label='Add to cart'
						size='sm'
						className={cn('h-8 w-full rounded-sm', {
							'lg:invisible': !isHovered,
						})}
						onClick={() => {
							startTransition(async () => {
								try {
									await addToCartAction({
										productId: product.id,
										quantity: 1,
									})
									toast.success('Added to cart.')
								} catch (error) {
									error instanceof Error
										? toast.error(error.message)
										: toast.error('Something went wrong, please try again.')
								}
							})
						}}
						disabled={isPending}
					>
						{isPending && (
							<Icons.spinner
								className='mr-2 h-4 w-4 animate-spin'
								aria-hidden='true'
							/>
						)}
						XL
					</Button>
					<Button
						variant='ghost'
						aria-label='Add to cart'
						size='sm'
						className={cn('h-8 w-full rounded-sm', {
							'lg:invisible': !isHovered,
						})}
						onClick={() => {
							startTransition(async () => {
								try {
									await addToCartAction({
										productId: product.id,
										quantity: 1,
									})
									toast.success('Added to cart.')
								} catch (error) {
									error instanceof Error
										? toast.error(error.message)
										: toast.error('Something went wrong, please try again.')
								}
							})
						}}
						disabled={isPending}
					>
						{isPending && (
							<Icons.spinner
								className='mr-2 h-4 w-4 animate-spin'
								aria-hidden='true'
							/>
						)}
						XXL
					</Button>
				</div>
			) : (
				<Button
					variant='ghost'
					aria-label={isAddedToCart ? 'Remove from cart' : 'Add to cart'}
					size='sm'
					className={cn('h-8 w-full rounded-sm', {
						'lg:invisible': !isHovered,
					})}
					onClick={() => {
						startTransition(async () => {
							await onSwitch?.()
						})
					}}
					disabled={isPending}
				>
					{isPending ? (
						<Icons.spinner
							className='mr-2 h-4 w-4 animate-spin'
							aria-hidden='true'
						/>
					) : isAddedToCart ? (
						<Icons.check className='mr-2 h-4 w-4' aria-hidden='true' />
					) : (
						<Icons.add className='mr-2 h-4 w-4' aria-hidden='true' />
					)}
					{isAddedToCart ? 'Added' : 'Add to cart'}
				</Button>
			)}
		</Card>
	)
}
