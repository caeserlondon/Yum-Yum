import CustomImage from './CustomImage'

export default function HeroSection() {
	const images = [
		'img/gallery/img_1.jpeg',
		'img/gallery/img_2.jpeg',
		'img/gallery/img_3.jpeg',
		'img/gallery/img_4.jpeg',
		'img/gallery/img_5.gif',
		'img/gallery/img_6.jpeg',
		'img/gallery/img_7.jpeg',
		'img/gallery/img_8.jpeg',
		'img/gallery/img_9.jpeg',
	]
	const images2 = [
		'img/gallery/img_10.jpeg',
		'img/gallery/img_11.jpeg',
		'img/gallery/img_12.jpeg',
		'img/gallery/img_13.jpeg',
		'img/gallery/img_14.gif',
		'img/gallery/img_15.jpeg',
		'img/gallery/img_16.jpeg',
		'img/gallery/img_17.jpeg',
		'img/gallery/img_18.jpeg',
	]
	return (
		<div className='section hero'>
			<div className='col gallery'>
				{images.map((src, index) => (
					<CustomImage key={index} imgSrc={src} pt={'90%'} />
				))}
			</div>

			<div className='col gallery second'>
				{images2.map((src, index) => (
					<CustomImage key={index} imgSrc={src} pt={'90%'} />
				))}
			</div>
		</div>
	)
}
