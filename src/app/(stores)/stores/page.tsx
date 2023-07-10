import { Shell } from '@/components/Shell'
import Balancer from 'react-wrap-balancer'
import Image from 'next/image'

const page = () => {
	return (
		<Shell as='main' className='gap-8 md:gap-12'>
			<h1 className='font-bold text-4xl text-yellow-950 text-center italic'>
				OUR STORES
			</h1>
			<Balancer className='font-semibold text-2xl text-yellow-950 text-center'>
				We already are in Madrid, Valencia and Barcelona
			</Balancer>
			<Balancer className='font-medium md:text-center'>
				Nude Project is a ready-to-wear label founded in 2018 in a small dorm
				room by two friends eager to create something different. Now we have a
				real place were capture the essence of the brand made for the Nude Cult.
			</Balancer>
			<div
				aria-label='Barcelona Store'
				className='flex flex-col w-full md:w-2/3 md:mx-auto'
			>
				<Image
					src={'/images/stores/barcelona.webp'}
					alt={'Barcelona Store'}
					width={500}
					height={500}
					className='w-full object-fill'
				/>
			</div>
			<a
				className='text-yellow-950 text-xl font-medium text-left md:text-center mx-auto'
				href='https://goo.gl/maps/nDCsRe9WFoJQqUmE6'
				target='_blank'
			>
				BARCELONA
			</a>
			<div className='flex space-x-8 mx-auto -mt-4'>
				<address>
					De la Canuda Street, 37
					<br /> 08002 Barcelona
				</address>
				<div>
					<p>MON-SAT 11-21</p>
					<p>SUN 12-20</p>
				</div>
			</div>
			<div
				aria-label='Valencia Store'
				className='flex flex-col w-full md:w-2/3 md:mx-auto'
			>
				<Image
					src={'/images/stores/valencia.webp'}
					alt={'Valencia Store'}
					width={500}
					height={500}
					className='w-full object-fill'
				/>
			</div>
			<a
				className='text-yellow-950 text-xl font-medium text-left md:text-center mx-auto'
				href='https://goo.gl/maps/nDCsRe9WFoJQqUmE6'
				target='_blank'
			>
				VALENCIA
			</a>
			<div className='flex space-x-8 mx-auto -mt-4'>
				<address>
					Martínez Ferrando Street, 1
					<br /> 46004 Valencia
				</address>
				<div>
					<p>MON-SAT 11-21</p>
					<p>SUN closed</p>
				</div>
			</div>
			<div
				aria-label='Madrid Store'
				className='flex flex-col w-full md:w-2/3 md:mx-auto'
			>
				<Image
					src={'/images/stores/madrid.webp'}
					alt={'Madrid Store'}
					width={500}
					height={500}
					className='w-full object-fill'
				/>
			</div>
			<a
				className='text-yellow-950 text-xl font-medium text-left md:text-center mx-auto'
				href='https://goo.gl/maps/nDCsRe9WFoJQqUmE6'
				target='_blank'
			>
				MADRID
			</a>
			<div className='flex space-x-8 mx-auto -mt-4'>
				<address>
					Fuencarral Street, 47
					<br /> 28004 Madrid
				</address>
				<div>
					<p>MON-FRI 11-21</p>
					<p>SAT 11-21.30</p>
					<p>SUN 12-20</p>
				</div>
			</div>
		</Shell>
	)
}

export default page
