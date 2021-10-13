

import React from 'react'

import './MenuItem.css'

export default function MenuItem(props) {

    const title = props.title;
    const description = props.description;
    const price = props.price;

    return (
        <>
            <div className="main-menu">
                <div className="menu">
                    <div className="menu-title"> {title} </div>
                    <div className="menu-description"> {description} </div>
                    <div className="menu-price" > $ {price} </div>
                </div>
                <div className="input">
                    <input className="input-field" type="number" />
                    <button className="input-btn" > Add </button>
                </div>
            </div>

            <div className="line"> </div>
        </>
    )
}
