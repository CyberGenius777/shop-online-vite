import axios from 'axios'
import { FullInfo, IProductService } from './types/ProductService'

axios.defaults.baseURL = 'https://dummyjson.com'

export const ProductService: IProductService = {
	async getProducts() {
		const response = await axios.get<FullInfo>('/products', {
			params: {
				limit: 5
			}
		})
		return response.data
	}
}
