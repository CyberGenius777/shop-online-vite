import { useQuery } from '@tanstack/react-query'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { toast } from 'react-toastify'
import Gallery from '../../components/Gallary/Gallery'
import Layout from '../../components/Layout/Layout'
import Loader from '../../components/Loader/Loader'
import { useActions } from '../../hooks/useActions'
import { ProductService } from '../../services/ProductService'
import { RootState } from '../../store/store'

const Product = () => {
	const { id } = useParams<{ id: string }>()
	const { items } = useSelector((state: RootState) => state.cart)
	const { addToCart, removeFromCart } = useActions()
	const { data: currentGood, isLoading } = useQuery(
		['product', id],
		() => ProductService.getProduct(id || ''),
		{
			onError: ({ message }) => toast.error(message)
		}
	)
	const isInCart: boolean = items.some(item => item.id === Number(id))

	return isLoading ? (
		<Loader />
	) : currentGood ? (
		<Layout title={currentGood.title}>
			<Gallery images={currentGood.images} />

			<h3>
				{currentGood.price.toLocaleString('us-US', {
					style: 'currency',
					currency: 'USD',
					maximumFractionDigits: 0
				})}
			</h3>
			<button
				onClick={() =>
					isInCart ? removeFromCart(Number(id)) : addToCart(currentGood)
				}
				className='m-3 px-4 py-2 text-white bg-teal-700 rounded-md hover:bg-teal-600 transition-colors duration-300 ease-in-out'
			>
				{isInCart ? 'Уже в корзине. Удалить из корзины' : 'Добавить'}
			</button>
		</Layout>
	) : (
		<Layout>Товар не найден!</Layout>
	)
}

export default Product
