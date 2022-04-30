import ChiefCard from "./ChiefCard";

export default function ChiefsSection() {
	const chiefs = [
		{
			name: "John Doe",
			img: "/img/top-chiefs/img_1.jpeg",
			recipesCount: "10",
			cuisine: "Mexican",
		},
		{
			name: "Juan Carlos",
			img: "/img/top-chiefs/img_2.jpeg",
			recipesCount: "05",
			cuisine: "Japanese",
		},
		{
			name: "tom adams",
			img: "/img/top-chiefs/img_3.jpeg",
			recipesCount: "13",
			cuisine: "Italian",
		},
		{
			name: "Jonny Smith",
			img: "/img/top-chiefs/img_4.jpeg",
			recipesCount: "08",
			cuisine: "American",
		},
		{
			name: "tonny montana",
			img: "/img/top-chiefs/img_5.jpeg",
			recipesCount: "09",
			cuisine: "French",
		},
		{
			name: "Ben Affleck",
			img: "/img/top-chiefs/img_6.jpeg",
			recipesCount: "04",
			cuisine: "Indian",
		},
	];
	return (
		<div className="section chiefs">
			<h1 className="title">Our Top Chiefs</h1>
			<div className="top-chiefs-container">
				{chiefs.map((chief) => (
					<ChiefCard key={chief.name} chief={chief} />
				))}
			</div>
		</div>
	);
}
