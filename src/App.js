import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Recipes from './pages/Recipes'
import CuisinesPage from './pages/CuisinesPage'
import Searched from './pages/Searched'
import SearchedRecipe from './pages/SearchedRecipe'
import Settings from './pages/Settings'
import Error from './pages/Error'
import LimitReached from './pages/LimitReached'

function App() {
	return (
		<Router>
			<Navbar />
			<div className='container main'>
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/recipes' element={<Recipes />} />
					<Route path='/cuisine/:type' element={<CuisinesPage />} />
					<Route path='/searched/:search' element={<Searched />} />
					<Route path='/searchedRecipe/:id' element={<SearchedRecipe />} />
					<Route path='/settings' element={<Settings />} />
					<Route path='/*' element={<Error />} />
					<Route path='/limit-reached' element={<LimitReached />} />
				</Routes>
			</div>
			<Footer />
		</Router>
	)
}

export default App
