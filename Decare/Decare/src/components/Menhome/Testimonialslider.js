import React from "react";
import TestimonialIconTwo from "../../assets/img/testimonial/qt-icon.png";
import Iconslider from "../../assets/img/icon/pr-icon1.png";
import IconSlidertwo from "../../assets/img/icon/pr-icon2.png";
import IconSliderthree from "../../assets/img/icon/pr-icon3.png";
import Slider from "react-slick";
import { Link } from "react-router-dom";


function Testimonialslider() {
  
  const data = [
    {
      id: 1,
      img: "assets/img/testimonial/testi_avatar.png",
      img2: "assets/img/testimonial/review-icon.png",
      name: "Kiran Dubasi",
      para: "One of the finest doctors with loads of precision. The diagnosis is praiseworthy. My aunt had been suffering from teeth issues since long and had visited so many other clinics but nobody could resolve it. But after consulting Dr. Neha, the teeth issue was resolved in 10 days. Thanks to her(i-smile dental clinic)."
    },
    {
      id: 2,
      img: "assets/img/testimonial/testi_avatar_02.png",
      img2: "assets/img/testimonial/review-icon.png",
      name: "Sitam Swain",
      para: "Amazing experience by the doctor and their services are too good ,i really appreciate . please try to visit in the smile dental clinic."
    },
    {
      id: 3,
      img: "assets/img/testimonial/testi_avatar_03.png",
      img2: "assets/img/testimonial/review-icon.png",
      name: "Jinamitra Sahu",
      para: "Very nice dental treatment is done in this clinic. All the staffs & dentists are very well behaved & very cooperative"
    },
    {
      id: 4,
      img: "assets/img/testimonial/testi_avatar_04.png",
      img2: "assets/img/testimonial/review-icon.png",
      name: "Kshitij Aggarwal",
      para: "Awsome clinic and polite drsahab strongly recommend. I got a bad crown from a nearby  dentist he was able to give back my smiling confidence again."
    },
    {
      id: 5,
      img: "assets/img/testimonial/testi_avatar_05.png",
      img2: "assets/img/testimonial/review-icon.png",
      name: "Dr. Sonali Shrivastava",
      para: "Best dental clinic i ever visited..the doctor is very genuine and gentle.A must visit clinic for all dental procedures."
    },
    {
      id: 6,
      img: "assets/img/testimonial/testi_avatar_06.png",
      img2: "assets/img/testimonial/review-icon.png",
      name: "kesav rathi",
      para: "Wonderful experience and quality treatment with proper guidance and limited medication. Treatment was done during covid time and I m very much satisfied.."
    },
  ];

  let satting = {
    dots: true,
    infinite: true,
    arrows: false,
    speed: 1000,
    slidesToShow: 2,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <section className="testimonial-area pb-115 p-relative fix" style={{ backgroundColor: "#ffffff" }}>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div
                className="section-title text-center mb-50 wow fadeInDown animated"
                data-animation="fadeInDown"
                data-delay=".4s"
              >
                <h5>Testimonial</h5>
                <h2>What Our Patients Says</h2>
              </div>
            </div>
            <div className="col-lg-12">
              <Slider className="testimonial-active" {...satting}>
                {data.map((item) => (
                  <div className="single-testimonial" key={item.id}>
                    <div className="testi-author">
                      <img src={item.img} alt="img" />
                    </div>
                    <div className="review mb-30">
                      <img src={item.img2} alt="img" />
                    </div>
                    <p>
                      {item.para}
                    </p>
                    <div className="ta-info">
                      <h6>{item.name}</h6>
                    </div>
                    <div className="qt-img">
                      <img src={TestimonialIconTwo} alt="img" />
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </div>
      </section> 
    </>
  );
}

export default Testimonialslider;
