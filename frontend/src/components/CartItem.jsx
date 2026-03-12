import classes from './CartItem.module.css'
import { currencyFormatter } from '../util/currencyFormatting'
import { useDispatch } from 'react-redux'
import { cartActions } from '../store'
import delte from '../img/delete.svg'

export default function CartItem({ item }) {
	const dispatch = useDispatch()
	const API_URL = 'https://orderapp-backend-tpks.onrender.com'
	const { name, price, image, id } = item
	const img = `${API_URL}${image}`

	const addItemHandler = (name, price, image, id) => {
		dispatch(cartActions.addItemToCart({ name, price, id, image }))
	}
	const removeItemHandler = id => {
		dispatch(cartActions.removeItemFromCart({ id }))
	}
	const removeHandler = id => {
		dispatch(cartActions.removeWholeItem({ id }))
	}

	return (
		<div className={classes.cartItemContainer}>
			<img className={classes.img} src={img} alt={item.name} />
			<div className={classes.info}>
				<p className={classes.title}>{item.name}</p>
				<p className={classes.price}>{currencyFormatter.format(item.price)}/ 1qty</p>
				<p className={classes.title}>{currencyFormatter.format(item.price * item.quantity)}</p>
			</div>
			
				<div className={classes.buttonContainer}>
					<div>
						<button className={classes.button} onClick={() => addItemHandler(name, price, image, id)}>
							{' '}
							+{' '}
						</button>
						<p className={classes.quantity}>{item.quantity}</p>
						<button className={classes.button} onClick={() => removeItemHandler(id)}>
							{' '}
							-
						</button>
					</div>
					<button className={classes.button} onClick={() => removeHandler(id)}>
						<img className={classes.svg} src={delte} alt="" />
					</button>
				</div>
			
		</div>
	)
}
