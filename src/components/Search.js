import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import Cuisines from './Cuisines'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function PreviousSearches() {
	const [input, setInput] = useState('')

	const navigate = useNavigate()

	const submitHandler = (e) => {
		e.preventDefault()

		navigate('/searched/' + input)
	}

	return (
		<>
			<Cuisines />
			<form onSubmit={submitHandler} className='previous-searches section'>
				<div className='search-box'>
					<input
						type='text'
						placeholder='Search'
						onChange={(e) => setInput(e.target.value)}
						value={input}
					/>
					<button className='btn'>
						<FontAwesomeIcon icon={faSearch} />
					</button>
				</div>
			</form>
		</>
	)
}
