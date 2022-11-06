import React from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import Cart from './pages/cart/Cart'
import Home from './pages/home/Home'
import Product from './pages/product/Product'

import styles from './App.module.scss'

const App: React.FC = () => {
	return (
		<div className={styles.wrapper}>
			<nav className='flex gap-2 text-white justify-center '>
				<Link className='hover:underline p-2' to='/'>
					Главная
				</Link>
				<Link className='hover:underline p-2' to='/cart'>
					Корзина
				</Link>
			</nav>
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/product/:id' element={<Product />} />
				<Route path='/cart' element={<Cart />} />
				<Route path='*' element={<Home />} />
			</Routes>
		</div>
	)
}

export default App
