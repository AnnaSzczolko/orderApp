import { createSelector } from 'reselect'

const selectMeals = state => state.meals.meals
const selectSort = state => state.meals.sort

export const selectSortedMeals = createSelector([selectMeals, selectSort], (meals, sort) => {


	if (sort === 'highest') {
		return [...meals].sort((a, b) => b.price - a.price)
	}
	if (sort === 'lowest') {
		return [...meals].sort((a, b) => a.price - b.price)
	}

	if (sort === 'popular') {
		return [...meals].sort((a, b) => b.orders - a.orders)
	}

	return meals
})

