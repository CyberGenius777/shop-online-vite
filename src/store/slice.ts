import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IProduct } from '../services/types/ProductService'
import { ICart } from './types'
import { toast } from 'react-toastify'

const initialState: ICart = {
	items: []
}

export const cartSlice = createSlice({
	name: 'cart',
	initialState,
	reducers: {
		addToCart: (state, action: PayloadAction<IProduct>) => {
			state.items = [...state.items, action.payload]
			toast.success('Товар добавлен в корзину', {
				closeButton: false
			})
		},
		removeFromCart: (state, action: PayloadAction<number>) => {
			state.items = state.items.filter(
				currentItem => currentItem.id !== action.payload
			)
			toast.success('Товар удален', {
				closeButton: false
			})
		}
	}
})
