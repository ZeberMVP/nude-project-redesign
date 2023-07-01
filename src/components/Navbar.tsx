import { FC } from 'react'
import Logo from './ui/Logo'

interface NavbarProps {}

const Navbar: FC<NavbarProps> = ({}) => {
	return (
		<nav>
			<Logo className='text-yellow-950 fill-current' />
		</nav>
	)
}

export default Navbar
