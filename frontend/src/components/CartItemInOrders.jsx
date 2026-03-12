import React from 'react'
import classes from './CartItemInOrders.module.css'

export default function CartItemInOrders({ item }) {
		const API_URL = 'https://orderapp-backend-tpks.onrender.com'
		const img = `${API_URL}${item.img}`

	return (
		<div className={classes.cartItemContainer}>
			<img className={classes.img} src={img} alt={item.name} />
			<div className={classes.info}>
				<p className={classes.title}>{item.name}</p>
				<p className={classes.quantity}>quantity : {item.quantity}</p>
			</div>
		</div>
	)
}
