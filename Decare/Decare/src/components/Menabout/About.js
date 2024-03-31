import React from 'react'
import FeaturesservicesTwo from '../../assets/img/features/about_img.png'
import { Link } from 'react-router-dom'



function About() {
  return (
    <>
        <section className="about-area about-p pt-120 pb-120 p-relative fix">
            <div className="container">
                    <div className="row justify-content-center align-items-center">
                    <div className="col-lg-6 col-md-12 col-sm-12">
                        <div className="s-about-img p-relative  wow fadeInLeft animated" data-animation="fadeInLeft" data-delay=".4s" >
                        <img src={FeaturesservicesTwo} alt="img" />
                        <div className="about-text second-about">
                            <span>20</span>
                            <p>Years of Experience</p>
                        </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-12 col-sm-12">
                        <div className="about-content s-about-content  wow fadeInRight  animated"  data-animation="fadeInRight" data-delay=".4s" >
                        <div className="about-title second-title pb-25">
                            <h5>About Us</h5>
                            <h2>We Care For Your Dental Health</h2>
                        </div>
                        <p>
                        We sincerely believe that visiting a dentist shouldn’t be a frightening or stressful experience. We provide an equally comfortable experience of relaxation for all our young and adult patients. Everything we do is aimed at making you feel comfortable!
                        </p>
                        <div className="slider-btn mt-20">
                        <a href="tel:+91-8770803211" className="btn">Call Now</a>
                        </div>
                        </div>
                    </div>
                    </div>
            </div>
        </section>
    </>
  )
}

export default About