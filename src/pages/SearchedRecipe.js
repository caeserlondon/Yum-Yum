import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import Search from '../components/Search'

const SearchedRecipe = () => {
	const [recipe, setRecipe] = useState({})

	const [activeButton, setActiveButton] = useState('instructions')

	let params = useParams()
	const navigate = useNavigate()

	const fetchDetails = async () => {
		const data = await fetch(
			`https://api.spoonacular.com/recipes/${params.id}/information?apiKey=${process.env.REACT_APP_API_KEY}`
		)

		if (data.status === 402) {
			navigate('/limit-reached')
		} else if (data.status === 404) {
			navigate('/error')
		} else {
			const detailsData = await data.json()
			// console.log(detailsData)
			setRecipe(detailsData)
		}
	}

	useEffect(() => {
		fetchDetails()
		// eslint-disable-next-line
	}, [params.id])

	return (
		<>
			<Search />
			<div className='details-container'>
				<div>
					<h2>{recipe.title}</h2>
					<img src={recipe.image} alt='recipe.title' />
				</div>

				<div className='info'>
					<div className='btn-box'>
						<div
							onClick={() => setActiveButton('instructions')}
							className={
								activeButton === 'instructions'
									? 'active details-btn'
									: 'details-btn'
							}
						>
							Instructions
						</div>

						<div
							onClick={() => setActiveButton('ingredients')}
							className={
								activeButton === 'ingredients'
									? 'active details-btn'
									: 'details-btn'
							}
						>
							Ingredients
						</div>
						<div
							onClick={() => setActiveButton('summary')}
							className={
								activeButton === 'summary'
									? 'active details-btn'
									: 'details-btn'
							}
						>
							Summary
						</div>
					</div>

					{activeButton === 'instructions' && (
						<div>
							<p dangerouslySetInnerHTML={{ __html: recipe.instructions }}></p>
						</div>
					)}

					{activeButton === 'summary' && (
						<div>
							<p dangerouslySetInnerHTML={{ __html: recipe.summary }}></p>
						</div>
					)}
					{activeButton === 'ingredients' && (
						<ul>
							{recipe.extendedIngredients.map((ingredient) => (
								<li key={ingredient.id}>{ingredient.original}</li>
							))}
						</ul>
					)}
				</div>
			</div>
		</>
	)
}

export default SearchedRecipe
