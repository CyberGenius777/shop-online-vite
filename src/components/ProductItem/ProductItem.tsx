import React from 'react'
import { IProduct } from '../../services/types/ProductService'

import { Link } from 'react-router-dom'
import styles from './ProductItem.module.scss'
import { useSelector } from 'react-redux'
import { RootState } from '../../store/store'
import image from '../../assets/checked.png'
import { useActions } from './../../hooks/useActions'

interface IProductItemProps {
	product: IProduct
	onChange: (id: number) => void
}

const ProductItem: React.FC<IProductItemProps> = ({ product }) => {
	const { items } = useSelector((state: RootState) => state.cart)
	const { addToCart, removeFromCart } = useActions()
	const isInCart: boolean = items.some(item => item.id === product.id)

	const onChange = React.useCallback(() => {
		isInCart ? removeFromCart(product.id) : addToCart(product)
	}, [isInCart])

	return (
		<div className={styles.item}>
			{isInCart ? (
				<img
					src={image}
					className='w-6 h-6 bg-no-repeat absolute right-0'
					alt='checked'
				/>
			) : null}
			<Link to={`/product/${product.id}`}>
				<div
					style={{
						backgroundImage: `url(${product.thumbnail})`
					}}
					className={styles.image}
				/>
				<div className='heading'>{product.title}</div>
				<div className={styles.price}>
					{product.price.toLocaleString('us-US', {
						style: 'currency',
						currency: 'USD',
						maximumFractionDigits: 0
					})}
				</div>
			</Link>

			<button
				onClick={onChange}
				className='mx-3 px-4 py-2 bg-red-900 text-white rounded-md hover:bg-red-800 transition-colors duration-300 ease-in-out'
			>
				{isInCart ? 'Удалить из корзины' : 'Добавить в корзину'}
			</button>
		</div>
	)
}

export default ProductItem
