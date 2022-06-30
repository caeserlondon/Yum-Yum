import { NavLink } from 'react-router-dom'
import {
	GiNoodles,
	GiChopsticks,
	GiArabicDoor,
	GiFrance,
	GiItalia,
	GiIndianPalace,
	GiAfrica,
	GiOlive,
	GiEuropeanFlag,
} from 'react-icons/gi'

const cuisineList = [
	{
		name: 'Middle East',
		link: '/cuisine/Middle-Eastern',
		icon: <GiArabicDoor />,
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
		name: 'African',
		link: '/cuisine/African',
		icon: <GiAfrica />,
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
		name: 'Mediterranean',
		link: '/cuisine/Mediterranean',
		icon: <GiOlive />,
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
				<div
					// className='cuisine-item'
					key={index}
					style={{ animationDelay: index * 0.25 + 's' }}
				>
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
