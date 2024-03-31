import React from "react";
import Featuresservices from "../../assets/img/features/services-img-details2.png";
import FeaturesservicesTwo from "../../assets/img/features/about_img.png";
import { Link } from "react-router-dom";

function Ourservices() {
  const data = [
    {
      id: 1,
      name: "Root Canal",
      img: "assets/img/icon/fe-icon01.png",
    },
    {
      id: 2,
      name: "Dental Implants",
      img: "assets/img/icon/fe-icon04.png",
    },
    {
      id: 3,
      name: "Tooth Filling",
      img: "assets/img/icon/fe-icon07.png",
    },
  ];
  const dataone = [
    {
      id: 4,
      name: "Dental X-ray",
      img: "assets/img/icon/fe-icon06.png",
    },
    {
      id: 5,
      name: "Oral Surgery",
      img: "assets/img/icon/fe-icon05.png",
    },
    {
      id: 6,
      name: "Veneer & Crown",
      img: "assets/img/icon/fe-icon08.png",
    },
  ];
  return (
    <>
      <section id="service-details2" className="service-details-two pt-120 pb-105 p-relative">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-12">
              <div className="section-title center-align mb-50 text-center">
                <h5>Our Services</h5>
                <h2>What We Provide</h2>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="about-content s-about-content">
                <ul className="sr-tw-ul text-right">
                  {data.map((item) => (
                    <li key={item.id}>
                      <div className="text">
                        <h4>{item.name}</h4>
                      </div>
                      <div className="icon-right">
                        <img src={item.img} alt="icon01" />
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="col-lg-4 col-md-12 col-sm-12 text-center d-none d-lg-block">
              <div className="sd-img">
                <img src={Featuresservices} alt="img" />
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="about-content s-about-content">
                <ul className="sr-tw-ul">
                  {dataone.map((item) => (
                    <li key={item.id}>
                      <div className="icon">
                        <img src={item.img} alt="icon01" />
                      </div>
                      <div className="text pt-10">
                        <h4>{item.name}</h4>
                        
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="about-area about-p pb-120 p-relative fix">
        <div className="container">
          <div className="row justify-content-center align-items-center">
            <div className="col-lg-6 col-md-12 col-sm-12">
              <div
                className="s-about-img p-relative  wow fadeInLeft animated"
                data-animation="fadeInLeft"
                data-delay=".4s"
              >
                <img src={FeaturesservicesTwo} alt="img" />
                <div className="about-text second-about">
                  <span>20</span>
                  <p>Years of Experience</p>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-12 col-sm-12">
              <div
                className="about-content s-about-content  wow fadeInRight  animated"
                data-animation="fadeInRight"
                data-delay=".4s"
              >
                <div className="about-title second-title pb-25">
                  <h5>About Us</h5>
                  <h2>We Care For Your Dental Health</h2>
                </div>
                <p>
                We sincerely believe that visiting a dentist shouldn’t be a frightening or stressful experience.
                 We provide an equally comfortable experience of relaxation for all our young and adult patients.
                 Everything we do is aimed at making you feel comfortable!
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
  );
}

export default Ourservices;
