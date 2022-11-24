import '../components/home.css'
import logo from '../logo.png'; // with import
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
							<li class="list"><a class='a' href="/">cart</a></li>
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
				<div></div>
				<div>
					<div></div>
					<div></div>
				</div>
				<div>
					<div></div>
					<div></div>
				</div>
				<div>
					<div></div>
					<div></div>
				</div>
			</div>
			<div id="footer-div">
				<div></div>
				<div></div>
				<div></div>
			</div>
		</>
	)
}

export default Home
