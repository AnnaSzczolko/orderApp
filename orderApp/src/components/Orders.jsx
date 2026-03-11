import React, { useEffect } from 'react'
import { useState } from 'react'
import CartItemInOrders from './CartItemInOrders'
import classes from './Orders.module.css'
import Spinner from './Spinner'

const API_URL = 'https://orderapp-backend-tpks.onrender.com'


export default function Orders() {
	const [orders, setOrders] = useState([])
	const [showOrders, setShowOrders] = useState(false)
	const [status, setStatus] = useState('idle')

	async function loadOrders() {
		setStatus('loading')
		try {
			const response = await fetch(`${API_URL}/orders`)
			if (!response.ok) {
				throw new Error('Failed to fetch orders.')
			}
			const data = await response.json()

			setOrders(data)
			setStatus('success')
		} catch (error) {
			setStatus('error')
		}
	}

	const handleShowOrders = params => {
		setShowOrders(prevValue => !prevValue)
	}

	useEffect(() => {
		loadOrders()
	}, [])

	return (
		<section>
			<div className={classes.ordersContainer}>
				<button className={classes.button} onClick={handleShowOrders}>
					Show orders
				</button>
				{showOrders && status === 'loading' && <Spinner text={'Please wait, we are fetching orders.'}></Spinner>}
				{showOrders && status === 'error' && <h3 className={classes.customerName}>
									Something went wrong. Please try again later.
								</h3>}

				{(showOrders && status === 'success') && (
					<div className={classes.ordersList}>
						{orders.map((order, index) => (
							<div className={classes.orderCard} key={index}>
								<h3 className={classes.customerName}>
									{order.customer.name} {order.customer.surname}
								</h3>
								<p className={classes.address}>
									{order.customer.street}, {order.customer.postalCode} {order.customer.city}
								</p>

								<ul className={classes.productsList}>
									{order.cart.map(item => (
										<li key={item.id}>
											<CartItemInOrders item={item}></CartItemInOrders>
										</li>
									))}
								</ul>
							</div>
						))}
					</div>
				)}
			</div>
		</section>
	)
}
