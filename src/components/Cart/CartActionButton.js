

import React from 'react'
import Badge from "@material-ui/core/Badge"
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart"


import './CartActionButton.css'

export default function CartActionButton() {
    return (
        <button className="cart-btn">
            <span className="cart-btn_item icon">
                <Badge color="secondary">
                    <ShoppingCartIcon />
                </Badge>
            </span>
            <span className="cart-btn_item description" > Your Cart </span>
            <span className="cart-btn_item quantity"> 4 </span>
        </button>
    )
}
