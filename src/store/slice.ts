import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IProduct } from '../services/types/ProductService'
import { ICart } from './types'

const initialState: ICart = {
	items: []
}

export const cartSlice = createSlice({
	name: 'cart',
	initialState,
	reducers: {
		addToCart: (state, action: PayloadAction<IProduct>) => {
			state.items = [...state.items, action.payload]
		},
		removeFromCart: (state, action: PayloadAction<number>) => {
			state.items = state.items.filter(
				currentItem => currentItem.id !== action.payload
			)
		}
	}
})
