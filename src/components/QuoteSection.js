import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function QuoteSection() {
	const [joke, setJoke] = useState('')
	const navigate = useNavigate()

	const fetchJoke = async () => {
		const data = await fetch(
			`https://api.spoonacular.com/food/jokes/random?apiKey=${process.env.REACT_APP_API_KEY}`
		)

		if (data.status === 402) {
			navigate('/limit-reached')
		} else if (data.status === 404) {
			navigate('/error')
		} else {
			const ress = await data.json()

			setJoke(ress.text)
			// console.log(ress.text)
		}
	}

	return (
		// <>
		// 	<div className='section quote'>
		// 		<p className='quote-text'>
		// 			<FontAwesomeIcon icon={faQuoteLeft} />
		// 			Cooking is like painting or writing a song. Just as there are only so
		// 			many notes or colors, there are only so many flavors - it's how you
		// 			combine them that sets you apart.
		// 		</p>
		// 		<p className='quote-auther'>- Wolfgang Puck</p>
		// 	</div>
		// 	<div className='link-button' onClick={() => fetchJoke()}>
		// 		<div className='btn'>
		// 			Tell Me A Random Food Joke // Caution: may contain adult humor!
		// 		</div>
		// 	</div>
		// 	<p className='joke-text'>{joke}</p>
		// </>
		<>
			<div className='section quote'>
				<p className='quote-text'>
					<FontAwesomeIcon icon={faQuoteLeft} />
					Cooking is like painting or writing a song. Just as there are only so
					many notes or colors, there are only so many flavors - it's how you
					combine them that sets you apart.
				</p>
				<p className='quote-auther'>- Wolfgang Puck</p>
			</div>
			<div className='link-button' onClick={() => fetchJoke()}>
				<div className='btn'>
					Tell Me A Random Food Joke // Caution: may contain adult humor!
				</div>
			</div>
			<p className='joke-text'>{joke}</p>
			{joke.length > 0 && (
				<div className='link-button' onClick={() => setJoke('')}>
					<div className='btn'>Clear the Joke</div>
				</div>
			)}
		</>
	)
}
