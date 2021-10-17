

import React, { useState } from 'react'
import Badge from "@material-ui/core/Badge"
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart"
import ShoppingCart from "../Cart/ShoppingCart"


import './CartActionButton.css'

export default function CartActionButton() {

    const [show, setShow] = useState(false);

    const openShoppingCart = () => {
        setShow(true);
    }

    return (
        <>
            <button className="cart-btn" onClick={openShoppingCart}>
                <span className="cart-btn_item icon">
                    <Badge color="secondary">
                        <ShoppingCartIcon />
                    </Badge>
                </span>
                <span className="cart-btn_item description" > Your Cart </span>
                <span className="cart-btn_item quantity"> 4 </span>
            </button>

            <ShoppingCart show={show} setShow={setShow} />
        </>
    )
}
