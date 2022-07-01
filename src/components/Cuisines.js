import { NavLink } from 'react-router-dom'
import {
	GiNoodles,
	GiChopsticks,
	GiFrance,
	GiItalia,
	GiIndianPalace,
	GiSpain,
	GiEuropeanFlag,
	GiUsaFlag,
	GiSouthAmerica,
} from 'react-icons/gi'

const cuisineList = [
	{
		name: 'Southern',
		link: '/cuisine/Southern',
		icon: <GiSouthAmerica />,
	},
	{
		name: 'French',
		link: '/cuisine/French',
		icon: <GiFrance />,
	},
	{
		name: 'Indian',
		link: '/cuisine/Indian',
		icon: <GiIndianPalace />,
	},
	{
		name: 'Italian',
		link: '/cuisine/Italian',
		icon: <GiItalia />,
	},
	{
		name: 'American',
		link: '/cuisine/American',
		icon: <GiUsaFlag />,
	},
	{
		name: 'Spanish',
		link: '/cuisine/Spanish',
		icon: <GiSpain />,
	},

	{
		name: 'Thai',
		link: '/cuisine/Thai',
		icon: <GiNoodles />,
	},
	{
		name: 'European',
		link: '/cuisine/European',
		icon: <GiEuropeanFlag />,
	},

	{
		name: 'Chinese',
		link: '/cuisine/Chinese',
		icon: <GiChopsticks />,
	},
]

const Cuisines = () => {
	return (
		<div className='cuisines-list'>
			{cuisineList.map((cuisineItem, index) => (
				<div key={index} style={{ animationDelay: index * 0.25 + 's' }}>
					<NavLink to={cuisineItem.link} className='cuisine-item'>
						{cuisineItem.icon}
						<h4>{cuisineItem.name}</h4>
					</NavLink>
				</div>
			))}
		</div>
	)
}

export default Cuisines
