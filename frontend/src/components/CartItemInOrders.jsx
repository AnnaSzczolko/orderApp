import React from 'react'
import classes from './CartItemInOrders.module.css'

export default function CartItemInOrders({ item }) {
	return (
		<div className={classes.cartItemContainer}>
			<img className={classes.img} src={item.img} alt={item.name} />
			<div className={classes.info}>
				<p className={classes.title}>{item.name}</p>
				<p className={classes.quantity}>quantity : {item.quantity}</p>
			</div>
		</div>
	)
}
