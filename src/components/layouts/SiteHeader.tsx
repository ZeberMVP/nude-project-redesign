import type { User } from '@clerk/nextjs/dist/types/server'
import Link from 'next/link'

import { Combobox } from '@/components/Combobox'
import { Icons } from '@/components/Icons'
import { CartSheet } from '@/components/cart/CartSheet'
import { MainNav } from '@/components/layouts/MainNav'
import { MobileNav } from '@/components/layouts/MobileNav'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/Avatar'
import { Button, buttonVariants } from '@/components/ui/Button'
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuGroup,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuShortcut,
	DropdownMenuTrigger,
} from '@/components/ui/DropdownMenu'

interface SiteHeaderProps {
	user: User | null
}

export function SiteHeader({ user }: SiteHeaderProps) {
	const initials = `${user?.firstName?.charAt(0) ?? ''} ${
		user?.lastName?.charAt(0) ?? ''
	}`
	const email =
		user?.emailAddresses?.find((e) => e.id === user.primaryEmailAddressId)
			?.emailAddress ?? ''

	return (
		<header className='sticky top-0 z-40 w-full border-b bg-background'>
			<div className='container flex h-16 items-center justify-around'>
				<MainNav />
				<MobileNav />
				<Link
					aria-label='Home'
					href='/'
					className='hidden items-center space-x-2 lg:flex flex-1 justify-end'
				>
					<h1 className='font-bold text-3xl text-center'>NUDE PROJECT®</h1>
				</Link>
				<div className='flex flex-1 items-center justify-end space-x-4'>
					<nav className='flex items-center space-x-4'>
						<Combobox />
						<CartSheet />
						{user ? (
							<DropdownMenu>
								<DropdownMenuTrigger asChild>
									<Button
										variant='secondary'
										className='relative h-8 w-8 rounded-full'
									>
										<Avatar className='h-8 w-8'>
											<AvatarImage
												src={user.imageUrl}
												alt={user.username ?? ''}
											/>
											<AvatarFallback>{initials}</AvatarFallback>
										</Avatar>
									</Button>
								</DropdownMenuTrigger>
								<DropdownMenuContent className='w-56' align='end' forceMount>
									<DropdownMenuLabel className='font-normal'>
										<div className='flex flex-col space-y-1'>
											<p className='text-sm font-medium leading-none'>
												{user.firstName} {user.lastName}
											</p>
											<p className='text-xs leading-none text-muted-foreground'>
												{email}
											</p>
										</div>
									</DropdownMenuLabel>
									<DropdownMenuSeparator />
									<DropdownMenuGroup>
										<DropdownMenuItem asChild>
											<Link href='/dashboard/account'>
												<Icons.user
													className='mr-2 h-4 w-4'
													aria-hidden='true'
												/>
												Account
												<DropdownMenuShortcut>⇧⌘A</DropdownMenuShortcut>
											</Link>
										</DropdownMenuItem>
										<DropdownMenuItem asChild>
											<Link href='/dashboard/stores'>
												<Icons.terminal
													className='mr-2 h-4 w-4'
													aria-hidden='true'
												/>
												Dashboard
												<DropdownMenuShortcut>⌘D</DropdownMenuShortcut>
											</Link>
										</DropdownMenuItem>
										<DropdownMenuItem asChild disabled>
											<Link href='/dashboard/settings'>
												<Icons.settings
													className='mr-2 h-4 w-4'
													aria-hidden='true'
												/>
												Settings
												<DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
											</Link>
										</DropdownMenuItem>
									</DropdownMenuGroup>
									<DropdownMenuSeparator />
									<DropdownMenuItem asChild>
										<Link href='/signout'>
											<Icons.logout
												className='mr-2 h-4 w-4'
												aria-hidden='true'
											/>
											Log out
											<DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
										</Link>
									</DropdownMenuItem>
								</DropdownMenuContent>
							</DropdownMenu>
						) : (
							<Link href='/signin'>
								<div
									className={buttonVariants({
										size: 'sm',
									})}
								>
									Sign In
									<span className='sr-only'>Sign In</span>
								</div>
							</Link>
						)}
					</nav>
				</div>
			</div>
		</header>
	)
}
