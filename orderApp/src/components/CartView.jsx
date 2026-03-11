import React from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { selectTotalPrice, selectTotalQuantity } from '../store/cart-selectors'
import classes from './CartView.module.css'
import CartItem from './CartItem'
import { currencyFormatter } from '../util/currencyFormatting'
import { uiActions, cartActions } from '../store'

export default function CartView() {
	const dispatch = useDispatch()
	const totalQuantity = useSelector(selectTotalQuantity)
	const totalPrice = useSelector(selectTotalPrice)
	const itemsInCart = useSelector(state => state.cart.itemsInCart)

	const handleClearCart = () => {
		dispatch(cartActions.clearCart())
		dispatch(uiActions.hide())
	}

	const handleShowForm = params => {
		dispatch(uiActions.showForm())
	}
	return (
		<div className={classes.cart}>
			<h2 className={classes.title}>Cart</h2>
			{itemsInCart.length !== 0 ? (
				<p className={classes.text}>Your items in cart</p>
			) : (
				<p className={classes.text}>Your cart is empty</p>
			)}
			<ul className={classes.list}>
				{itemsInCart.map(item => (
					<li key={item.id}>
						<CartItem item={item} ></CartItem>
					</li>
				))}
			</ul>
			<div className={classes.info}>
				<p className={classes.text}>
					Total quantity: <span>{totalQuantity}</span>
				</p>
				<p className={classes.text}>
					Total price: <span>{currencyFormatter.format(totalPrice)}</span>{' '}
				</p>
			</div>
			<div className={classes.btnActions}>
				<button className={classes.btn} onClick={handleClearCart} disabled={totalQuantity === 0}>
					Clear cart
				</button>
				<button className={classes.btn} disabled={totalQuantity === 0} onClick={handleShowForm}>
					Order
				</button>
			</div>
		</div>
	)
}
