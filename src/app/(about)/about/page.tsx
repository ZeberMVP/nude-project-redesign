import { Icons } from '@/components/Icons'
import { Shell } from '@/components/Shell'
import Image from 'next/image'
import { Balancer } from 'react-wrap-balancer'

const page = () => {
	return (
		<Shell as={'div'} className='gap-8 md:gap-12'>
			<h1 className='text-center text-2xl font-semibold'>ABOUT US</h1>
			<Balancer className='mx-auto text-md md:text-center'>
				NUDE PROJECT is a ready-to-wear label founded in 2018 in a small dorm
				room by two friends eager to create something different. Bruno and Alex
				were raised in completely different environments. One from Bali, the
				other from Burgos (a little more north) had an instant connection that,
				after a month of knowing each other, led them to create a joint movement
				that would change their lives forever. "For us, it was all about the
				hip-hop scene, the rawness of skateboarding and the artist's creativity
				which motivated us to imprint a way of living shared through the
				internet."
			</Balancer>
			<span className='text-yellow-900 text-lg font-medium text-center'>
				“By artists, for artists”
			</span>
			<div
				aria-label='Bruno and Alex riding their motorcycles'
				className='flex flex-col w-full md:w-1/2 md:mx-auto'
			>
				<Image
					src={'/images/newsletter/creators.webp'}
					alt={'Bruno and Alex riding their motorcycles'}
					width={500}
					height={500}
					className=' w-full object-fill'
				/>
			</div>
			<h2 className='text-center text-xl font-medium'>BEHIND THE DESIGNS</h2>
			<Balancer className='mx-auto text-md md:text-center'>
				We strive for designs that embrace a modern attitude for a creative
				life, seamlessly blending comfort, minimalism and elegance in every cut.
			</Balancer>
			<div
				aria-label='Guys drinking in the street'
				className='flex flex-col w-full md:w-1/2 md:mx-auto'
			>
				<Image
					src={'/images/about/botellon.webp'}
					alt={'Guys drinking in the street'}
					width={500}
					height={500}
					className=' w-full object-fill'
				/>
			</div>
			<h2 className='text-center text-xl font-medium'>A MOVEMENT</h2>
			<Balancer className='mx-auto text-md md:text-center'>
				NUDE PROJECT is more than just clothing. It is a creative platform for
				the misfits, the outcasts and the wild to express themselves. Our
				garments aim to inspire the new generation to pursue their passion,
				orthodoxly or not, by empowering them to create without fear of
				judgement.
			</Balancer>
			<div
				aria-label='Black and white photos from the creators'
				className='flex flex-col w-full md:mx-auto'
			>
				<Image
					src={'/images/about/frames.webp'}
					alt={'Black and white photos from the creators'}
					width={500}
					height={500}
					className=' w-full object-fill'
				/>
			</div>
			<h2 className='text-center text-xl font-medium'>OUR PRINCIPLES</h2>
			<Balancer className='mx-auto text-md md:text-center'>
				One of our goals is to change the perceived idea of success. We realised
				that focusing on money or fame just to seek acceptance, won't ever be
				fulfilling.
			</Balancer>
			<div
				aria-label='Girl wearing an unisex Nude Project shirt'
				className='flex flex-col w-full md:w-1/2 md:mx-auto'
			>
				<Image
					src={'/images/about/boys-girls.jpg'}
					alt={'Girl wearing an unisex Nude Project shirt'}
					width={500}
					height={500}
					className=' w-full object-fill'
				/>
			</div>
			<h2 className='text-center text-xl font-medium'>VIRALITY</h2>
			<Balancer className='mx-auto text-md md:text-center'>
				Our first big statement was when we gained over 60,000 followers
				overnight. Some people called it luck, but if there is something we are
				certain about is that the harder we work, the more luck we have.
			</Balancer>
			<div
				aria-label='Another day in paradise'
				className='flex flex-col w-full md:w-1/2 md:mx-auto'
			>
				<Image
					src={'/images/about/paradise.webp'}
					alt={'Another day in paradise'}
					width={500}
					height={500}
					className=' w-full object-fill'
				/>
			</div>
			<h2 className='text-center text-xl font-medium'>VISUALS + SOUNDS</h2>
			<a
				className='mx-auto h-16 w-16 -mt-7'
				href='https://open.spotify.com/user/brunocasanovas21?si=9ETT0vlUTly_FIR-mVDScA&nd=1'
			>
				<Icons.spotify />
			</a>
			<Balancer className='mx-auto text-md md:text-center'>
				More than a brand, we have become a lifestyle, with music that narrates
				our journey. Hip hop, urban latin and a subtle touch of diverse genres.
				All good music. Here's the link to our Spotify playlist, the official
				soundtrack to the movement.
			</Balancer>
			<div
				aria-label='Model wearing a balaclava mask'
				className='flex flex-col w-full md:w-1/2 md:mx-auto'
			>
				<Image
					src={'/images/about/balaclava.jpg'}
					alt={'Model wearing a balaclava mask'}
					width={500}
					height={500}
					className=' w-full object-fill'
				/>
			</div>
			<Balancer className='mx-auto text-md md:text-center'>
				Early on we realised the traditional path did not fit us: go to
				university, get the job that your parents told you to, pay your
				mortgage… Following our principles we itched to start working. Because
				you are the only person stopping yourself from doing what you love.
			</Balancer>
			<h1 className='text-center text-2xl font-semibold mt-4 italic'>
				JOIN THE MOVEMENT NOW
			</h1>
		</Shell>
	)
}

export default page
