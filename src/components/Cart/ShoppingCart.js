
import Modal from "react-modal";
import ReactDOM from 'react-dom';

import './ShoppingCart.css'

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
        top: "20%",
        left: "25%",
        width: "50%",
        height: "220px",
        backgroundColor: "#e6eff0",
    },
};

Modal.setAppElement('#root');

export default function ShoppingCart({ show, setShow }) {
    return (
        <Modal
            isOpen={show}
            ariaHideApp={false}
            onRequestClose={() => setShow(false)}
            style={customStyles}
        >
            <div className="cart-item">
                this is modal
            </div>
        </Modal>
    )
}
