import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import Cuisines from './Cuisines'

export default function PreviousSearches() {
	return (
		<>
			<Cuisines />
			<div className='previous-searches section'>
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
