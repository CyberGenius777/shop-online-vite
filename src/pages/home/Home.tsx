import React, { PropsWithChildren } from 'react'

interface IHomeProps {
	id: number
}

const Home: React.FC<PropsWithChildren<IHomeProps>> = ({ children, id }) => {
	return (
		<div key={id} className='bg-green-500'>
			{children}
		</div>
	)
}

export default Home
