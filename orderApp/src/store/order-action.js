import { orderActions, cartActions, uiActions } from '.'

export const postOrder = customerData => {
	return async (dispatch, getState) => {


		dispatch(uiActions.showOrderStatus())
		dispatch(orderActions.setStatus('pending'))

		const state = getState()

		const orderData = {
			customer: customerData,
			cart: state.cart.itemsInCart,
		}

		try {
			const response = await fetch('http://localhost:3000/orders', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(orderData),
			})

			if (!response.ok) {
				throw new Error('Failed to sent order')
			}

			dispatch(orderActions.setStatus('success'))
			dispatch(cartActions.clearCart())
		} catch (error) {
			dispatch(orderActions.setStatus('error'))
		}
	}
}
