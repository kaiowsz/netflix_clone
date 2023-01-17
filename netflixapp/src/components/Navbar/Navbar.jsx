import React, { useState } from 'react'
import { useEffect } from 'react';
import "./Navbar.scss"

function Navbar() {

    const [show, setShow] = useState(false)

    function transitionNavbar() {
        if(window.scrollY > 100) {
            setShow(true);
        } else {
            setShow(false);
        }
    }

    useEffect(() => {
        window.addEventListener("scroll", transitionNavbar)
        return () => window.removeEventListener("scroll", transitionNavbar)
    }, [])

    return (
    <div className={`nav ${show && 'nav-black'}`}>
        <div className="nav-content">
            <img className='nav-logo' src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png" alt="" />

            <img className='nav-avatar' src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt="" />
        </div>
    </div>
    )
}

export default Navbar