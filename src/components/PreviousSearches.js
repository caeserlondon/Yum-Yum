import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import Cuisines from './Cuisines'

// const searches = [
// 	'pizza',
// 	'ramen',
// 	'cookies',
// 	'Taco',
// 	'biriyani',
// 	'salad',
// 	'Burger',
// 	'steak',
// 	'pudding',
// 	'soup',
// 	'sushi',
// 	'barbecue',
// 	'pasta',
// ]

export default function PreviousSearches() {
	return (
		<>
			<Cuisines />
			<div className='previous-searches section'>
				{/* <div className='previous-searches-container'>
				{searches.map((search, index) => (
					<div
					className='search-item'
					key={index}
					style={{ animationDelay: index * 0.15 + 's' }}
					>
					{search}
					</div>
					))}
				</div> */}
				<div className='search-box'>
					<input type='text' placeholder='Search' />
					<button className='btn'>
						<FontAwesomeIcon icon={faSearch} />
					</button>
				</div>
			</div>
		</>
	)
}
