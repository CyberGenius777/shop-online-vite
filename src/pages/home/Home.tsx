import { useQuery } from '@tanstack/react-query'
import React from 'react'
import { toast } from 'react-toastify'
import Loader from '../../components/Loader/Loader'
import { ProductService } from '../../services/ProductService'

const Home: React.FC = () => {
	const { data: products, isLoading } = useQuery(
		['products'],
		() => ProductService.getProducts(),
		{
			select: allData => allData.products,
			onError: ({ message }) => toast.error(message)
		}
	)
	console.log('isLoading: ', isLoading)
	return isLoading ? (
		<Loader />
	) : (
		<div className='bg-orange-900'>
			{products?.map(({ id, title }) => {
				return <p key={id}>{title}</p>
			})}
		</div>
	)
}

export default Home
