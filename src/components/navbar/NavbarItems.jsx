import React, { useContext, useState } from 'react'
import { Link, NavLink } from 'react-router-dom';
import logo from "../../assets/images/logo/logo.png"
import { AuthContext } from '../../contexts/AuthProvider';

const NavbarItems = () => {
    const [menuToggle, setMenuToggle] = useState(false);
    const [socialToggle, setSocialToggle] = useState(false);
    const [headerFixed, setHeaderFixed] = useState(false);


    //authInfo
    const {user}=useContext(AuthContext);
    console.log(user);

    //addeventlistener
    window.addEventListener("scroll", () => {
        if (window.scroll > 200) {
            setHeaderFixed(true);
        }
        else {
            setHeaderFixed(false);
        }
    })

    return (
        <header className={`header-section style-4 ${headerFixed ? "header-fixed fadeInUp" : ""}`}>
            {/* header top starts from here */}
            <div className={`header-top d-md-none ${socialToggle ? "open" : ""}`}>
                <div className="container">
                    <div className="header-top-area">
                    <Link to="/sign-up" className='lab-btn me-3'><span>Create Account</span></Link>
                     <Link to="/login">Log in</Link>
                    </div>
                </div>
            </div>

            {/* header bottom */}
            <div className="header-bottom">
                <div className="container">
                    <div className="header-wrapper">
                        {/* logo */}
                        <div className='logo-search-acte'>
                            <div className="logo">
                            <Link to={"/"} >
                                <img src={logo} alt="" />
                            </Link>
                            </div>
                        </div>

                        {/* menu area */}
                        <div className="menu-area">
                            <div className="menu">
                                <ul className={`lab-ul ${menuToggle ? " active" : ""}`}>
                                    <li><NavLink to="/">Home</NavLink></li>
                                    <li><NavLink to="/shop">Shop</NavLink></li>
                                    <li><NavLink to="/blog">Blog</NavLink></li>
                                </ul>

                            </div>
                            {/* sign in & log in  */}
                            <Link to="/sign-up" className='lab-btn me-3 d-none d-md-block'><span>Create Account</span></Link>
                            <Link to="/login" className='d-none d-md-block'>Log In</Link>


                            {/*menu toggler  */}
                            <div onClick={()=>setMenuToggle(!menuToggle)} className={`header-bar d-lg-none ${menuToggle ? " active" : ""}`}>
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>

                            {/* social toggler */}
                            <div className='ellepsis-bar d-md-none' onClick={()=>setSocialToggle(!socialToggle)}>
                               <i className='icofont-info-square'></i> 
                            </div>

                        </div>

                    </div>
                </div>
            </div>
        </header>
    )
}

export default NavbarItems