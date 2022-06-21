const LimitReached = () => {
	return (
		<>
			<div className='limitReachedPage'>
				<h1>Data Limit Reached</h1>
				<h1>
					We are very sorry our API suplier (Spoonacular API ) give us only 150
					points/day then no more calls.
				</h1>
				<h2>Thank you for understanding and Please come back tommorw...</h2>
			</div>
		</>
	)
}

export default LimitReached
