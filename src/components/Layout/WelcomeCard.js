

import React from 'react'

import "./WelcomeCard.css"

export default function WelcomeCard() {
    return (
        <div className="welcomeCard">
            <div className="welcomeCard-title">
                Delicious Food , Delivered To You
            </div>
            <div className="welcomeCard-descrtiption">
                Would you like millions of new customers to enjoy your amazing food and groceries ? So would we !
            </div>
            <div className="welcomeCard-descrtiption__two">
                It's simple : we list your menu and product lists online, help you process orders, pick them up, and deliver them to hungry pandas – in a heartbeat !
                Interested ? Let's start our partnership today !
            </div>
        </div>
    )
}
