import CustomImage from "./CustomImage";

export default function HeroSection() {
	const images = [
		"../../public/img/galary/img_1.jpeg",
		"../../public/img/gallery/img_3.jpg",
		"../../public/img/gallery/img_4.jpg",
		"../../public/img/gallery/img_2.jpg",
		"../../public/img/gallery/img_5.jpg",
		"../../public/img/gallery/img_6.jpg",
		"../../public/img/gallery/img_7.jpg",
		"../../public/img/gallery/img_8.jpg",
		"../../public/img/gallery/img_9.jpg",
	];
	return (
		<div className="section hero">
			<div className="col typography">
				<h1 className="title">our mission</h1>
				<p className="info">
					FoodiesHub is a place where you can please your soul and tummy with
					delicious food recepies of all cuisine. And our service is absolutely
					free. So start exploring now.
				</p>
				<button className="btn">explore now</button>
			</div>
			<div className="col gallery">
				{images.map((src, index) => (
					<CustomImage key={index} imgSrc={src} pt={"90%"} />
				))}
			</div>
		</div>
	);
}
