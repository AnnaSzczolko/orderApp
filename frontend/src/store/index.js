import { configureStore, createSlice } from '@reduxjs/toolkit'

const getParsedLocalStorage = (key, defaultValue) => {
	try {
		const value = localStorage.getItem(key)
		return value ? JSON.parse(value) : defaultValue
	} catch (error) {
		return defaultValue
	}
}

const itemsFromLocalStorage = getParsedLocalStorage('itemsInCart', [])

const initialState = {
	itemsInCart: itemsFromLocalStorage,
}

const initialMealsState = {
	meals: [],
	status: 'idle',
	sort: '',
}

const mealsSlice = createSlice({
	name: 'meals',
	initialState: initialMealsState,
	reducers: {
		fetchStart(state) {
			state.status = 'loading'
		},
		fetchSuccess(state, action) {
			;((state.status = 'success'), (state.meals = action.payload))
		},
		fetchError(state) {
			state.status = 'error'
		},
		setSort(state, action) {
			state.sort = action.payload
		},
	},
})

const uiSlice = createSlice({
	name: 'ui',
	initialState: {
		activeModal: null,
	},
	reducers: {
		showCart(state) {
			state.activeModal = 'cart'
		},
		showForm(state) {
			state.activeModal = 'form'
		},
		showOrderStatus(state) {
			state.activeModal = 'orderStatus'
		},
		hide(state) {
			state.activeModal = null
		},
	},
})

const cartSlice = createSlice({
	name: 'cart',
	initialState,
	reducers: {
		addItemToCart(state, action) {
			state.changed = true

			const exisitingCartItemIndex = state.itemsInCart.findIndex(item => item.id === action.payload.id)

			if (exisitingCartItemIndex > -1) {
				const existingItem = state.itemsInCart[exisitingCartItemIndex]
				const updatedItem = { ...existingItem, quantity: existingItem.quantity + 1 }

				state.itemsInCart[exisitingCartItemIndex] = updatedItem
			} else {
				const newItem = {
					name: action.payload.name,
					price: +action.payload.price,
					id: action.payload.id,
					quantity: 1,
					image: action.payload.image,
					orders: action.payload.orders,
				}

				state.itemsInCart.push(newItem)
			}
		},
		removeItemFromCart(state, action) {
			const itemToDelete = state.itemsInCart.find(item => item.id === action.payload.id)

			if (!itemToDelete) return

			if (itemToDelete.quantity === 1) {
				const indexOfItemToDelete = state.itemsInCart.findIndex(item => item.id === action.payload.id)
				state.itemsInCart.splice(indexOfItemToDelete, 1)
			} else {
				itemToDelete.quantity = itemToDelete.quantity - 1
			}
		},
		removeWholeItem(state, action) {
			const indexOfItemToDelete = state.itemsInCart.findIndex(item => item.id === action.payload.id)
			state.itemsInCart.splice(indexOfItemToDelete, 1)
		},
		clearCart(state) {
			state.itemsInCart = []
		},
	},
})

const orderSlice = createSlice({
	name: 'order',
	initialState: {
		status: 'idle',
	},
	reducers: {
		setStatus(state, action) {
			state.status = action.payload
		},
	},
})

const store = configureStore({
	reducer: { cart: cartSlice.reducer, meals: mealsSlice.reducer, ui: uiSlice.reducer, order: orderSlice.reducer },
})

export default store
export const cartActions = cartSlice.actions
export const mealsActions = mealsSlice.actions
export const uiActions = uiSlice.actions
export const orderActions = orderSlice.actions

let previousItemsInCart = store.getState().cart.itemsInCart

store.subscribe(() => {
	const currentItemsInCart = store.getState().cart.itemsInCart

	if (previousItemsInCart !== currentItemsInCart) {
		localStorage.setItem('itemsInCart', JSON.stringify(currentItemsInCart))

		previousItemsInCart = currentItemsInCart
	}
})
