import { ErrorCard } from '@/components/ErrorCard'
import { Shell } from '@/components/Shell'

export default function EmailPreferencesNotFound() {
	return (
		<Shell variant='centered'>
			<ErrorCard
				title='Email preferences not found'
				description='The token may have expired or you may have already updated your email preferences'
				retryLink='/'
				retryLinkText='Go to Home'
			/>
		</Shell>
	)
}
