import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons";

export default function QuoteSection() {
	return (
		<div className="section quote">
			<p className="quote-text">
				<FontAwesomeIcon icon={faQuoteLeft} />
				Cooking is like painting or writing a song. Just as there are only so
				many notes or colors, there are only so many flavors - it's how you
				combine them that sets you apart.
			</p>
			<p className="quote-auther">- Wolfgang Puck</p>
		</div>
	);
}
