import React from 'react'
import { IProduct } from '../../services/types/ProductService'

import styles from './ProductItem.module.scss'

interface IProductItemProps {
	product: IProduct
}

const ProductItem: React.FC<IProductItemProps> = ({ product }) => {
	return (
		<div className={styles.item}>
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
		</div>
	)
}

export default ProductItem
