'use client'

import Link from 'next/link'
import * as React from 'react'

import { Icons } from '@/components/Icons'
import {
	NavigationMenu,
	NavigationMenuContent,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
	NavigationMenuTrigger,
	navigationMenuTriggerStyle,
} from '@/components/ui/NavigationMenu'
import { productCategories } from '@/config/products'
import { cn, slugify } from '@/lib/utils'

export function MainNav() {
	return (
		<div className='hidden gap-6 lg:flex'>
			<NavigationMenu>
				<NavigationMenuList>
					<NavigationMenuItem>
						<NavigationMenuTrigger className='h-auto capitalize'>
							CLOTHING
						</NavigationMenuTrigger>
						<NavigationMenuContent>
							<ul className='grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]'>
								{productCategories.map((item) => (
									<ListItem
										key={item.title}
										title={item.title.toLocaleUpperCase()}
										href={`/categories/${slugify(item.title)}`}
									/>
								))}
							</ul>
						</NavigationMenuContent>
					</NavigationMenuItem>

					<NavigationMenuItem>
						<Link href='/about' legacyBehavior passHref>
							<NavigationMenuLink className={navigationMenuTriggerStyle()}>
								ABOUT
							</NavigationMenuLink>
						</Link>
					</NavigationMenuItem>

					<NavigationMenuItem>
						<Link href='/stores' legacyBehavior passHref>
							<NavigationMenuLink className={navigationMenuTriggerStyle()}>
								STORES
							</NavigationMenuLink>
						</Link>
					</NavigationMenuItem>
				</NavigationMenuList>
			</NavigationMenu>
		</div>
	)
}

const ListItem = React.forwardRef<
	React.ElementRef<'a'>,
	React.ComponentPropsWithoutRef<'a'>
>(({ className, title, children, ...props }, ref) => {
	return (
		<li>
			<NavigationMenuLink asChild>
				<a
					ref={ref}
					className={cn(
						'block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground',
						className
					)}
					{...props}
				>
					<div className='text-sm font-medium leading-none'>{title}</div>
					<p className='line-clamp-2 text-sm leading-snug text-muted-foreground'>
						{children}
					</p>
				</a>
			</NavigationMenuLink>
		</li>
	)
})
ListItem.displayName = 'ListItem'
