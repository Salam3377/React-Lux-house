import emailjs from '@emailjs/browser';
import "../components/home.css"
import { useNavigate } from 'react-router-dom'
import logo from '../logo.png'
import logoFooter from '../logo-for-footer.png';
import { useEffect, useState } from "react";

const Contact = (props) => {
	
	const navigate = useNavigate()

	const [email, setEmail] = useState('');
	const [name, setName] = useState('');
	const [message, setMessage] = useState('');

	const sendEmail = (e) => {
		e.preventDefault();
	
		emailjs.sendForm('service_2mi089m', 'lux_house', e.target, 'k6aLEovzlG8qq7Ru6')
		  .then((result) => {
			  console.log(result.text);
		  }, (error) => {
			  console.log(error.text);
		  });
		  e.target.reset()
	  };


	return (
    <>
        <div id="body-div">
			<div id='header-box'>
				<div id="header-div">
						<img id='logo-img' src={logo} alt="logo" />
						<h1 id='lux-house-text'>Lux-House</h1>
						<h3 id='craft-coffee-text'>Craft Coffee and more...</h3>
				</div>
				</div>
			<div id="menu-line-div">
                    <ul id='ul-menu-line-div'>
							<li class="list-2"><button class='list-buttons' onClick={() => navigate('/')}>Home</button></li>
							<li class="list-2"><button class='list-buttons' onClick={() => navigate('/menu')}>Menu</button></li>
							<li class="list-2"><button class='list-buttons' onClick={() => navigate('/about')}>About Us</button></li>
							<li class="list-2"><button class='list-buttons' onClick={() => navigate('/contact')}>Contact</button></li>
					</ul>
		</div>
        </div>
		<div id = "top0">
			<div id = "top1">
        	
                	<h2 id ='title'>Contact Us</h2>
                	<p id = 'text'>We love coffee. Reach out and let us know about your experience at Lux-house. 
                If you are seeking to be part of our team,
                please fill out your information below with your resume. </p>
			</div>
        	
		</div>
        <div id = "top2">
			<form id='contact-form' onSubmit={sendEmail}>
            	<label class='contact-label'> Your Name</label>
                	<input class='text-input' type = "text" name = "name" placeholder="your name..." ></input>
            	<label class='contact-label'> Email</label>
                	<input class='text-input' type = "text" name = "Email" placeholder="your name..." ></input>
            	<label class='contact-label'>Message</label>
                	<textarea class='text-input' name="message" placeholder="message...">

                	</textarea>
            	<input id='contact-submit'  type="submit" value="Submit"></input>
			</form>
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

export default Contact

