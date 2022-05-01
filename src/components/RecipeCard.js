import CustomImage from "./CustomImage";

export default function RecipeCard({ recipe }) {
	return (
		<div className="recipe-card">
			<CustomImage imgSrc={recipe.image} pt="65%" />
			<div className="recipe-card-info">
				<img className="author-img" src={recipe.authorImg} alt="chief" />
				<p className="recipe-title">{recipe.title}</p>
				<p className="recipe-desc">
					Spicy jalapeno tail drumstick sirloin short loin jerky steak doner
					pastrami meatloaf swine, rump meatball pork belly spare ribs shoulder
					pork chicken drumstick.
				</p>
				<a className="view-btn" href="#!">
					VIEW RECIPE
				</a>
			</div>
		</div>
	);
}
