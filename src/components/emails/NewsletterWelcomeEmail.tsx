import {
	Body,
	Container,
	Head,
	Heading,
	Hr,
	Html,
	Img,
	Link,
	Preview,
	Row,
	Section,
	Tailwind,
	Text,
} from '@react-email/components'

interface NewsletterWelcomeEmailProps {
	firstName?: string
	fromEmail: string
	token: string
}

const baseUrl = process.env.NEXT_PUBLIC_APP_URL

// For previewing we need to put images in the .react-email/public folder
// In production we need to put images in the root public folder
const newsletterImages = [
	{
		src: `${baseUrl}/images/newsletter/models.webp`,
		alt: 'Models showing off our latest gear',
		description: `This are our our models showing off our latest gear.`,
	},
	{
		src: `${baseUrl}/images/newsletter/creators.webp`,
		alt: 'Bruno and Alex riding their motorcycles',
		description: `Bruno and Alex are the founders of Nude Project. One from Bali, the other from Burgos (a little more north) had an instant connection that, after a month of knowing each other, led them to create a joint movement that would change their lives forever.`,
	},
]

export default function NewsletterWelcomeEmail({
	firstName = 'there',
	fromEmail,
	token,
}: NewsletterWelcomeEmailProps) {
	const previewText = `Hi ${firstName}, welcome to Nude Project!`

	return (
		<Html>
			<Head>
				<title>Nude Project Newsletter</title>
			</Head>
			<Preview>{previewText}</Preview>
			<Tailwind>
				<Body className='mx-auto bg-zinc-50 font-sans'>
					<Container className='mx-auto my-[40px] max-w-2xl rounded p-4'>
						<Section className='mt-4'>
							<Heading className='text-center text-2xl font-semibold text-zinc-950'>
								Nude Project
							</Heading>
							<Hr className='my-4' />
							<Heading className='text-center text-3xl font-semibold text-zinc-800'>
								Welcome to Nude Project!
							</Heading>
							<Text className='mb-0 mt-6 text-center text-base'>
								{`We're`} so glad {`you're`} here. {`We're`} excited to share
								our passion for fashion with you.
							</Text>
							<Text className='m-0 text-center text-base'>
								{`We'll`} be sending you a newsletter every month.
							</Text>
						</Section>
						<Section className='mt-6'>
							{newsletterImages.map((item) => (
								<Row key={item.alt} className='mt-10'>
									<Img
										src={item.src}
										alt={item.alt}
										height={424}
										className='aspect-video w-full object-cover'
									/>
									<Text className='mb-0 mt-4 text-center text-base'>
										{item.description}
									</Text>
								</Row>
							))}
						</Section>
						<Section className='mt-4 text-center text-zinc-400'>
							<Text className='my-4'>
								{`We're`} looking forward to seeing you around! If you have any
								questions, please {`don't`} hesitate to reach out to us at{' '}
								<Link
									href={`mailto:${fromEmail}`}
									className='text-blue-500 underline'
								>
									{fromEmail}
								</Link>
							</Text>
							<Text className='mb-0 mt-4'>
								@ Nude Project® {new Date().getFullYear()}
							</Text>
							<Text className='m-0'>
								If you no longer want to receive these emails, you can{' '}
								<Link
									href={`${baseUrl}/email-preferences?token=${token}`}
									className='text-blue-500 underline'
								>
									unsubscribe here
								</Link>
							</Text>
						</Section>
					</Container>
				</Body>
			</Tailwind>
		</Html>
	)
}
