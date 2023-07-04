'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import * as React from 'react'

import { Icons } from '@/components/Icons'
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from '@/components/ui/Accordion'
import { Button } from '@/components/ui/Button'
import { ScrollArea } from '@/components/ui/ScrollArea'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/Sheet'
import { productCategories } from '@/config/products'
import { cn, slugify } from '@/lib/utils'

export function MobileNav() {
	const pathname = usePathname()
	const [isOpen, setIsOpen] = React.useState(false)

	return (
		<Sheet open={isOpen} onOpenChange={setIsOpen}>
			<SheetTrigger asChild>
				<Button
					variant='ghost'
					className='mr-2 px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 lg:hidden'
				>
					<Icons.menu className='h-6 w-6' />
					<span className='sr-only'>Toggle Menu</span>
				</Button>
			</SheetTrigger>
			<SheetContent side='left' className='pl-1 pr-0'>
				<div className='px-7 pt-4 pb-2'>
					<Link
						aria-label='Home'
						href='/'
						className='flex items-center'
						onClick={() => setIsOpen(false)}
					>
						<Icons.logo className='mr-2 h-4 w-4' aria-hidden='true' />
					</Link>
				</div>
				<ScrollArea className='my-4 h-[calc(100vh-8rem)] pb-10 pl-6'>
					<div className='pl-1 pr-7'>
						<Accordion type='single' collapsible className='w-full'>
							<AccordionItem value='clothing'>
								<AccordionTrigger className='text-sm capitalize'>
									CLOTHING
								</AccordionTrigger>
								<AccordionContent>
									<div className='flex flex-col space-y-2'>
										{productCategories.map((item, index) => (
											<MobileLink
												key={index}
												href={`/categories/${slugify(item.title)}`}
												pathname={pathname}
												setIsOpen={setIsOpen}
											>
												{item.title.toUpperCase()}
											</MobileLink>
										))}
									</div>
								</AccordionContent>
							</AccordionItem>
						</Accordion>
					</div>

					<div className='pl-1 pr-7 pt-4 '>
						<Link href='/about' legacyBehavior passHref>
							ABOUT
						</Link>
					</div>

					<div className='pl-1 pr-7 pt-4'>
						<Link href='/about' legacyBehavior passHref>
							STORES
						</Link>
					</div>
				</ScrollArea>
			</SheetContent>
		</Sheet>
	)
}

interface MobileLinkProps {
	children?: React.ReactNode
	href: string
	disabled?: boolean
	pathname: string
	setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
}

function MobileLink({
	children,
	href,
	disabled,
	pathname,
	setIsOpen,
}: MobileLinkProps) {
	return (
		<Link
			href={href}
			className={cn(
				'text-foreground/70 transition-colors hover:text-foreground',
				pathname === href && 'text-foreground',
				disabled && 'pointer-events-none opacity-60'
			)}
			onClick={() => setIsOpen(false)}
		>
			{children}
		</Link>
	)
}
