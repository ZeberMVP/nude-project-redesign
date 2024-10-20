'use client'

import * as React from 'react'
import { useRouter } from 'next/navigation'

import { cn } from '@/lib/utils'
import { useDebounce } from '@/hooks/use-debounce'
import { Button } from '@/components/ui/Button'
import {
	CommandDialog,
	CommandEmpty,
	CommandGroup,
	CommandInput,
	CommandItem,
	CommandList,
} from '@/components/ui/Command'
import { Skeleton } from '@/components/ui/Skeleton'
import { Icons } from '@/components/Icons'
import { filterProductsAction } from '@/app/_actions/product'
import { SelectProducts } from '@/db/schema'

export function Combobox() {
	const router = useRouter()
	const [isOpen, setIsOpen] = React.useState(false)
	const [query, setQuery] = React.useState('')
	const debouncedQuery = useDebounce(query, 300)
	const [data, setData] = React.useState<
		| {
				category: SelectProducts['category']
				products: Pick<SelectProducts, 'id' | 'name' | 'category'>[]
		  }[]
		| null
	>(null)
	const [isPending, startTransition] = React.useTransition()

	React.useEffect(() => {
		if (debouncedQuery.length === 0) setData(null)

		if (debouncedQuery.length > 0) {
			startTransition(async () => {
				const data = await filterProductsAction(debouncedQuery)
				setData(data)
			})
		}
	}, [debouncedQuery])

	React.useEffect(() => {
		const handleKeyDown = (e: KeyboardEvent) => {
			if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
				e.preventDefault()
				setIsOpen((isOpen) => !isOpen)
			}
		}
		window.addEventListener('keydown', handleKeyDown)
		return () => window.removeEventListener('keydown', handleKeyDown)
	}, [])

	const handleSelect = React.useCallback((callback: () => unknown) => {
		setIsOpen(false)
		callback()
	}, [])

	React.useEffect(() => {
		if (!isOpen) {
			setQuery('')
		}
	}, [isOpen])

	return (
		<>
			<Button
				variant='outline'
				className='relative h-9 w-9 p-0 xl:h-10 xl:w-60 xl:justify-start xl:px-3 xl:py-2'
				onClick={() => setIsOpen(true)}
			>
				<Icons.search className='h-4 w-4 xl:mr-2' aria-hidden='true' />
				<span className='hidden xl:inline-flex'>Search products</span>
				<span className='sr-only'>Search products</span>
			</Button>
			<CommandDialog open={isOpen} onOpenChange={setIsOpen}>
				<CommandInput
					placeholder='Search products...'
					value={query}
					onValueChange={setQuery}
				/>
				<CommandList>
					<CommandEmpty
						className={cn(isPending ? 'hidden' : 'py-6 text-center text-sm')}
					>
						No products found.
					</CommandEmpty>
					{isPending ? (
						<div className='space-y-1 overflow-hidden px-1 py-2'>
							<Skeleton className='h-4 w-10 rounded' />
							<Skeleton className='h-8 rounded-sm' />
							<Skeleton className='h-8 rounded-sm' />
						</div>
					) : (
						data?.map((group) => (
							<CommandGroup
								key={group.category}
								className='capitalize'
								heading={group.category}
							>
								{group.products.map((item) => (
									<CommandItem
										key={item.id}
										onSelect={() =>
											handleSelect(() => router.push(`/product/${item.id}`))
										}
									>
										{item.name}
									</CommandItem>
								))}
							</CommandGroup>
						))
					)}
				</CommandList>
			</CommandDialog>
		</>
	)
}
