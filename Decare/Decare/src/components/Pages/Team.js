import React from "react";
import { Link } from "react-router-dom";

function Team() {
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
  return (
    <>
      <section className="team-area fix p-relative pt-120 pb-90">
        <div className="container">
          <div className="row">
            {data.map((item) => (
              <div className="col-xl-3" key={item.id}>
                <div className="single-team mb-45">
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
          </div>
        </div>
      </section>
    </>
  );
}

export default Team;
