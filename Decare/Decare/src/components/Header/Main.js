import React, { useState } from 'react'
import Logo from '../../assets/img/logo/logo.png'
import { Link } from 'react-router-dom'


function Main() {

    const [mobile, setmobile] = useState(false);
    const [home, setHome] = useState(false);
    const [Services, setServices] = useState(false)
    const [Pages, setPages] = useState(false)
    const [Blog, setBlog] = useState(false)

    return (
        <>
            <header className="header-area header-three">
                <div className="header-top second-header d-none d-md-block" >
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-8 col-md-8 d-none d-lg-block">
                                <div className="header-cta">
                                    <ul>
                                        <li>
                                            <i className="icon fal fa-envelope" />
                                            <span>write2ismile@gmail.com</span>
                                        </li>
                                        <li>
                                            <i className="icon fal fa-phone" />
                                            <span>+91-8770803211</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-4 d-none d-lg-block text-right">
                                <div className="header-social">
                                    <span>
                                        <Link to='https://www.facebook.com/write2ismile/' title="Facebook">
                                            <i className="fab fa-facebook-f" />
                                        </Link>
                                        
                                        <Link to='https://www.youtube.com/' title="Twitter">
                                            <i className="fab fa-youtube" />
                                        </Link>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div id="header-sticky" className="menu-area sticky-menu" style={{ backgroundColor: "white" }}>
                    <div className="container">
                        <div className="second-menu">
                            <div className="row align-items-center">
                                <div className="col-xl-2 col-lg-2">
                                    <div className="logo">
                                        <Link to="/">
                                            <img src={Logo} alt="logo" />
                                        </Link>
                                    </div>
                                </div>
                                <div className="col-xl-7 col-lg-7">
                                    <div className="main-menu text-right text-xl-right">
                                        <nav id="mobile-menu">
                                            <ul>
                                                <li className="has-sub">
                                                    <Link to="/">Home</Link>
                                                </li>
                                                <li>
                                                    <Link to="/about">About Us</Link>
                                                </li>
                                                <li className="has-sub">
                                                    <Link to="/service">Services</Link>
                                                    <ul>
                                                        <li>
                                                            <Link to="/service"> Root Canal</Link>
                                                        </li>
                                                        <li>
                                                            <Link to="/service">Dental Implants</Link>
                                                        </li>
                                                        <li>
                                                            <Link to="/service"> Tooth Filling</Link>
                                                        </li>
                                                        <li>
                                                            <Link to="/service">Dental X-ray</Link>
                                                        </li>
                                                        <li>
                                                            <Link to="/service">Veneer & Crown</Link>
                                                        </li>
                                                        <li>
                                                            <Link to="/service">Cavity Inspection</Link>
                                                        </li>
                                                        <li>
                                                            <Link to="/service">Services</Link>
                                                        </li>
                                                    </ul>
                                                </li>
                                                <li className="has-sub">
                                                    <Link to="#">Pages</Link>
                                                    <ul>
                                                        <li>
                                                            <Link to="/gallery">Gallery</Link>
                                                        </li>
                                                        <li>
                                                            <Link to="/faq">FAQ`s</Link>
                                                        </li>
                                                        <li>
                                                            <Link to="/team">Team</Link>
                                                        </li>
                                                    </ul>
                                                </li>
                                                <li className="has-sub">
                                                    <Link to="/blog">Blog</Link>
                                                </li>
                                                <li>
                                                    <Link to="/contact">Contact</Link>
                                                </li>
                                            </ul>
                                        </nav>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-3 text-right d-none d-lg-block mt-25 mb-25 text-right text-xl-right">
                                    <div className="login">
                                        <ul>
                                            <li>
                                                <div className="second-header-btn">
                                                <a href="tel:+91-8770803211" className="btn">Make A Quick Call</a>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div className="mobile-menu mean-container">
                                        <div className="mean-bar">
                                            <Link to="#" onClick={() => setmobile(!mobile)} className={`meanmenu-reveal ${mobile && "meanclose"}`} style={{ right: "0px", left: "auto", textAlign: "center", textIndent: "0px", fontSize: "18px" }}>
                                                {mobile ? "X" : <span><span><span></span></span></span>}
                                            </Link>
                                            {mobile &&
                                                <nav className="mean-nav">
                                                    <ul style={{ display: "block" }}>
                                                    <li>
                                                            <Link to="/">Home</Link>
                                                        </li>
                                                        <li>
                                                            <Link to="/about">About Us</Link>
                                                        </li>
                                                        <li className="has-sub">
                                                            <Link to="/services">Services</Link>
                                                            {Services &&
                                                            <ul style={{ display: "block" }}>
                                                                <li>
                                                                    <Link to="/service"> Root Canal</Link>
                                                                </li>
                                                                <li>
                                                                    <Link to="/service">Dental Implants</Link>
                                                                </li>
                                                                <li>
                                                                    <Link to="/service"> Tooth Filling</Link>
                                                                </li>
                                                                <li>
                                                                    <Link to="/service">Dental X-ray</Link>
                                                                </li>
                                                                <li>
                                                                    <Link to="/service">Oral Surger</Link>
                                                                </li>
                                                                <li>
                                                                    <Link to="/service">Veneer & Crown</Link>
                                                                </li>
                                                                <li>
                                                                    <Link to="/service">Services</Link>
                                                                </li>
                                                            </ul>  
                                                            }
                                                            <Link className={`mean-expand ${mobile && "mean-clicked"}`} to="#" onClick={() => { setServices(!Services) }} style={{ fontSize: 18 }}>
                                                            {Services ? "-" : "+"}
                                                            </Link>
                                                        </li>
                                                        <li className="has-sub">
                                                            <Link to="#">Pages</Link>
                                                            {Pages && 
                                                            <ul style={{ display: "block" }}>
                                                                <li>
                                                                    <Link to="/gallery">Gallery</Link>
                                                                </li>
                                                                
                                                                <li>
                                                                    <Link to="/faql">Faq</Link>
                                                                </li>
                                                                <li>
                                                                    <Link to="/team">Team</Link>
                                                                </li>
                                                                
                                                            </ul>
                                                            }
                                                            <Link className={`mean-expand ${Pages && "mean-clicked"}`} to="#" style={{ fontSize: 18 }} onClick={() => { setPages(!Pages) }}>
                                                            {Pages ? "-" : "+"}
                                                            </Link>
                                                        </li>
                                                        <li className="mean-last">
                                                            <Link to="/blog">Blog</Link>
                                                        </li>
                                                        <li className="mean-last">
                                                            <Link to="/contact">Contact</Link>
                                                        </li>
                                                    </ul>
                                                </nav>
                                            }
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Main