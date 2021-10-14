
import Modal from "react-modal";
import './MenuModal.css'

import React from 'react'

const customStyles = {

    overlay: {
        position: 'fixed',
        // backgroundColor: 'inherit',
        top: '64px',
        right: 0,
        bottom: 0,
        zIndex: 1000,
        overflow: 'hidden', /* this attribue is not working */
    },

    content: {
        position: "fixed",
        top: "0",
        left: "0",
        width: "100%",
        height: "120px",
        padding: "-10px",
        paddingTop: "10px",
        backgroundColor: "#e6eff0",
        fontWeight: "700",
        border: "none",
        borderRadius: "0px",
    },
};

export default function MenuModal({ show, setShow }) {

    return (

        <Modal
            isOpen={show}
            ariaHideApp={false}
            onRequestClose={() => setShow(false)}
            style={customStyles}
            htmlOpenClassName='overflow-hidden'
        >
            <div className="menu-bar">
                <div className=""> Home </div>
                <div className="line"> </div>
                <div className=""> Contact Us </div>
                <div className="line"> </div>
                <div className=""> Get Started </div>
            </div>
        </Modal>

    );

}

