import { SelectProducts } from '@/db/schema'

export const sortOptions = [
	{ label: 'Date: Old to new', value: 'createdAt.asc' },
	{
		label: 'Date: New to old',
		value: 'createdAt.desc',
	},
	{ label: 'Price: Low to high', value: 'price.asc' },
	{ label: 'Price: High to low', value: 'price.desc' },
	{
		label: 'Alphabetical: A to Z',
		value: 'name.asc',
	},
	{
		label: 'Alphabetical: Z to A',
		value: 'name.desc',
	},
]

export const productCategories: {
	title: SelectProducts['category']
}[] = [
	{
		title: 'tees',
	},
	{
		title: 'hoodies & sweaters',
	},
	{
		title: 'bottoms',
	},
	{
		title: 'swimwear',
	},
	{
		title: 'knitwear',
	},
	{
		title: 'shirts & polos',
	},
	{
		title: 'underwear',
	},
	{
		title: 'outerwear',
	},
]
