import React, { useEffect, useState } from 'react'
// import styled from 'styled-components'
import { Splide, SplideSlide } from '@splidejs/react-splide'
import '@splidejs/react-splide/css'
import { Link } from 'react-router-dom'

const Random = () => {
	const [random, setRandom] = useState([])

	useEffect(() => {
		getRandom()
	}, [])

	const getRandom = async () => {
		// const check = localStorage.getItem('random')

		// if (check) {
		// 	setRandom(JSON.parse(check))
		// } else {
		const api = await fetch(
			`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=12`
		)
		const data = await api.json()
		// console.log(data);

		// localStorage.setItem('popular', JSON.stringify(data.recipes))

		setRandom(data.recipes)
		// }
	}

	return (
		<div>
			<div className='wrapper'>
				<h2>Random Recipes</h2>
				<Splide
					options={{
						perPage: 3,
						rewind: true,
						rewindSpeed: 1000,
						arrows: true,
						drag: 'free',
						pagination: true,
						gap: '1rem',
						autoplay: true,
					}}
				>
					{random.map((recipe) => {
						return (
							<SplideSlide key={recipe.id}>
								<div className='card'>
									<Link to={'/recipe/' + recipe.id}>
										<p>{recipe.title}</p>
										<img src={recipe.image} alt={recipe.title} />
										{/* <Gradient /> */}
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

export default Random
