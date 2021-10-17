

import React from 'react'

import './CartItem.css'

export default function CartItem(props) {

    const title = "Sushi";
    const price = 15;
    const quantity = 3;

    return (
        <div className="cart">

            <div className="cart-left">
                <div className="cart-left__title"> {title} </div>
                <div className="cart_left__price__quantity">
                    <div className="cart_left__price"> {price} </div>
                    <div className="cart_left__quantity"> {quantity} </div>
                </div>
            </div>

            <div className="cart-right">
                <button className="cart-right__inc_btn"> </button>
                <button className="cart-right__dec_btn"> </button>
            </div>

        </div>
    )
}
