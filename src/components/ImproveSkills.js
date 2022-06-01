import CustomImage from './CustomImage';

export default function ImproveSkills() {
	const list = [
		'discover new ingredient',
		'Experiment with food',
		'Know nutrition facts',
		'Learn new recepies',
		'Get cooking tips',
		'Eat healthy',
	];
	const images = [
		'img/gallery/img_19.jpeg',
		'img/gallery/img_20.jpeg',
		'img/gallery/img_21.jpeg',
		'img/gallery/img_22.jpeg',
		'img/gallery/img_23.jpeg',
		'img/gallery/img_24.jpeg',
		'img/gallery/img_25.jpeg',
		'img/gallery/img_26.jpeg',
		'img/gallery/img_27.jpeg',
	];

	return (
		<div className="section improve-skills">
			<div className="col gallery">
				{images.map((src, index) => (
					<CustomImage key={index} imgSrc={src} pt={'90%'} />
				))}
			</div>
			<div className="col typography">
				<h1 className="title">Improve Your Culinary Skills</h1>
				{list.map((item, index) => (
					<p className="skill-item" key={index}>
						{item}
					</p>
				))}
				<div className="link-button">
					<a href="/recipes" className="btn">
						Let's Cook
					</a>
				</div>
			</div>
		</div>
	);
}
