import React, { useEffect, useState } from "react"
import { cartIndex } from "../api/cart"
import { Card } from 'react-bootstrap'
import '../components/menuPage.css'
import './cart.css'
import { useNavigate } from "react-router-dom"
import apiUrl from '../apiConfig'

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
            <h1>Cart Page</h1>
            <button onClick={()=> {navigate(-1)}}>continue shopping</button>
            <div>
                {cartCards}
            </div>
        </>
    )
}

export default Cart