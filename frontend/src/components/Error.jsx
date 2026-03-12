import classes from './Error.module.css'

export default function Error() {
	return (
		<div className={classes.error}>
			<h2 className={classes.title}>Something went wrong</h2>
			<p className={classes.text}>Please, try again later</p>
		</div>
	)
}
