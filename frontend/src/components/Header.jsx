import React from 'react'
import Nav from './Nav'
import heroImg from '../img/heroIMG.png'
import classes from './Header.module.css'

export default function Header() {
	return (
		<header className={classes.header}>
			<div className={classes.hero}>
				<img className={classes.heroImg} src={heroImg} alt="Table with Italian dishes" />
        <div className={classes.overlay}></div>
			<Nav></Nav>
			<div className={classes.heroContent}>
				<h1>Bella Tavola</h1>
				<p>Authentic Italian flavors delivered straight to your door.</p>
			</div>
			</div>
		</header>
	)
}
