import React from "react";
import { Link } from "react-router-dom";
import Iframe from 'react-iframe'

function Blog() {
  const data = [
    {
      id: 1,
      name: "Yellow teeth",
      img: "assets/img/blog/inner_b1.jpg",
      date: "23th December 2023",
    },
    {
      id: 2,
      name: "Benefits Of Dental Sealants",
      img: "assets/img/blog/inner_b2.jpg",
      date: "25th December 2023",
    },
    {
      id: 3,
      name: "4 Causes of teeth Decay",
      img: "assets/img/blog/inner_b3.jpg",
      date: "28th December 2023",
    },
  ];
  return (
    <>
      <section id="blog" className="blog-area p-relative fix pt-90 pb-90">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-12">
              <div className="section-title center-align mb-50 text-center wow fadeInDown animated"
                data-animation="fadeInDown"
                data-delay=".4s">
                <h5>Blog</h5>
                <h2>Our Blog</h2>
              </div>
            </div>
          </div>
          <div className="row">
            {data.map((item) => (
              <div className="col-lg-4 col-md-6" key={item.id}>
                <div
                  className="single-post2 hover-zoomin mb-30 wow fadeInUp animated"
                  data-animation="fadeInUp"
                  data-delay=".4s"
                >
                  <div className="blog-thumb2">
                    <Link to="/blog">
                      <img src={item.img} alt="img" />
                    </Link>
                  </div>
                  <div className="blog-content2">
                    <div className="date-home">
                      <i className="fal fa-calendar-alt" /> {item.date}
                    </div>
                    <h4>
                      <Link to="/blog">{item.name}</Link>
                    </h4>
                    <div className="blog-btn">
                      <a href="tel:8770803211">Call Now</a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </section>
      <section id="blog" className="blog-area p-relative fix pt-90 pb-90">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-12">
              <div className="section-title center-align mb-50 text-center wow fadeInDown animated"
                data-animation="fadeInDown"
                data-delay=".4s">
                <h5>Location</h5>
                <h2>Our Clinic Locations</h2>
              </div>
            </div>
          </div>
          <div className="row">
              <div className="col-lg-4 col-md-6">
                <div
                  className="single-post2 hover-zoomin mb-30 wow fadeInUp animated"
                  data-animation="fadeInUp"
                  data-delay=".4s"
                >
                  <div className="blog-thumb2">
                  <Iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3743.7217625033268!2d85.83831837477577!3d20.228879914771287!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a19a743fb769a63%3A0x4d224973e2fbb730!2si%20-%20SMILE%20DENTAL%20CLINIC!5e0!3m2!1sen!2sin!4v1697556631526!5m2!1sen!2sin" 
                           width={600}
                           height={450} 
                           style={{ border : "0" }}
                          loading="first">
                    </Iframe>
                  </div>
                  <div className="blog-content2">
                    <h4>
                    <a href="https://g.co/kgs/r5FpE9f" target='_blank'>Samantarapur</a>
                    </h4>
                    <p>
                      Ground Floor , Gadachandi Construction Pvt Ltd, Plot - 128, Lewis Rd, Samantarapur, Old Town, Bhubaneswar, Odisha 751002
                    </p>
                    <div className="blog-btn">
                    <a href="tel:8770803211">Call Now</a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div
                  className="single-post2 hover-zoomin mb-30 wow fadeInUp animated"
                  data-animation="fadeInUp"
                  data-delay=".4s"
                >
                  <div className="blog-thumb2">
                  <Iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2225.278150990586!2d85.85398242923574!3d20.281349218116627!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a19a0a9db119c97%3A0x690cfb02874abf1f!2sLATH%20ENT%20AND%20DENTAL%20CENTRE!5e0!3m2!1sen!2sin!4v1704007349450!5m2!1sen!2sin" 
                           width={600}
                           height={450} 
                           style={{ border : "0" }}
                          loading="first">
                    </Iframe>
                  </div>
                  <div className="blog-content2">
                    <h4>
                      <Link to="/blog">Bomikhal</Link>
                    </h4>
                    <p>
                      Near Ekamra Talkies, Plot No. 627, Cuttack Road, Bomikhal, Bhubaneswar, Odisha 751006
                    </p>
                    <div className="blog-btn">
                    <a href="tel:8770803211">Call Now</a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div
                  className="single-post2 hover-zoomin mb-30 wow fadeInUp animated"
                  data-animation="fadeInUp"
                  data-delay=".4s"
                >
                  <div className="blog-thumb2">
                  <Iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3741.2944105745073!2d85.83856097477828!3d20.32945271143051!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a19094b4deea141%3A0xd23e49526552ba70!2si%20-%20SMILE%20DENTAL%20CLINIC!5e0!3m2!1sen!2sin!4v1697556697864!5m2!1sen!2sin" 
                           width={600}
                           height={450} 
                           style={{ border : "0" }}
                          loading="first">
                    </Iframe>
                  </div>
                  <div className="blog-content2">
                    <h4>
                    <a href="https://g.co/kgs/chu2RbD" target='_blank'>Mancheswar</a>
                    </h4>
                    <p>
                      DHPL Sahoo Commercial Complex, Mancheswar Station Rd, Rangamatia, Mancheswar, Bhubaneswar, Odisha 751017
                    </p>
                    <div className="blog-btn">
                    <a href="tel:8770803211">Call Now</a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div
                  className="single-post2 hover-zoomin mb-30 wow fadeInUp animated"
                  data-animation="fadeInUp" 
                  data-delay=".4s"
                >
                  <div className="blog-thumb2">
                  <Iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d661.4076793033156!2d85.81263247754478!3d20.3214971033708!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a190909f29f075d%3A0xd3b1c0dc055f67c4!2sCARE%20Hospitals!5e0!3m2!1sen!2sin!4v1704006510207!5m2!1sen!2sin"
                           width={600}
                           height={450} 
                           style={{ border : "0" }}
                          loading="first">
                    </Iframe>
                  </div>
                  <div className="blog-content2">
                    <h4>
                      <Link to="/blog">Chandrasekharpur</Link>
                    </h4>
                    <p>
                      Care Hospital, Unit No.42 Plot, No. 324, Prachi Enclave Rd, Rail Vihar, Chandrasekharpur, Bhubaneswar, Odisha 751016<br />
                      
                    </p>
                    <div className="blog-btn">
                    <a href="tel:8770803211">Call Now</a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div
                  className="single-post2 hover-zoomin mb-30 wow fadeInUp animated"
                  data-animation="fadeInUp"
                  data-delay=".4s"
                >
                  <div className="blog-thumb2">
                  <Iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14960.331093848448!2d85.82706035!3d20.37947675!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a190eca607ec6f5%3A0x95d3f0b6baf4a7ff!2sRaghunathpur%2C%20Bhubaneswar%2C%20Odisha!5e0!3m2!1sen!2sin!4v1711179064679!5m2!1sen!2sin" 
                           width={600}
                           height={450} 
                           style={{ border : "0" }}
                          loading="first">
                    </Iframe>
                  </div>
                  <div className="blog-content2">
                    <h4>
                      <Link to="/blog">Raghunathpur</Link>
                    </h4>                    
                    <br />
                    <p>Upcoming..........</p>
                    <br />
                    <br />
                    <div className="blog-btn">
                    <a href="tel:8770803211">Call Now</a>
                    </div>
                  </div>
                </div>
              </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Blog;
