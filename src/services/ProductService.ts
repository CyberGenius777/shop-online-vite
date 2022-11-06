import axios from 'axios'
import { FullInfo, IProduct, IProductService } from './types/ProductService'

axios.defaults.baseURL = 'https://dummyjson.com/products'

export const ProductService: IProductService = {
	async getProducts() {
		const response = await axios.get<FullInfo>('/', {
			params: {
				limit: 30
			}
		})
		return response.data
	},
	async getProduct(id: string) {
		const response = await axios.get<IProduct>(`/${id}`)
		return response.data
	}
}
