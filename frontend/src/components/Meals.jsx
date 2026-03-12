import React, { useEffect } from 'react'
import MealItem from './MealItem'
import classes from './Meals.module.css'
import Error from './Error'
import Spinner from './Spinner'
import { useSelector, useDispatch } from 'react-redux'
import { fetchMeals } from '../store/meal-action'
import { mealsActions } from '../store'
import { selectSortedMeals } from '../store/meals-selectors'

export default function Meals() {
	const meals = useSelector(selectSortedMeals)
	const status = useSelector(state => state.meals.status)
	const sort = useSelector(state => state.meals.sort)

	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(fetchMeals())
	}, [dispatch])

	if (status === 'error') {
		return (
			<section>
				<Error></Error>
			</section>
		)
	}
	if (status === 'loading') {
		return (
			<section>
				<Spinner text={'Please wait, we are preparing data for you...'}></Spinner>
			</section>
		)
	}

	const selectHandler = e => {
		dispatch(mealsActions.setSort(e.target.value))
	}

	return (
		<section>
			<div className={classes.sort}>
				<label className={classes.label} htmlFor="">
					Sort by{' '}
				</label>
				<select className={classes.select} name="sort" id="sort" value={sort} onChange={selectHandler}>
					<option value="" disabled></option>
					<option value="highest">Highest price</option>
					<option value="lowest">Lowest price</option>
					<option value="popular">Most popular</option>
				</select>
			</div>

			<ul className={classes.meals}>
				{meals.map(meal => (
					<MealItem key={meal.id} item={meal}></MealItem>
				))}
			</ul>
		</section>
	)
}
