import React from 'react'
import MenuItem from "./MenuItem"

import './Menus.css'

const DUMMY_ITEMS = [
    {
        id: 1,
        title: "Hawaiian Breakfast",
        description: "Lorem ipsum dolor sit, consectetuer adipiscing.",
        price: "10",
    },
    {
        id: 2,
        title: "Spicy Thai Chicken Lunch",
        description: "Lorem ipsum dolor sit, consectetuer adipiscing.",
        price: "15",
    },
    {
        id: 3,
        title: "Sweet and Sour Beef Soup Lunch",
        description: "Lorem ipsum dolor sit, consectetuer adipiscing.",
        price: "20",
    },
    {
        id: 4,
        title: "Spicy Thai Chicken Dinner",
        description: "Lorem ipsum dolor sit, consectetuer adipiscing.",
        price: "30",
    }
]


export default function Menus() {

    const items = DUMMY_ITEMS;

    return (
        <div className="menu-container">

            {
                items.map(item => <MenuItem key={item.id} title={item.title} description={item.description} price={item.price} />)
            }

        </div>
    )
}
