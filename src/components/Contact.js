
import "../components/home.css"
import { Col, Row } from "react-bootstrap"
import { useNavigate } from 'react-router-dom'
import logo from '../logo.png'
import logoFooter from '../logo-for-footer.png';
import { contactPage2, sendContactData } from "../api/contact";
import { useEffect, useState } from "react";

const Contact = (props) => {
	console.log('props in about', props)
	const navigate = useNavigate()

	const [email, setEmail] = useState('');
	const [name, setName] = useState('');
	const [message, setMessage] = useState('');

	// 1. go through top to bottom
	// 2. it will execute any functions and render the page
	// 3. useEffect only happens after first render

	const sendContact = () => {
		// if processing data needed, do like this
		sendContactData(name, email, message);
	};

	const handleNameOnChange = (event) => {
		setName(event.target.value);
	};

	const handleEmailOnChange = (event) => {
		setEmail(event.target.value)
	};

	const handleMessageOnChange = (event) => {
		setMessage(event.target.value)

	}

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
        <div className="apply-container">
            <div className="apply">
                <h2>Contact Us</h2>
                <p>We love coffee. Reach out and let us know about your experience at Lux-house. 
                If you are seeking to be part of our team,
                please fill out your information below with your resume. </p>
            </div>
        </div>
        <div className="information">
            <label> Your  Name</label>
                <input type = "text" name = "firstname" placeholder="your name..." onChange={handleNameOnChange}></input>
            <label> Email</label>
                <input type = "text" name = "email" placeholder="your name..." onChange= {handleEmailOnChange}></input>
            <label>Message</label>
                <textarea name="message" placeholder="message..."onChange= {handleEmailOnChange}>

                </textarea>
            <input onClick={sendContact} className="button" type="submit" value="Submit"></input>
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

