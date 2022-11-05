import React from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import Cart from './pages/cart/Cart'
import Home from './pages/home/Home'
import Product from './pages/product/Product'

const App: React.FC = () => {
	return (
		<>
			<nav>
				<Link to='/'>Главная</Link>
				<Link to='/products'>Товары</Link>
				<Link to='/cart'>Корзина</Link>
			</nav>
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/products/:id' element={<Product />} />
				<Route path='/cart' element={<Cart />} />
			</Routes>
		</>
	)
}

export default App
