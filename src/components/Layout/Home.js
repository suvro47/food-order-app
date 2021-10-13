
import React from 'react'
import WelcomeCard from './WelcomeCard';
import Menus from '../Menu/Menus';

import './Home.css'


export default function Home() {

    return (
        <div className="background-image">
            <WelcomeCard />
            <Menus />
        </div>
    );
}
