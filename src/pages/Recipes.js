import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

export default function Recipes() {
	const searches = [
		"pizza",
		"burger",
		"cookies",
		"juice",
		"biriyani",
		"salad",
		"ice cream",
		"lasagna",
		"pudding",
		"soup",
	];

	return (
		<div>
			<div className="previous-searches section">
				<h2>Previous Searches</h2>
				<div className="previous-searches-container">
					{searches.map((search, index) => (
						<div
							className="search-item"
							key={index}
							style={{ animationDelay: index * 0.15 + "s" }}
						>
							{search}
						</div>
					))}
				</div>
				<div className="search-box">
					<input type="text" placeholder="Search" />
					<button className="btn">
						<FontAwesomeIcon icon={faSearch} />
					</button>
				</div>
			</div>
		</div>
	);
}
