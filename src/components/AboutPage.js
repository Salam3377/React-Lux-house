import '../components/about.css'
import { useNavigate } from 'react-router-dom'
import logo from '../logo.png'
import picture from '../aboutUs.jpg'
import logoFooter from '../logo-for-footer.png';
const About = (props) => {
	console.log('props in about', props)
	const navigate = useNavigate()
// this is react: we don't have pages we have components 

	return (// more bad indentation 
        <>
			<div id="body-div"> 
			<div id='header-box'> here
					<div id="header-div">
						<img id='logo-img' src={logo} alt="logo" />
						<h1 id='lux-house-text'>Lux-House</h1>
						<h3 id='craft-coffee-text'>Craft Coffee and more...</h3>
					</div>
					<div id="right-menu-div">
						<ul id='ul-right-menu-div'>
							<li class="list"><button class='list-buttons'  onClick={() => navigate('/cart')}>Cart</button></li>
						</ul>
					</div>
				</div>
				<div id="menu-line-div">
                        <ul id='ul-menu-line-div'>here
							<li class="list-2"><button class='list-buttons' onClick={() => navigate('/')}>Home</button></li>
							<li class="list-2"><button class='list-buttons' onClick={() => navigate('/menu')}>Menu</button></li>
							<li class="list-2"><button class='list-buttons' onClick={() => navigate('/about')}>About Us</button></li>
							<li class="list-2"><button class='list-buttons' onClick={() => navigate('/contact')}>Contact</button></li>
						</ul>
				</div>

                <div className="about-us-container">
                    <div id="about-pic-div">
                        <img src={picture} alt='about-coffee-shop'/>
                    </div>
                    <div className="about-us">
                        <h1>Established in 2022</h1>
                        <h3>A vision to create a company that brings together the best products from 
							various cultures around the world and apply the finer details to make them even better.
							Details such as consistent product quality, exceptional customer service,
							and a nurturing environment were added to the equation that encompasses the culture of Lux.
							Our goal at Lux is simple, to be the change in everything that we do, from our culture
							of care to the quality of our products, and to how we can better serve our communities.
						</h3>
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

export default About
