import React from 'react'
import Logo from '../../assets/img/logo/f_logo.png'
import { Link } from 'react-router-dom'

function Main() {
  return (
    <>
        <footer className="footer-bg footer-p pt-90" style={{ backgroundColor: "#00173c" }}>
                <div className="footer-top pb-70">
                    <div className="container">
                        <div className="row justify-content-between">
                            <div className="col-xl-4 col-lg-4 col-sm-6">
                            <div className="footer-widget mb-30">
                                <div className="f-widget-title">
                                <h2>
                                    <img src={Logo} alt="logo" />
                                </h2>
                                <p>"Smile with i-Smile"</p>
                                </div>
                                <div className="footer-link">
                                <p>
                                We strongly believe that we aren’t treating just a set of teeth but a complete person who has her own personality, priorities and expectations. With this objective in mind, we partner with our patients in devising an optimum treatment
                                plan designed to achieve form, function and aesthetics with maximum value for your time and money.
                                </p>
                                <div className="f-contact">
                                    <ul>
                                    <li>
                                        <i className="icon fal fa-clock" />
                                        <span>
                                        Monday - Saturday:
                                        <br />10:00am-1:00pm                                                                             
                                        </span>
                                        <br />
                                        <i className="icon fal fa-clock" />
                                        <span>
                                        Monday - Saturday:
                                        <br />4:30-8:30pm                                                                              
                                        </span>
                                        <br />
                                        <i className="icon fal fa-clock" />
                                        <span>
                                        Sunday:
                                        <br />
                                        10:00am-1:00pm
                                        </span>
                                    </li>
                                    </ul>
                                </div>
                                </div>
                            </div>
                            </div>
                            <div className="col-xl-2 col-lg-2 col-sm-6">
                            <div className="footer-widget mb-30">
                                <div className="f-widget-title">
                                <h2>Other Links</h2>
                                </div>
                                <div className="footer-link">
                                <ul>
                                    <li>
                                    <Link to="/"> Home</Link>
                                    </li>
                                    <li>
                                    <Link to="/about">About Us</Link>
                                    </li>
                                    <li>
                                    <Link to="/service">Services</Link>
                                    </li>
                                    <li>
                                    <Link to="/gallery"> Gallery</Link>
                                    </li>
                                    <li>
                                    <Link to="/team">Our Team</Link>
                                    </li>
                                    <li>
                                    <Link to="/blog">Latest Blog</Link>
                                    </li>
                                </ul>
                                </div>
                            </div>
                            </div>
                            <div className="col-xl-2 col-lg-2 col-sm-6">
                            <div className="footer-widget mb-30">
                                <div className="f-widget-title">
                                <h2>Our Services</h2>
                                </div>
                                <div className="footer-link">
                                <ul>
                                    <li>
                                    <Link to="/service"> Root Canal</Link>
                                    </li>
                                    <li>
                                    <Link to="/service"> Alignment Teeth</Link>
                                    </li>
                                    <li>
                                    <Link to="/service"> Cosmetic Teeth</Link>
                                    </li>
                                    <li>
                                    <Link to="/service"> Oral Hygiene</Link>
                                    </li>
                                    <li>
                                    <Link to="/service"> Dental Implants</Link>
                                    </li>
                                    <li>
                                    <Link to="/service"> Cavity Inspection</Link>
                                    </li>
                                </ul>
                                </div>
                            </div>
                            </div>
                            <div className="col-xl-3 col-lg-3 col-sm-6">
                            <div className="footer-widget mb-30">
                                <div className="f-widget-title">
                                <h2>Contact Us</h2>
                                </div>
                                <div className="f-contact">
                                <ul>
                                    <li>
                                    <i className="icon fal fa-map-marker-check" />
                                    <span>
                                        Samantarapur
                                    </span>
                                    </li>
                                    <li>
                                    <i className="icon fal fa-map-marker-check" />
                                    <span>
                                    Bomikhal
                                    </span>
                                    </li>
                                    <li>
                                    <i className="icon fal fa-map-marker-check" />
                                    <span>
                                    Mancheswar
                                    </span>
                                    </li>
                                    <li>
                                    <i className="icon fal fa-map-marker-check" />
                                    <span>
                                    Chandrasekharpur
                                    </span>
                                    </li>
                                    <li>
                                    <a href="tel:+91-8770803211"><i className="icon fal fa-phone" /></a>
                                    <a href="tel:+91-8770803211">
                                    <span>
                                    87708-03211
                                        <br />
                                    78480-03211
                                    </span>
                                    </a>
                                    </li>
                                    
                                    <li>
                                    <i className="icon fal fa-envelope" />
                                    <span>
                                        <br />
                                    <a href="mailto:write2ismile@gmail.com">write2ismile@gmail.com</a>  
                                    </span>
                                    </li>
                                </ul>
                                </div>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="copyright-wrap">
                    <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-4">
                        <div className="copy-text">
                            Copyright ©2024 i-smile dental clinic.<br/> All rights reserved.
                        </div>
                        </div>
                        <div className="col-lg-4"></div>
                        <div className="col-lg-4">
                        <div className="footer-social">
                            <a href='https://www.facebook.com/write2ismile/'  target="_blank" rel="noopener noreferrer">
                                <i className="fab fa-facebook-f" />
                            </a>
                            <a href="https://www.instagram.com/ismiledent/" target='_blank'><i className="fab fa-instagram" /></a>
                            
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
        </footer>

    </>
  )
}

export default Main