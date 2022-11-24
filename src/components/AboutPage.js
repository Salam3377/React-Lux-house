import '../components/home.css'
import logo from '../logo.png'
import picture from '../aboutUs.jpg'

const About = (props) => {
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
							<li class="list-2"><a class='a' href="/">About</a></li>
							<li class="list-2"><a class='a' href="/">Contact Us</a></li>
						</ul>
				</div>

                <div className="about-us-container">
                    <div id="about-pic-div">
                        <img src={picture} alt='about-coffee-shop'/>
                    </div>
                    <div className="about-us">
                        <h1>Established in 2022</h1>
                        <h3>A vision to create a company that brings together the best products from various cultures around the world and apply the finer details to make them even better. Details such as consistent product quality, exceptional customer service, and a nurturing environment were added to the equation that encompasses the culture of Lux. Our goal at Lux is simple, to be the change in everything that we do, from our culture of care to the quality of our products, and to how we can better serve our communities.</h3>
                    </div>
                </div>

                
				
				<div>
                
                </div>							
			</div>

		</>
        
    

	)
}

export default About
