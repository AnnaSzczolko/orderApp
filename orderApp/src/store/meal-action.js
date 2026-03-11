import { mealsActions } from '.'

export const fetchMeals = () => {
	return async (dispatch, getState )=> {
		const getMeals = async () => {
			const data = await fetch('http://localhost:3000/meals')

			if (!data.ok) {
				throw new Error(data.message || 'Failed to fetch meals')
			}

			const response = await data.json()
			return response
		}

		if (getState().meals.status === 'loading') {
			return
		}

		dispatch(mealsActions.fetchStart())

		try {
			const mealsData = await getMeals()
			dispatch(mealsActions.fetchSuccess(mealsData))
		} catch (error) {
			dispatch(mealsActions.fetchError())
		}
	}
}

