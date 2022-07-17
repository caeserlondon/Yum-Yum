export default function Footer() {
	const footerYear = new Date().getFullYear()
	return (
		<div className='footer container'>
			<div className='footer-section'>
				<p className='title'>YUM YUM</p>
				<p>
					YUM YUM is a recipe search website with delicious food recepies of all
					cuisines. using the API from https://spoonacular.com
				</p>
				<p className='copyright'>
					Copyrights &copy; {footerYear} Yum-Yum | All Rights Reserved
				</p>
			</div>

			<div className='footer-section'>
				<p className='title'>Contact Us</p>
				<p>yumyum@gmail.co.uk</p>
				<p>+44-987-654-321</p>
				<p>666 Hyde Park Corner</p>
				<p>W2 2UH</p>
			</div>

			<div className='footer-section'>
				<p className='title'>Socials</p>
				<p>FaceBook</p>
				<p>Twitter</p>
				<p>Instagram</p>
			</div>
		</div>
	)
}
