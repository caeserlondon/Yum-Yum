import { Link, useParams, useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import PreviousSearches from '../components/PreviousSearches'
import CustomImage from '../components/CustomImage'

function Cuisine() {
	const [cuisine, setCuisine] = useState([])

	let params = useParams()
	const navigate = useNavigate()

	const getCuisine = async (name) => {
		const data = await fetch(
			`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&cuisine=${name}&number=9`
		)

		if (data.status === 402) {
			navigate('/limit-reached')
		} else if (data.status === 404) {
			navigate('/error')
		} else {
			const recipes = await data.json()

			setCuisine(recipes.results)
		}
	}

	useEffect(() => {
		getCuisine(params.type)
		// eslint-disable-next-line
	}, [params.type])

	return (
		<>
			{/* <Cuisines /> */}
			<PreviousSearches />
			<div className='recipes-container'>
				{cuisine.map((recipe) => {
					return (
						<article key={recipe.id} className='recipe-card'>
							<CustomImage imgSrc={recipe.image} pt='65%' />

							<div className='recipe-card-info'>
								<p className='recipe-title'>{recipe.title}</p>
								<div className='recipe-desc'></div>
								<Link className='view-btn' to={'/recipe/' + recipe.id}>
									VIEW RECIPE
								</Link>
							</div>
						</article>
					)
				})}
			</div>
		</>
	)
}

export default Cuisine
