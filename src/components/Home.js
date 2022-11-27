import '../components/home.css'
import logo from '../logo.png'; // with import
import logoFooter from '../logo-for-footer.png';
// import { Link } from 'react-router-dom'

const Home = (props) => {
	// const { msgAlert, user } = props
	console.log('props in home', props)

	return (
		<>
			<div id="body-div">
				<div id='header-box'>
					<div id="header-div">
						<img id='logo-img' src={logo} alt="logo" />
						<h1>Lux-House</h1>
						<h3>Craft Coffee and more...</h3>
					</div>
					<div id="right-menu-div">
						<ul id='ul-right-menu-div'>
							<li class="list"><a class='a' href="/">search</a></li>
							<li class="list"><a class='a' href="/">profile</a></li>
							<li class="list"><a class='a' href="/cart">cart</a></li>
						</ul>
					</div>
				</div>
				<div id="menu-line-div">
						<ul id='ul-menu-line-div'>
							<li class="list-2"><a class='a' href="/">Home</a></li>
							<li class="list-2"><a class='a' href="/menu">Menu</a></li>
							<li class="list-2"><a class='a' href="/about">About</a></li>
							<li class="list-2"><a class='a' href="/">Contact Us</a></li>
						</ul>
				</div>
				<div id="main-pic-div">
					<img id='main-pic' src='https://cdn.mos.cms.futurecdn.net/Zqgq9Dnoutqd2wv7xFqRv8.jpg' alt='main-coffee-shop' />
				</div>
				<div id='pics-box-div'>
					<div class="pair-pics-div">
						<div>
							<img class="main-page-pics" src='https://cdn.nofusskitchen.com/wp-content/uploads/2022/01/Restaurant-instagram-captions-7-1024x683.jpg?lossy=1&ssl=1' alt='shop' />
						</div>
						<div>
							<img class="main-page-pics" src='https://s3-media0.fl.yelpcdn.com/bphoto/hUlQhBDO-glkO3ZwOETyvA/o.jpg' alt='shop' />
						</div>
					</div>
					<div class="pair-pics-div">
						<div>
							<img class="main-page-pics" src='https://www.blogto.com/listings/cafes/upload/2015/09/20150902-creedscafe590-10.jpg' alt='shop' />
						</div>
						<div>
							<img class="main-page-pics" src='https://floridatrippers.com/wp-content/uploads/2021/02/coffee-in-miami-cold-brew-1600x900.jpg' alt='shop' />
						</div>
					</div>
					<div class="pair-pics-div">
						<div>
							<img class="main-page-pics" src='https://cdn.shopify.com/s/files/1/0278/9765/9462/files/coffee-bar-events-img.png?v=3274833284192126514' alt='shop' />
						</div>
						<div>
							<img class="main-page-pics" src='https://www.timeoutriyadh.com/cloud/timeoutriyadh/2021/11/03/Coffee-shops-in-Riyadh.jpg' alt='shop' />
						</div>
					</div>
				</div>
			</div>
			<div id="footer-div">
				<div id='footer-box'>
					<div id='footer-logo-div'>
						<img id='logo-footer-img' src={logoFooter} alt="logo" />
					</div>
					<div id='footer-center-div'>
						<p id='footer-center-p'> &reg; 2022</p>
					</div>
					<div id='footer-right-div'>
						<a href="#" class="fa fa-facebook"></a>
						<a href="#" class="fa fa-instagram"></a>
					</div>
				</div>
			</div>
		</>
	)
}

export default Home
