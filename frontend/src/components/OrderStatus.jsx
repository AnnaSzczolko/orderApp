import { useSelector } from 'react-redux'
import classes from './OrderStatus.module.css'
import Spinner from './Spinner'

export default function OrderStatus() {
	const orderStatus = useSelector(state => state.order.status)

	let message = 'Please wait, we are sending your order...'

	if (orderStatus === 'pending') {
		return <Spinner text={message}></Spinner>
	}

	if (orderStatus === 'success') {
		message = 'Order sent successfully!'
	} else if (orderStatus === 'error') {
		message === 'Something went wrong. Please try again later.'
	}
	return (
		<div>
			<p className={classes.message}>{message}</p>
		</div>
	)
}
