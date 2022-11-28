import React, { useEffect, useState } from "react"
import { cartIndex } from "../api/cart"
import { Card } from 'react-bootstrap'
import '../components/menuPage.css'

const Cart = ({msgAlert}) => {
    const [allCart, setAllCart] = useState([])

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

    const cartCards = allCart.map((Item, i) => (
        <Card id="card" key={ Item.id } style={{ margin: 10 }}>
            <Card.Header id="card-header">{ Item.item }</Card.Header>
            <Card.Body class="card-body">
                <Card.Text class="card-text">
                    <p1 class="description-p1">{Item.name}</p1>
                    <p1 class="price-p1">{Item.price}</p1>
                </Card.Text>
            </Card.Body>
        </Card>
    ))

    return (
        <>
            <h1>Cart Page</h1>
            <div>
                {cartCards}
            </div>
        </>
    )
}

export default Cart