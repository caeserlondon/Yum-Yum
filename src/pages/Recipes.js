import PreviousSearches from "../components/PreviousSearches";
import RecipeCard from "../components/RecipeCard";

export default function Recipes() {
	const recipes = [
		{
			title: "chicken tandoori",
			image: "/img/gallery/img_1.jpeg",
			authorImg: "/img/top-chiefs/img_3.jpeg",
		},
		{
			title: "Pizza margherita",
			image: "/img/gallery/img_2.jpeg",
			authorImg: "/img/top-chiefs/img_1.jpeg",
		},
		{
			title: "omurice & vegetables",
			image: "/img/gallery/img_3.jpeg",
			authorImg: "/img/top-chiefs/img_2.jpeg",
		},
		{
			title: "greek salad",
			image: "/img/gallery/img_4.jpeg",
			authorImg: "/img/top-chiefs/img_5.jpeg",
		},
		{
			title: "Sushi",
			image: "/img/gallery/img_5.jpeg",
			authorImg: "/img/top-chiefs/img_2.jpeg",
		},
		{
			title: "Ramen",
			image: "/img/gallery/img_6.jpeg",
			authorImg: "/img/top-chiefs/img_2.jpeg",
		},
		{
			title: "meat barbecue",
			image: "/img/gallery/img_7.jpeg",
			authorImg: "/img/top-chiefs/img_1.jpeg",
		},
		{
			title: "french toast",
			image: "/img/gallery/img_8.jpeg",
			authorImg: "/img/top-chiefs/img_5.jpeg",
		},
		{
			title: "thai pad gra prow",
			image: "/img/gallery/img_9.jpeg",
			authorImg: "/img/top-chiefs/img_2.jpeg",
		},
		{
			title: "tomahawk steak",
			image: "/img/gallery/img_11.jpeg",
			authorImg: "/img/top-chiefs/img_4.jpeg",
		},
		{
			title: "American Burger",
			image: "/img/gallery/img_12.jpeg",
			authorImg: "/img/top-chiefs/img_4.jpeg",
		},
		{
			title: "Mutton Biriyani",
			image: "/img/gallery/img_13.jpeg",
			authorImg: "/img/top-chiefs/img_3.jpeg",
		},
		{
			title: "Taco",
			image: "/img/gallery/img_14.jpeg",
			authorImg: "/img/top-chiefs/img_6.jpeg",
		},
		{
			title: "ramen",
			image: "/img/gallery/img_15.jpeg",
			authorImg: "/img/top-chiefs/img_2.jpeg",
		},
		{
			title: "Butter chicken",
			image: "/img/gallery/img_16.jpeg",
			authorImg: "/img/top-chiefs/img_3.jpeg",
		},
		{
			title: "seafood soup",
			image: "/img/gallery/img_17.jpeg",
			authorImg: "/img/top-chiefs/img_6.jpeg",
		},
		{
			title: "pesto pasta",
			image: "/img/gallery/img_18.jpeg",
			authorImg: "/img/top-chiefs/img_1.jpeg",
		},
		{
			title: "Meatballs",
			image: "/img/gallery/img_19.jpeg",
			authorImg: "/img/top-chiefs/img_4.jpeg",
		},
		{
			title: "Spaghetti and Meatballs",
			image: "/img/gallery/img_20.jpeg",
			authorImg: "/img/top-chiefs/img_1.jpeg",
		},
		{
			title: "pepperoni pizza",
			image: "/img/gallery/img_21.jpeg",
			authorImg: "/img/top-chiefs/img_1.jpeg",
		},
		{
			title: "Strawberry Mousse",
			image: "/img/gallery/img_22.jpeg",
			authorImg: "/img/top-chiefs/img_5.jpeg",
		},
		{
			title: "Cheese Burger",
			image: "/img/gallery/img_23.jpeg",
			authorImg: "/img/top-chiefs/img_4.jpeg",
		},
		{
			title: "lentils soup",
			image: "/img/gallery/img_24.jpeg",
			authorImg: "/img/top-chiefs/img_3.jpeg",
		},
		{
			title: "steak",
			image: "/img/gallery/img_25.jpeg",
			authorImg: "/img/top-chiefs/img_4.jpeg",
		},
		{
			title: "mediterranean barbeque",
			image: "/img/gallery/img_26.jpeg",
			authorImg: "/img/top-chiefs/img_5.jpeg",
		},
		{
			title: "italian Meatballs",
			image: "/img/gallery/img_20.jpeg",
			authorImg: "/img/top-chiefs/img_1.jpeg",
		},
	].sort(() => Math.random() - 0.5);

	return (
		<div>
			<PreviousSearches />
			<div className="recipes-container">
				{/* <RecipeCard /> */}
				{recipes.map((recipe, index) => (
					<RecipeCard key={index} recipe={recipe} />
				))}
			</div>
		</div>
	);
}
