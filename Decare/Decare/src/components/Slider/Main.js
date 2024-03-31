import React from 'react'
import SliderOne from '../../assets/img/slider/slider-img.png'
import SliderTwo from '../../assets/img/slider/banner-aliment-icon-1.png'
import { Link } from 'react-router-dom'



function Main() {
  return (
    <>
            <div className="modal fade bs-example-modal-lg search-bg popup1" tabIndex={-1} role="dialog" >
                <div className="modal-dialog modal-lg" role="document">
                <div className="modal-content search-popup">
                    <div className="text-center">
                    <Link to="#" className="close2" data-dismiss="modal" aria-label="Close" >
                        × close
                    </Link>
                    </div>
                    <div className="row search-outer">
                    <div className="col-md-11">
                        <input type="text" placeholder="Search for products..." />
                    </div>
                    <div className="col-md-1 text-right">
                        <Link to="#">
                        <i className="fa fa-search" aria-hidden="true" />
                        </Link>
                    </div>
                    </div>
                </div>
                </div>
            </div>

            <section id="home" className="slider-area fix p-relative">
                <div className="slider-active">
                <div className="single-slider slider-bg d-flex align-items-center" style={{backgroundImage: "url(img/slider/slider_bg.png)", backgroundSize: "cover"}}>
                   <div className="container">
                    <div className="row justify-content-center align-items-center">
                        <div className="col-lg-7 col-md-7" style={{ marginTop: "-115px" }}>
                        <div className="slider-content s-slider-content mt-20" >
                            <h5 data-animation="fadeInUp" data-delay=".4s">
                            Welcome To iSmile Dental Clinic
                            </h5>
                            <h2 data-animation="fadeInUp" data-delay=".4s">
                            We are the Best Dental Clinic
                            </h2>
                            <p data-animation="fadeInUp" data-delay=".6s">
                            i-SMILE DENTAL CLINIC – Laser & Implant Center provides state-of-the-art Dental services at par with international standards to the people of Bhubaneswar, Odisha.
                            </p>
                            <div className="subricbe" data-animation="fadeInDown" data-delay=".4s" >
                            <form action="tel:8770803211" method="post" className="contact-form" >
                                <button className="btn header-btn"><img src="" alt=""/><a href="tel:8770803211"></a> Call Now</button>
                            </form>
                            </div>    
                        </div>
                        </div>
                        <div className="col-lg-5 col-md-5 p-relative">
                        <div className="banner-img">
                            <img src={SliderOne} alt="banner" />
                        </div>

                        </div>
                    </div>
                   </div>
                </div>
                </div>
            </section>
    </>
  )
}

export default Main