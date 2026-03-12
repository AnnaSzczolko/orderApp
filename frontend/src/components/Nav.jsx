
import { useSelector, useDispatch } from 'react-redux'
import cart from '../img/cart.svg'
import spaghetti from '../img/spaghetti.svg'
import { uiActions } from '../store'
import classes from './Nav.module.css'
import { selectTotalQuantity } from '../store/cart-selectors'

export default function Nav() {
	const dispatch = useDispatch()

	const totalQuantity = useSelector(selectTotalQuantity)

	const toggleCartHandler = () => {
		dispatch(uiActions.showCart())
	}

	return (
		<nav className={classes.nav}>
			<img className={classes.icon} src={spaghetti} alt="Icon presents spaghetti" />
			<button className={classes.btn} onClick={toggleCartHandler}>
				Cart ({totalQuantity}) <img src={cart} alt="" />{' '}
			</button>
		</nav>
	)
}
