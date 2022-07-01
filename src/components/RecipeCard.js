import CustomImage from './CustomImage'
import { Link } from 'react-router-dom'

export default function RecipeCard({ recipe }) {
	return (
		<div className='recipe-card'>
			<CustomImage imgSrc={recipe.image} pt='65%' />
			<div className='recipe-card-info'>
				<p className='recipe-title'>{recipe.title}</p>
				<div className='recipe-desc'></div>
				<div>
					<Link className='view-btn' to={'/recipe/' + recipe.id}>
						VIEW RECIPE
					</Link>
				</div>
			</div>
		</div>
	)
}
