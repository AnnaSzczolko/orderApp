import { useState } from 'react'
import classes from './Form.module.css'
import { uiActions } from '../store'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { selectTotalPrice, selectTotalQuantity } from '../store/cart-selectors'
import { currencyFormatter } from '../util/currencyFormatting'
import { validateForm } from '../util/validateForm'
import { postOrder } from '../store/order-action'

export default function Form() {
	const [errors, setErrors] = useState({})
	const dispatch = useDispatch()


	const handleSubmit = e => {
		setErrors({})
		e.preventDefault()

		const fd = new FormData(e.target)
		const data = Object.fromEntries(fd.entries())

		const errors = validateForm(data)

		if (Object.keys(errors).length > 0) {
			setErrors(errors)
			return
		}

		dispatch(postOrder(data))
	}

	const totalQuantity = useSelector(selectTotalQuantity)
	const totalPrice = useSelector(selectTotalPrice)

	const handleBackToCart = () => {
		dispatch(uiActions.showCart())
	}

	return (
		<form className={classes.form} onSubmit={handleSubmit}>
			<h2 className={classes.title}>Please, enter Your data</h2>

			<div className={classes.info}>
				<p className={classes.text}>
					Total quantity: <span>{totalQuantity}</span>
				</p>
				<p className={classes.text}>
					Total price: <span>{currencyFormatter.format(totalPrice)}</span>{' '}
				</p>
			</div>
			<div className={classes.container}>
				<label className={classes.label} htmlFor="name">
					Name
				</label>
				<input type="text" name="name" id="name" placeholder="name" required />
			</div>
			<div className={classes.container}>
				<label htmlFor="surname">Surname</label>
				<input type="text" id="surname" name="surname" placeholder="surname" required />
			</div>
			<div className={classes.container}>
				<label htmlFor="city">City</label>
				<input type="text" id="city" name="city" placeholder="city" required />
			</div>
			<div className={classes.container}>
				<label htmlFor="street">Street</label>
				<input type="text" id="street" name="street" placeholder="street" required />
			</div>
			<div className={classes.container}>
				<label htmlFor="postal-code">Postal code</label>
				<input
					type="text"
					id="postal-code"
					name="postal-code"
					placeholder="00-000"
					pattern="[0-9]{2}-[0-9]{3}"
					required
				/>
			</div>
			{errors && (
				<div className={classes.errors}>
					<ul>
						{Object.values(errors).map((err, index) => (
							<li key={index}>{err}</li>
						))}
					</ul>
				</div>
			)}
			<div className={classes.btnActions}>
				<button type="button" className={classes.btn} onClick={handleBackToCart}>
					Back to Cart
				</button>
				<button className={classes.btn}>Order</button>
			</div>
		</form>
	)
}
