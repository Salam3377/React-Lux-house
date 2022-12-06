import React, { useEffect, useState } from "react"
import { cartIndex } from "../api/cart"
import { Card } from 'react-bootstrap'
import '../components/menuPage.css'
import './cart.css'
import { useNavigate } from "react-router-dom"
import apiUrl from '../apiConfig'
import logo from '../logo.png';

const Cart = ({msgAlert}) => {
    const [allCart, setAllCart] = useState([])
    const navigate = useNavigate()

    useEffect(() => {
        cartIndex()
        .then(res => {
            setAllCart(res.data.cart)
        })
        .catch((error) => {
            msgAlert({
                heading: 'Failure',
                message: 'Index Cart Failure' + error,
                variant: 'danger'
            })
        })
    }, [])

    const cartCards = allCart.map((item, i) => (
        <Card id="card" key={ item.id } style={{ margin: 10 }}>
            <Card.Header id="card-header">{ item.name }</Card.Header>
            <Card.Body class="card-body">
                <Card.Text class="card-text">
                    <p1 class="description-p1">{item.description}</p1>
                    <p1 class="price-p1">{item.price}</p1>
                    <img id="menu-cart-img" src={`${apiUrl}${item.image}`} />
                    {/* <img id="menu-cart-img" src={ require(`../breakfastImages/img${i}.jpg`).default } /> */}
                </Card.Text>
            </Card.Body>
        </Card>
    ))
        console.log(cartCards, 'cart items here')
    return (
        <>
            <div id="cart-body-div">
                <div id="cart-header">
                    <button id="continue-shopping-btn" onClick={()=> {navigate(-1)}}><i class="arrow left"></i> Continue shopping</button>
                    <img id='cart-logo-img' src={logo} alt="logo" />
                </div>
                <div id="cart-status">
                    <h1>Your Cart</h1>
                </div>
                <div id="cart-box-div">
                    <div id="cart-items-div">
                        {cartCards}
                    </div>
                    {/* <div id="cart-payment-info"></div> */}
                </div>
            </div>
        </>
    )
}

export default Cart