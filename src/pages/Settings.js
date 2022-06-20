import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'
import { useState, useEffect } from 'react'

export default function Settings() {
	// ........theme........

	const [theme, setTheme] = useState('light')

	const [settings, setSettings] = useState({
		'--background-color': '#e7c0c0',
		'--background-light': '#eddada',
		'--shadow-color': 'rgba(0, 0, 0, 0.2)',
		'--shadow-dark': 'rgba(0, 0, 0, 0.5)',
		'--primary-color': 'rgb(232, 25, 24)',
		'--text-color': '#0a0a0a',
		'--text-light': '#575757',
		'--font-size': '16px',
		'--animation-speed': 0.7,
	})

	const themes = [
		{
			'--background-color': '#e7c0c0',
			'--background-light': '#eddada',
			'--shadow-color': 'rgba(0,0,0,0.2)',
			'--text-color': '#0A0A0A',
			'--text-light': '#575757',
		},

		{
			'--background-color': 'rgb(29, 29, 29)',
			'--background-light': 'rgb(77, 77, 77)',
			'--shadow-color': 'rgba(0,0,0,0.2)',
			'--text-color': '#ffffff',
			'--text-light': '#eceaea',
		},
	]

	function changeTheme(i) {
		const _theme = { ...themes[i] }

		setTheme(i === 0 ? 'light' : 'dark')

		// ... updating the settings ...

		let _settings = { ...settings }

		for (let key in _theme) {
			// console.log(key);            keys
			// console.log(_theme[key]);   values
			_settings[key] = _theme[key]
		}
		setSettings(_settings)
	}

	useEffect(() => {
		// console.log(settings);
		const root = document.documentElement
		for (let key in settings) {
			root.style.setProperty(key, settings[key])
		}
	}, [settings])

	// ...........color...........

	const [primaryColor, setPrimaryColor] = useState(0)

	const primaryColors = [
		'rgb(232, 24, 25)',
		'rgb(219, 112, 147)',
		'rgb(250, 137, 67)',
		'rgb(250, 128, 114)',
		'rgb(255, 99, 71)',
		'rgb(130, 50, 37)',
	]

	function changeColor(i) {
		const _color = primaryColors[i]
		let _settings = { ...Settings }
		_settings['--primary-color'] = _color
		setPrimaryColor(i)
		setSettings(_settings)
	}

	// .............font.............

	const [fontSize, setFontSize] = useState(1)

	const fontSizes = [
		{
			title: 'Small',
			value: '12px',
		},
		{
			title: 'Medium',
			value: '16px',
		},
		{
			title: 'Large',
			value: '20px',
		},
	]

	function changeFontSize(i) {
		const _size = fontSizes[i]
		let _settings = { ...settings }
		_settings['--font-size'] = _size.value
		setFontSize(i)
		setSettings(_settings)
	}

	// .............animation...........

	const [animationSpeed, setAnimationSpeed] = useState(1)

	const animationSpeeds = [
		{
			title: 'Slow',
			value: 2,
		},
		{
			title: 'Medium',
			value: 1,
		},
		{
			title: 'Fast',
			value: 0.5,
		},
	]

	function changeAnimationSpeed(i) {
		const _speed = animationSpeeds[i]
		let _settings = { ...settings }
		_settings['--animation-speed'] = _speed.value
		setAnimationSpeed(i)
		setSettings(_settings)
	}

	// ......... return ........

	return (
		<div>
			{/* ................theme............... */}

			<div className='section d-block'>
				<h2>Preferred theme</h2>
				<div className='options-container'>
					<div className='option light' onClick={() => changeTheme(0)}>
						{theme === 'light' && (
							<div className='check'>
								<FontAwesomeIcon icon={faCheck} />
							</div>
						)}
					</div>
					<div className='option dark' onClick={() => changeTheme(1)}>
						{theme === 'dark' && (
							<div className='check'>
								<FontAwesomeIcon icon={faCheck} />
							</div>
						)}
					</div>
				</div>
			</div>

			{/*..............colors............. */}

			<div className='section d-block'>
				<h2>Primary color</h2>
				<div className='options-container'>
					{primaryColors.map((color, index) => (
						<div
							key={index}
							className='option'
							style={{ backgroundColor: color }}
							onClick={() => changeColor(index)}
						>
							{primaryColor === index && (
								<div className='check'>
									<FontAwesomeIcon icon={faCheck} />
								</div>
							)}
						</div>
					))}
				</div>
			</div>

			{/* ..................font............  */}

			<div className='section d-block'>
				<h2>Font sizes</h2>
				<div className='options-container'>
					{fontSizes.map((size, index) => (
						<button
							key={index}
							className='btn'
							onClick={() => changeFontSize(index)}
						>
							{size.title}
							{fontSize === index && (
								<span>
									<FontAwesomeIcon icon={faCheck} />
								</span>
							)}
						</button>
					))}
				</div>
			</div>

			{/* .............animation..............  */}

			<div className='section d-block'>
				<h2>Animation speed</h2>
				<div className='options-container'>
					{animationSpeeds.map((speed, index) => (
						<button
							key={index}
							className='btn'
							onClick={() => changeAnimationSpeed(index)}
						>
							{speed.title}
							{animationSpeed === index && (
								<span>
									<FontAwesomeIcon icon={faCheck} />
								</span>
							)}
						</button>
					))}
				</div>
			</div>
		</div>
	)
}
