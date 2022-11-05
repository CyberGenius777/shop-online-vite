export interface IProductService {
	getProducts: () => Promise<FullInfo>
}

export interface FullInfo {
	products: IProduct[]
	total: number
	skip: number
	limit: number
}

export interface IProduct {
	id: number
	title: string
	description: string
	price: number
	discountPercentage: number
	rating: number
	stock: number
	brand: string
	category: string
	thumbnail: string
	images: string[]
}
