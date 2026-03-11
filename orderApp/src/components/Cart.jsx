import { useSelector } from 'react-redux'
import Modal from './UI/Modal'
import { orderActions, uiActions } from '../store'
import { useDispatch } from 'react-redux'
import Form from './Form'
import CartView from './CartView'
import OrderStatus from './OrderStatus'

export default function Cart() {
	const dispatch = useDispatch()

	const uiModalState = useSelector(state => state.ui.activeModal)

	if (!uiModalState) return null

	const onClose = () => {
		dispatch(uiActions.hide())
		dispatch(orderActions.setStatus('idle'))
	}

	return (
		<Modal onClose={onClose}>
			{uiModalState === 'cart' && <CartView></CartView>}

			{uiModalState === 'form' && <Form></Form>}
			{uiModalState === 'orderStatus' && <OrderStatus></OrderStatus>}
		</Modal>
	)
}
