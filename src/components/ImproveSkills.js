export default function ImproveSkills() {
	const list = [
		"discover new ingredient",
		"Experiment with food",
		"Know nutrition facts",
		"Learn new recepies",
		"Get cooking tips",
		"Eat healthy",
	];

	return (
		<div className="section improve-skills">
			<div className="col img">
				<img src="/img/gallery/img_10.jpeg" alt="sushi" />
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
