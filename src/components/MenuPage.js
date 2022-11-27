import React, { useEffect, useState } from "react"
import { menuIndex } from "../api/menu"
import { Card } from 'react-bootstrap'
import logo from '../logo.png'
import logoFooter from '../logo-for-footer.png';
import '../components/home.css'
import '../components/menuPage.css'


import { cartCreate } from "../api/cart"


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
    //Coffee  map function down here
    let coffeeList = []
    const coffeeFilter = allMenu.filter(elem => {
        if(elem.menu_type ==='coffee') {
            coffeeList.push(elem)
        }
    })
    const menuCoffeeCards = coffeeList.map((menuItem, i) => (
            <Card id="card" key={ menuItem.id } style={{ margin: 10 }}>
                <Card.Header id="card-header">{ menuItem.name }</Card.Header>
                <Card.Body class="card-body">
                    <Card.Text class="card-text">
                        <p1 class="description-p1">{menuItem.description}</p1>
                        <p1 class="price-p1">{menuItem.price}</p1>
                        <img id="menu-cart-img" src={ require(`../coffeeImages/img${i}.jpg`).default } /> 
                    </Card.Text>
                </Card.Body>
            </Card>
        ))
    //Tea  map function down here
    let teaList = []
    const teaFilter = allMenu.filter(elem => {
        if(elem.menu_type ==='tea') {
            teaList.push(elem)
        }
    })
    const menuTeaCards = teaList.map((menuItem, i) => (
            <Card id="card" key={ menuItem.id } style={{ margin: 10 }}>
                <Card.Header id="card-header">{ menuItem.name }</Card.Header>
                <Card.Body class="card-body">
                    <Card.Text class="card-text">
                        <p1 class="description-p1">{menuItem.description}</p1>
                        <p1 class="price-p1">{menuItem.price}</p1>
                        <img id="menu-cart-img" src={ require(`../teaImages/img${i}.jpg`).default } /> 
                    </Card.Text>
                </Card.Body>
            </Card>
        ))
    
    //Desserts  map function down here
    let dessertList = []
    const dessertFilter = allMenu.filter(elem => {
        if(elem.menu_type ==='dessert') {
            dessertList.push(elem)
        }
    })
    const menuDessertCards = dessertList.map(menuItem => (
            <Card id="card" key={ menuItem.id } style={{ margin: 10 }}>
                <Card.Header id="card-header">{ menuItem.name }</Card.Header>
                <Card.Body class="card-body">
                    <Card.Text class="card-text">
                        <p1 class="description-p1">{menuItem.description}</p1>
                        <p1 class="price-p1">{menuItem.price}</p1>
                        <img id="menu-cart-img" src="https://t3.ftcdn.net/jpg/01/23/41/76/360_F_123417653_U1HQPWgXlch50hv1a9giz9KBzb4mrnwB.jpg" /> 
                    </Card.Text>
                </Card.Body>
            </Card>
        ))
    
    //Lunch  map function down here
    let lunchList = []
    const lunchFilter = allMenu.filter(elem => {
        if(elem.menu_type ==='lunch') {
            lunchList.push(elem)
        }
    })
    const menuLunchCards = lunchList.map(menuItem => (
            <Card id="card" key={ menuItem.id } style={{ margin: 10 }}>
                <Card.Header id="card-header">{ menuItem.name }</Card.Header>
                <Card.Body class="card-body">
                    <Card.Text class="card-text">
                        <p1 class="description-p1">{menuItem.description}</p1>
                        <p1 class="price-p1">{menuItem.price}</p1>
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
                <div id="menu-img-div">
                    <img id="menu-img" src="https://thepointsguy.global.ssl.fastly.net/uk/originals/2021/09/20210930_Mondrian-Shoreditch-Hotel-London-Accor_BSmithson-86.jpg" />
                </div>
                <h3>BreakFast</h3>
                <div id="box-menu-cards">
                    {}
                </div>
                <h3>Lunch</h3>
                <div id="menu-card">
                    {}
                </div>
                <h3>Drinks</h3>
                <h4>Coffee</h4>
                <div id="menu-card">
                    { menuCoffeeCards }
                </div>
                <h4>Tea</h4>
                <div id="menu-card">
                    { menuTeaCards }
                </div>
                <h3>Desserts</h3>
                <div id="menu-card">
                    {}
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

export default MenuPage