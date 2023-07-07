import './styles/globals.css'

import type { Metadata } from 'next'
import { ClerkProvider } from '@clerk/nextjs'

import { fontMono, fontSans } from '@/lib/fonts'
import { cn } from '@/lib/utils'
import { Toaster } from '@/components/ui/Toaster'
import { TailwindIndicator } from '@/components/TailwindIndicator'
import { ThemeProvider } from '@/components/ThemeProvider'

export const metadata: Metadata = {
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
			<html lang='en' suppressHydrationWarning>
				<head />
				<body
					className={cn(
						'min-h-screen bg-background font-sans antialiased',
						fontSans.variable,
						fontMono.variable
					)}
				>
					<ThemeProvider attribute='class' defaultTheme='light' enableSystem>
						{children}
						<TailwindIndicator />
					</ThemeProvider>
					<Toaster />
				</body>
			</html>
		</ClerkProvider>
	)
}
