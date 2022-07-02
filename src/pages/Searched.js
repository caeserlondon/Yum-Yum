import { Link, useParams, useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import Search from '../components/Search'
import CustomImage from '../components/CustomImage'

const Searched = () => {
	const [searched, setSearched] = useState([])

	let params = useParams()
	const navigate = useNavigate()

	const getSearched = async (name) => {
		const data = await fetch(
			`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&query=${name}&number=9`
		)

		if (data.status === 402) {
			navigate('/limit-reached')
		} else if (data.status === 404) {
			navigate('/error')
		} else {
			const recipes = await data.json()
			// console.log(data.status)
			// console.log(recipes.results)
			setSearched(recipes.results)
		}
	}

	useEffect(() => {
		getSearched(params.search)
		// eslint-disable-next-line
	}, [params.search])

	return (
		<>
			<Search />
			{searched.length === 0 && (
				<p className='search-error'>
					We are very sorry but our recipes supplier is sending us a 404
					error... Plaese try a different spelling or try searching something
					else!
				</p>
			)}

			<div className='recipes-container'>
				{searched.map((recipe) => {
					return (
						<article key={recipe.id} className='recipe-card'>
							<CustomImage imgSrc={recipe.image} pt='65%' />

							<div className='recipe-card-info'>
								<p className='recipe-title'>{recipe.title}</p>
								<div className='recipe-desc'></div>
								<Link className='view-btn' to={'/searchedRecipe/' + recipe.id}>
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

export default Searched
