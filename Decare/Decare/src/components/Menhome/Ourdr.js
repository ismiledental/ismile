import React from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";


function Ourdr() {
  const data = [
    {
      id: 1,
      img: "assets/img/team/team01.png",
      name: "Dr. Priyadarshini Sahoo ",
      hospital: "SHREE HOSPITAL ",
    },
    {
      id: 2,
      img: "assets/img/team/team02.png",
      name: "Dr.Jugajyoti Pathi",
      hospital: "KIIMS HOSPITALL",
    },
    {
      id: 3,
      img: "assets/img/team/team03.png",
      name: "Dr. Neha  Mohanty",
      hospital: "CARE HOSPITAL",
    },
    {
      id: 4,
      img: "assets/img/team/team04.png",
      name: "Dr. Sauvik  Singha",
      hospital: "CARE HOSPITAL",
    },
    {
      id: 5,
      img: "assets/img/team/team05.png",
      name: "Dr. Kshitij Aggarwal",
      hospital: "CONSULTANT IMPLANTOLOGIST",
    },
    {
      id: 6,
      img: "assets/img/team/team06.png",
      name: "Dr. Pooja Choudhary",
      hospital: "VISITING CONSULTANT",
    },
    {
      id: 7,
      img: "assets/img/team/team07.png",
      name: "Dr. Sonali Srivastava",
      hospital: "CONSULTANT ORAL DIAGNOSIS",
    },
    {
      id: 8,
      img: "assets/img/team/team08.png",
      name: "Dr. Anupam Hens",
      hospital: "VISITING CONSULTANT",
    },
  ];
  const satting = {
    dots: true,
    infinite: true,
    arrows: false,
    prevArrow:
      '<button type="button" className="slick-prev"><i className="far fa-chevron-left"></i></button>',
    nextArrow:
      '<button type="button" className="slick-next"><i className="far fa-chevron-right"></i></button>',
    speed: 1000,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
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
      <section className="team-area2 fix p-relative pt-105 pb-80">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 p-relative">
              <div
                className="section-title center-align mb-50 text-center wow fadeInDown animated"
                data-animation="fadeInDown"
                data-delay=".4s"
              >
                <h5>Our Doctor</h5>
                <h2>Best Expert Dentist</h2>
              </div>
            </div>
          </div>
          <Slider className="row team-active" {...satting}>
            {data.map((item) => (
              <div className="col-xl-4" key={item.id}>
                <div className="single-team mb-40">
                  <div className="team-thumb">
                    <div className="brd">
                      <img src={item.img} alt="img" />
                    </div>
                  </div>
                  <div className="team-info">
                    <h4>
                      <Link to="team-single.html">{item.name}</Link>
                    </h4>
                    <p>{item.hospital}</p>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </section>
    </>
  );
}

export default Ourdr;
