import CustomImage from "./CustomImage";

export default function HeroSection() {
	const images = [
		"img/gallery/img_1.jpeg",
		"img/gallery/img_2.jpeg",
		"img/gallery/img_3.jpeg",
		"img/gallery/img_4.jpeg",
		"img/gallery/img_5.jpeg",
		"img/gallery/img_6.jpeg",
		"img/gallery/img_7.jpeg",
		"img/gallery/img_8.jpeg",
		"img/gallery/img_9.jpeg",
	];
	return (
		<div className="section hero">
			<div className="col typography">
				<h1 className="title">Our Mission</h1>
				<p className="info">
					FoodiesHub is a place where you can please your soul and tummy with
					delicious food recepies of all cuisine. And our service is absolutely
					free. So start exploring now.
				</p>
				<div className="link-button">
					<a href="/recipes" className="btn">
						explore now
					</a>
				</div>
			</div>
			<div className="col gallery">
				{images.map((src, index) => (
					<CustomImage key={index} imgSrc={src} pt={"90%"} />
				))}
			</div>
		</div>
	);
}
