import HeroSection from '../components/HeroSection'
import ImproveSkills from '../components/ImproveSkills'
import QuoteSection from '../components/QuoteSection'
import Random from '../components/Random'
import Vegetarian from '../components/Vegetarian'

export default function Home() {
	return (
		<div>
			<HeroSection />
			<ImproveSkills />
			<QuoteSection />
			<Vegetarian />
			<Random />
		</div>
	)
}
