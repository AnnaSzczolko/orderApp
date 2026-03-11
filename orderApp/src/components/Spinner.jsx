import React from 'react'
import classes from './Spinner.module.css'

export default function Spinner({ text }) {
	return (
		<div className={classes.container}>
			<h2 className={classes.title}>{text}</h2>
			<div className={classes.spinner}></div>
		</div>
	)
}
