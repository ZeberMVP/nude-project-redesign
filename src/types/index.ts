import { type FileWithPath } from 'react-dropzone'
import { type z } from 'zod'

import type { cartItemSchema, checkoutItemSchema } from '@/lib/validations/cart'
import { type Icons } from '@/components/Icons'
import { SelectProducts } from '@/db/schema'

export interface NavItem {
	title: string
	href?: string
	disabled?: boolean
	external?: boolean
	icon?: keyof typeof Icons
	label?: string
	description?: string
}

export interface NavItemWithChildren extends NavItem {
	items: NavItemWithChildren[]
}

export interface NavItemWithOptionalChildren extends NavItem {
	items?: NavItemWithChildren[]
}

export type MainNavItem = NavItemWithOptionalChildren

export type SidebarNavItem = NavItemWithChildren

export type UserRole = 'user' | 'admin' | 'superadmin'

export type Option = {
	label: string
	value: string
}

export type FileWithPreview = FileWithPath & {
	preview: string
}

export type StoredFile = {
	id: string
	name: string
	url: string
}

export type CartItem = z.infer<typeof cartItemSchema>

export type CheckoutItem = z.infer<typeof checkoutItemSchema>

export interface CartLineItem
	extends Pick<
		SelectProducts,
		'id' | 'name' | 'image' | 'category' | 'price' | 'inventory'
	> {
	quantity?: number
}
