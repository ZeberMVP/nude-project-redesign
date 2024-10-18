import { LogOutButtons } from '@/components/auth/LogoutButtons'
import { Header } from '@/components/Header'
import { Shell } from '@/components/Shell'

export default function SignOutPage() {
	return (
		<Shell className='max-w-xs'>
			<Header
				title='Sign out'
				description='Are you sure you want to sign out?'
				size='sm'
				className='text-center'
			/>
			<LogOutButtons />
		</Shell>
	)
}
