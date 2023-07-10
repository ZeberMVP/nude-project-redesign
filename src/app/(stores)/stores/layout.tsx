import { currentUser } from '@clerk/nextjs'

import { SiteFooter } from '@/components/layouts/SiteFooter'
import { SiteHeader } from '@/components/layouts/SiteHeader'

interface LobbyLayoutProps {
	children: React.ReactNode
}

export default async function LobbyLayout({ children }: LobbyLayoutProps) {
	const user = await currentUser()

	return (
		<div className='relative flex min-h-screen flex-col'>
			<SiteHeader user={user} />
			<main className='flex-1'>{children}</main>
			<SiteFooter />
		</div>
	)
}
