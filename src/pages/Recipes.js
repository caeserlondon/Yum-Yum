import PreviousSearches from "../components/PreviousSearches";
import RecipeCard from "../components/RecipeCard";

export default function Recipes() {
	const recipes = [
		{
			title: "Chicken Pan Pizza",
			image: "/img/gallery/img_1.jpeg",
			authorImg: "/img/top-chiefs/img_1.jpeg",
		},
		{
			title: "Spaghetti and Meatballs",
			image: "/img/gallery/img_4.jpeg",
			authorImg: "/img/top-chiefs/img_2.jpeg",
		},
		{
			title: "American Cheese Burger",
			image: "/img/gallery/img_5.jpeg",
			authorImg: "/img/top-chiefs/img_3.jpeg",
		},
		{
			title: "Mutton Biriyani",
			image: "/img/gallery/img_6.jpeg",
			authorImg: "/img/top-chiefs/img_5.jpeg",
		},
		{
			title: "Japanese Sushi",
			image: "/img/gallery/img_10.jpeg",
			authorImg: "/img/top-chiefs/img_6.jpeg",
		},
		{
			title: "Chicken Pan Pizza",
			image: "/img/gallery/img_1.jpeg",
			authorImg: "/img/top-chiefs/img_1.jpeg",
		},
		{
			title: "Spaghetti and Meatballs",
			image: "/img/gallery/img_4.jpeg",
			authorImg: "/img/top-chiefs/img_2.jpeg",
		},
		{
			title: "American Cheese Burger",
			image: "/img/gallery/img_5.jpeg",
			authorImg: "/img/top-chiefs/img_3.jpeg",
		},
		{
			title: "Mutton Biriyani",
			image: "/img/gallery/img_6.jpeg",
			authorImg: "/img/top-chiefs/img_5.jpeg",
		},
		{
			title: "Japanese Sushi",
			image: "/img/gallery/img_10.jpeg",
			authorImg: "/img/top-chiefs/img_6.jpeg",
		},
		{
			title: "American Cheese Burger",
			image: "/img/gallery/img_5.jpeg",
			authorImg: "/img/top-chiefs/img_3.jpeg",
		},
		{
			title: "Mutton Biriyani",
			image: "/img/gallery/img_6.jpeg",
			authorImg: "/img/top-chiefs/img_5.jpeg",
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
