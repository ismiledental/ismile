import React from 'react'
import Bssingle from '../../assets/img/blog/inner_b1.jpg'
import bgsingleOne from '../../assets/img/blog/inner_b2.jpg'
import Bloginnertwo from '../../assets/img/blog/inner_b3.jpg'
import Slider from "react-slick";
import { Link } from 'react-router-dom';


function Second() {
  return (
    <>
       <div  className="bsingle__post mb-50">
            <Slider  className="bsingle__post-thumb blog-active" >
                <div className="slide-post">
                <img src={Bloginnertwo} alt="" />
                </div>
                <div className="slide-post">
                <img src={bgsingleOne} alt="" />
                </div>
                <div className="slide-post">
                <img src={Bssingle} alt="" />
                </div>
            </Slider>
            <div  className="bsingle__content">
            
                <h2>
                <Link to="/blogdetails">
                    Understanding Why Dental Health is Essential
                </Link>
                </h2>
                <p>
                Maintaining optimal dental health is not merely about achieving a sparkling smile; it is fundamental to our overall well-being.
                 Dental health encompasses far more than just cavity prevention; it impacts our ability to eat comfortably, communicate effectively, 
                 and maintain confidence in our appearance. Neglecting dental care can lead to a host of oral health issues, including gum disease,
                  tooth decay, and even systemic health concerns like heart disease and diabetes. Therefore, 
                  recognizing the significance of dentalhealth is crucial for fostering a healthier, happier life.
                 Let's delve into the myriad reasons why prioritizing dental health is non-negotiable in our quest for overall wellness.
                </p>
                <div className="blog__btn">
                    <a href="tel:+91-8770803211" className="btn">Call Now</a>
                    </div>
            </div>
        </div>
    </>
  )
}

export default Second