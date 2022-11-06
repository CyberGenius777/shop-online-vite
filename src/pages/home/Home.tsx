import { useQuery } from '@tanstack/react-query'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { toast } from 'react-toastify'
import Layout from '../../components/Layout/Layout'
import Loader from '../../components/Loader/Loader'
import ProductItem from '../../components/ProductItem/ProductItem'
import { useActions } from '../../hooks/useActions'
import { ProductService } from '../../services/ProductService'
import { RootState } from '../../store/store'

import styles from './Home.module.scss'

const Home: React.FC = () => {
	const { data: products, isLoading } = useQuery(
		['products'],
		() => ProductService.getProducts(),
		{
			select: allData => allData.products,
			onError: ({ message }) => toast.error(message),
			refetchOnMount: true,
			refetchOnWindowFocus: 'always'
		}
	)

	return (
		<Layout title='Shop the collection'>
			{isLoading ? (
				<Loader />
			) : products?.length ? (
				<div className={styles.wrapper}>
					{products?.map(product => {
						return <ProductItem key={product.id} product={product} />
					})}
				</div>
			) : (
				<h3 className='flex justify-center'>Товаров не найдено!</h3>
			)}
		</Layout>
	)
}

export default Home
