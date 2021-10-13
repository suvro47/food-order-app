
import React, { useState, useEffect } from 'react'
import CartActionButton from '../Cart/CartActionButton'
import MenuIcon from "@material-ui/icons/Menu"
import MenuModal from '../Modal/MenuModal';
import useWindowSize from '../Menu/useWindowSize';

import './Navbar.css';

export default function Navbar() {

    const [show, setShow] = useState(false);
    const [height, width] = useWindowSize();

    console.log("outside of effect" + height + " " + width);

    // useEffect(() => {
    //     if (show) {
    //         document.body.style.overflow = 'hidden';
    //     }
    //     return () => {
    //         document.body.style.overflow = 'unset';
    //     };
    // }, [show]);

    const openMenu = () => {
        setShow(true);
    }

    return (
        <>
            <div className="header">
                <div className="header-left">
                    <div className="hamburger" onClick={openMenu} >
                        <MenuIcon />
                    </div>

                    <div>
                        <h2 data-text="eFood.com"> eFood.com </h2>
                    </div>
                </div>

                <div className="header-right">
                    <div className="nav-menu">
                        <ul className="nav-menu__list">
                            <li className="item contact"> Contact </li>
                            <li className="item menus"> Menus </li>
                            <li className="item get-started"> Get Started </li>
                        </ul>
                    </div>
                    <div className="cart-action-btn">
                        <CartActionButton />
                    </div>
                </div>
            </div>
            <div className="menu-modal">
                <MenuModal show={show} setShow={setShow} />
            </div>
        </>
    );
}
