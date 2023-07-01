import './globals.css'
import { Inter } from 'next/font/google'
import { ClerkProvider } from '@clerk/nextjs'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
	title: 'NUDE PROJECT | By artists, for artists.',
	description:
		'Nude Project es una marca de prêt-à-porter fundada en 2018 en un pequeño dormitorio por dos amigos con ganas de crear algo diferente. Nuestras prendas pretenden inspirar a la nueva generación a perseguir su pasión, sea o no el camino tradicional, empoderando a los artistas para que creen sin miedo a ser juzgados.',
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<ClerkProvider>
			<html lang='en'>
				<body className={inter.className}>{children}</body>
			</html>
		</ClerkProvider>
	)
}
