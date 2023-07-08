import { ErrorCard } from '@/components/ErrorCard'
import { Shell } from '@/components/Shell'

export default function ProductNotFound() {
	return (
		<Shell variant='centered'>
			<ErrorCard
				title='Product not found'
				description='The product may have expired or you may have already updated your product'
				retryLink='/'
				retryLinkText='Go to Home'
			/>
		</Shell>
	)
}
