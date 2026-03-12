import { createPortal } from 'react-dom'
import { useEffect } from 'react'
import classes from './Modal.module.css'

export default function Modal({ children, onClose }) {
	const modal = document.getElementById('modal')
	if (!modal) return

	useEffect(() => {
		const handleEsc = e => {
			if (e.key === 'Escape') {
				onClose()
			}
		}

		document.addEventListener('keydown', handleEsc)

		document.body.style.overflowY = 'hidden'

		return () => {
			document.removeEventListener('keydown', handleEsc)
			document.body.style.overflow = 'auto'
		}
	}, [onClose])

	return createPortal(
		<div className={classes.backdrop} onClick={onClose}>
			<div className={classes.modal} onClick={e => e.stopPropagation()}>
				{children}
			</div>
		</div>,
		document.getElementById('modal'),
	)
}
