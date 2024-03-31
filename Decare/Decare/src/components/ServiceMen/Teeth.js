import React from 'react'
import feicon01 from '../../assets/img/icon/fe-icon01.png'
import feicon04 from '../../assets/img/icon/fe-icon04.png'
import feicon05 from '../../assets/img/icon/fe-icon05.png'
import feicon06 from '../../assets/img/icon/fe-icon06.png'
import feicon07 from '../../assets/img/icon/fe-icon07.png'
import feicon08 from '../../assets/img/icon/fe-icon08.png'

function Teeth() {

    const services = [
        {
          icon: feicon01,
          title: 'Root Canal',
          description: 'A root canal treatment is a dental procedure that removes infected or inflamed pulp from the inside of a tooth. The pulp is then cleaned and disinfected'
        },
        {
          icon: feicon04,
          title: 'Dental Implants',
          description: 'Dental implants are medical devices that replace the root of a missing tooth with a metal post. A surgeon inserts the implant into the jawbone using screw-like devices. '
        },
        {
          icon: feicon07,
          title: 'Tooth Filling',
          description: 'A dental filling procedure involves removing damaged tooth parts with a dental hand-piece or laser. The area is then cleaned with an acid gel to remove bacteria and debris.'
        },
        {
          icon: feicon06,
          title: 'Dental X-ray',
          description: 'Dental X-rays, also known as radiographs, are internal images of your teeth and jaws. They help dentists diagnose diseases affecting the teeth and bones. The X-ray machine is positioned alongside your head to record images of your mouth.'
        },
        {
          icon: feicon05,
          title: 'Oral Surgery',
          description: 'There are several types of oral surgery procedures performed each year. Some of the most common include tooth extraction, dental bone grafts, dental implants, periodontal surgery, corrective jaw surgery, sleep apnea surgery and cleft lip and palate repair.'
        },
        {
          icon: feicon08,
          title: 'Veneer & Crown',
          description: 'Dental crowns and veneers differ in the portion of the tooth they cover. Crowns cover the entire tooth, while veneers only cover the front.Crowns are usually the best option for damaged teeth, large fillings, or teeth that have had root canals.'
        }
      ];
  return (
    <>
        <section id="service-details2" className="service-details-two pt-120 pb-85 p-relative" >
            <div className="container">
            <div className="row align-items-center">
              {services.map((service, index) => (
                <div key={index} className="col-lg-4 col-md-6 col-sm-12 mb-15">
                  <div className="about-content s-about-content">
                    <ul className="sr-tw-ul">
                      <li>
                        <div className="icon">
                          <img src={service.icon} alt={`icon${index}`} />
                        </div>
                        <div className="text">
                          <h4>{service.title}</h4>
                          <p>{service.description}</p>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              ))}
            </div>
            </div>
        </section> 
    </>
  )
}

export default Teeth