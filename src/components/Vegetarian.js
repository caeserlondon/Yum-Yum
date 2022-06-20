import React, { useEffect, useState } from 'react'
import { Splide, SplideSlide } from '@splidejs/react-splide'
import '@splidejs/react-splide/css'
import { Link, useNavigate } from 'react-router-dom'

const Vegetarian = () => {
	const [vegetarian, setVegetarian] = useState([])

	const navigate = useNavigate()

	useEffect(() => {
		getVegetarian()
	}, [])

	const getVegetarian = async () => {
		const check = localStorage.getItem('vegetarian')

		if (check) {
			setVegetarian(JSON.parse(check))
		} else {
			const api = await fetch(
				`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=9&tags=vegetarian`
			)

			if (api.status === 402) {
				// window.location = '/error'
				navigate('/error')
			} else {
				const data = await api.json()
				// console.log(data)

				localStorage.setItem('vegetarian', JSON.stringify(data.recipes))

				setVegetarian(data.recipes)
			}
		}
	}

	return (
		<div>
			<div className='wrapper'>
				<h2>Vegetarian Recipes</h2>
				<Splide
					options={{
						perPage: 3,
						arrows: true,
						drag: 'free',
						pagination: true,
						gap: '1rem',
						rewind: true,
						rewindSpeed: 1000,
					}}
				>
					{vegetarian.map((recipe) => {
						return (
							<SplideSlide key={recipe.id}>
								<div className='card'>
									<Link to={'/recipe/' + recipe.id}>
										<p>{recipe.title}</p>
										<img src={recipe.image} alt={recipe.title} />
										<div className='gradient'></div>
									</Link>
								</div>
							</SplideSlide>
						)
					})}
				</Splide>
			</div>
		</div>
	)
}

export default Vegetarian
