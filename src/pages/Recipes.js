import PreviousSearches from '../components/PreviousSearches'
import RecipeCard from '../components/RecipeCard'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Recipes() {
	const [recipes, setRecipes] = useState([])

	const navigate = useNavigate()

	useEffect(() => {
		getRecipes()
		// eslint-disable-next-line
	}, [])

	const getRecipes = async () => {
		const check = localStorage.getItem('random')
		console.log(recipes)

		if (check) {
			setRecipes(JSON.parse(check))
		} else {
			const api = await fetch(
				`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=9`
			)

			if (api.status === 402) {
				navigate('/limit-reached')
			} else if (api.status === 404) {
				navigate('/error')
			} else {
				const data = await api.json()
				// console.log(data);

				localStorage.setItem('random', JSON.stringify(data.recipes))

				setRecipes(data.recipes)
			}
		}
	}

	return (
		<div>
			<PreviousSearches />
			<div className='recipes-container'>
				{recipes.map((recipe, index) => (
					<RecipeCard key={index} recipe={recipe} />
				))}
			</div>
		</div>
	)
}
