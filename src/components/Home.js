import '../components/home.css'
import logo from '../logo.png'; // with import
import logoFooter from '../logo-for-footer.png';
import messages from './shared/AutoDismissAlert/messages'
import { signUp, signIn } from '../api/auth'
import ProfileModal from './ProfileModal';
import { useNavigate } from 'react-router-dom'
import React, {useState, useEffect} from 'react'

const Home = (props) => {
	const [editModalShow, setEditModalShow] = useState(false)
	const [updated, setUpdated] = useState(false)
    const [isUpdateShown, setIsUpdateShown] = useState(false)
    const triggerRefresh= () => {setUpdated(prev => !prev)}
    const handleClose=() => {setEditModalShow(false)}

	const navigate = useNavigate()

	const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
	const [passwordConfirmation, setPasswordConfirmation] = useState('')

	const handleUpdateSignIn = (event) => {
        event.preventDefault()
		console.log('the props', props)
		const { msgAlert, setUser } = props
        const credentials = {email, password}
		signIn(credentials)
			.then((res) => setUser(res.data.user))
			.then(() => handleClose())
			.then(() =>
				msgAlert({
					heading: 'Sign In Success',
					message: messages.signInSuccess,
					variant: 'success',
				})
			)
            .then(() => navigate('/'))
			.then(() => triggerRefresh())
			.catch((error) => {
                setEmail('')
                setPassword('')
				console.log(error, "error")
				msgAlert({
					heading: 'Sign In Failed with error: ' + error.message,
					message: messages.signInFailure,
					variant: 'danger',
				})
			})
		}

		const handleUpdateSignUp = (event) => {
			event.preventDefault()
			const { msgAlert, setUser } = props
			const credentials = {email, password, passwordConfirmation}
			signUp(credentials)
				.then(() => signIn(credentials))
				.then((res) => setUser(res.data.user))
				.then(() => handleClose())
				.then(() =>
					msgAlert({
						heading: 'Sign Up Success',
						message: messages.signUpSuccess,
						variant: 'success',
					})
				)
				.then(() => navigate('/'))
				.then(() => triggerRefresh())
				.catch((error) => {
					setEmail('')
					setPassword('')
					setPasswordConfirmation('')
					msgAlert({
						heading: 'Sign Up Failed with error: ' + error.message,
						message: messages.signUpFailure,
						variant: 'danger',
					})
				})
			}



		const handleChangeE = (event) => {
			setEmail(event.target.value)
		}
		const handleChangeP = (event) => {
			setPassword(event.target.value)
		}
		const handleChangePConfirm = (event) => {
			setPasswordConfirmation(event.target.value)
		}
        
	console.log('props in home', props)

	return (
		<>
		{/* modal form open */}
		{editModalShow &&<ProfileModal closeModal={setEditModalShow}
                    show = {editModalShow}
					handleUpdateSignIn={handleUpdateSignIn}
					handleUpdateSignUp={handleUpdateSignUp}
					handleChangeE={handleChangeE}
					handleChangeP={handleChangeP}
					handleChangePConfirm={handleChangePConfirm}
					email={email}
					password={password}
					passwordConfirmation={passwordConfirmation}
                    />}
		
		{/* ---------------- */}
			<div id="body-div">
				<div id='header-box'>
					<div id="header-div">
						<img id='logo-img' src={logo} alt="logo" />
						<h1>Lux-House</h1>
						<h3>Craft Coffee and more...</h3>
					</div>
					<div id="right-menu-div">
						<ul id='ul-right-menu-div'>
							<li class="list"><button class='list-buttons' onClick={()=> navigate('/search')}>Search</button></li>
							<li class="list"><button class='list-buttons' onClick={()=> {setEditModalShow(true)}}>Profile</button></li>
							<li class="list"><button class='list-buttons' onClick={()=> navigate('/cart')}>Cart</button></li>
						</ul>
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
