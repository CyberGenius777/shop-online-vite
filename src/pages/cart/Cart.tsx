import { useSelector } from 'react-redux'
import Layout from '../../components/Layout/Layout'
import { useActions } from '../../hooks/useActions'
import { RootState } from '../../store/store'

const Cart = () => {
	const { items } = useSelector((state: RootState) => state.cart)
	const { removeFromCart } = useActions()

	return (
		<Layout title='Корзина'>
			{items.length ? (
				<div className='grid grid-cols-2 gap-3'>
					{items.map((item, index) => (
						<div className='flex justify-between items-center'>
							<div>
								<img
									src={item.thumbnail}
									alt={item.title}
									className='h-auto w-96 drop-shadow-2xl shadow-black'
								/>
								<p>{`${index + 1}. ${item.title}`}</p>
							</div>
							<div>
								<button
									onClick={() => removeFromCart(item.id)}
									className='mx-3 px-4 py-2 bg-teal-700 text-white rounded-md hover:bg-teal-600 transition-colors duration-300 ease-in-out'
								>
									Удалить из корзины
								</button>
							</div>
						</div>
					))}
				</div>
			) : (
				<h3>Корзина пуста!</h3>
			)}
		</Layout>
	)
}

export default Cart
