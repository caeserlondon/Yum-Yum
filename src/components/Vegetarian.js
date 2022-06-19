import React, { useEffect, useState } from 'react'
// import styled from 'styled-components'
import { Splide, SplideSlide } from '@splidejs/react-splide'
import '@splidejs/react-splide/css'
import { Link } from 'react-router-dom'

const Vegetarian = () => {
	useEffect(() => {
		getVegetarian()
	}, [])

	const [vegetarian, setVegetarian] = useState([])

	const getVegetarian = async () => {
		// const check = localStorage.getItem('vegetarian')

		// if (check) {
		// 	setVegetarian(JSON.parse(check))
		// } else {
		const api = await fetch(
			`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=12&tags=vegetarian`
		)
		const data = await api.json()
		// console.log(data)

		// localStorage.setItem('vegetarian', JSON.stringify(data.recipes))

		setVegetarian(data.recipes)
		// }
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
										{/* <Gradient /> */}
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

	// return (
	// 	// <div>
	// 	// 	{vegetarian.map((recipe) => {
	// 	// 		return (
	// 	// 			<div key={recipe.id}>
	// 	// 				<p>{recipe.title}</p>
	// 	// 			</div>
	// 	// 		)
	// 	// 	})}
	// 	// </div>
	// 	console.log(process.env.REACT_APP_API_KEY)
	// )
}

export default Vegetarian
