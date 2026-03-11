import React from 'react'
import { currencyFormatter } from '../util/currencyFormatting'
import classes from './MealItem.module.css'
import { useDispatch } from 'react-redux'
import { cartActions } from '../store'

const API_URL = 'https://orderapp-backend-tpks.onrender.com'

function MealItem({ item }) {
	const { id, name, price, image, description, orders } = item
	const img = `{API_URL}/${image}`

	const dispatch = useDispatch()

	const addItemHandler = (name, price, img, id, orders) => {
		dispatch(cartActions.addItemToCart({ name, price, id, img, orders }))
	}

	return (
		<li className={classes.mealItem}>
			<img className={classes.mealImg} src={`http://localhost:3000/${image}`} alt={`Image of ${item.name}`} />
			<div className={classes.container}>
				<h3 className={classes.mealTitle}>{name}</h3>
				<p className={classes.mealPrice}>{currencyFormatter.format(price)}</p>
				<p className={classes.mealDescription}>{description}</p>
			</div>

			<button className={classes.mealBtn} onClick={() => addItemHandler(name, price, img, id, orders)}>
				Add to cart
			</button>
		</li>
	)
}

export default React.memo(MealItem)
