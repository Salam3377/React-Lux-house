import React, { useEffect, useState } from "react"
import { menuIndex } from "../api/menu"
import { Card } from 'react-bootstrap'
import logo from '../logo.png'
import '../components/home.css'
import '../components/menuPage.css'

const MenuPage = ({ msgAlert }) => {
    const [allMenu, setAllMenu] = useState([])

    useEffect(() => {
        menuIndex()
        .then(res => {
            setAllMenu(res.data.menu)
        })
        .catch((error) => {
            msgAlert({
                heading: 'Failure',
                message: 'Index Menu Failure' + error,
                variant: 'danger'
            })
        })
    }, [])

    const menuCards = allMenu.map(menuItem => (
        <Card key={ menuItem.id } style={{ width: '30%', margin: 5 }}>
            <Card.Header>{ menuItem.name }</Card.Header>
            <Card.Body>
                <Card.Text>
                    {menuItem.description}
                    {menuItem.price}
                    <img id="menu-cart-img" src="https://t3.ftcdn.net/jpg/01/23/41/76/360_F_123417653_U1HQPWgXlch50hv1a9giz9KBzb4mrnwB.jpg" /> 
                </Card.Text>
            </Card.Body>
        </Card>
        ))


    return(
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
                <div id="menu-cards">
                    { menuCards }
                </div>
        </div>
        </>
    )
}

export default MenuPage