import React, { useState } from 'react';
import Faqimg from '../../assets/img/bg/faq-img.png';

function Faqsection() {
    const [faqIndex, setFaqIndex] = useState(null);

    const faqs = [
        {
            Que: 'What are early signs of dental trouble?.',
            Answer:
                '"Visit a dentist if you have any of these issues or see your child having trouble chewing or complaining of soreness: Mouth sores,Jaw pain,Redness,Swollen face or gums,Tooth sensitivity,Broken teeth,Dry mouth,Bleeding gums,Bad breath or a bad taste in your mouth, Getting checked out right away prevents more serious problems and infections."',
        },
        {
            Que: 'Are dental X-rays safe and needed?',
            Answer:
                "'Medical and dental experts study the use of X-rays and set limits for their safety. Your dentist should take as few as possible. Sometimes dentists may recommend X-rays to diagnose a special problem. Advancements in technology means todays digital X-rays release much less radiation and are safer than in the past.xpect to get them during a first exam after not seeing a dentist for a while. This helps check tooth and gum health. If you have gum disease, the dentist may want pictures every 6 months. For regular check-ups, it's about every 2 years, depending on your dentist's plan.Kids have more X-rays done than adults because their teeth are changing and because they get cavities more easily.'",
        },
        {
            Que: 'How do fillings work?',
            Answer:
                "'Cavities break through the surface enamel of teeth, and they'll probably get bigger unless you close them off with fillings.Your dentist will numb your mouth before drilling around the cavity to prep it. A combination of strong materials or a white mix called a composite goes into the cavity soft and then hardens as it dries. You may feel pain or pressure when getting the numbing shot and during the drilling.Once set, fillings can last a long time but need replacing if they break or wear down.'",
        },
        {
            Que: 'How can I fix my teeth and smile?',
            Answer:
                "'Caps and crowns cover problem teeth by surrounding them in a material that looks like a real tooth. They use the root and inside of the tooth as a base to build on, then attach with special cement.Veneers and bonding improve your smile by sticking a layer of smoother and whiter materials like porcelain or resin to the natural tooth.Talk with your dentist about which fix is right for you'",
        },
    ];

    return (
        <>
            <section className="faq-area fix" style={{ backgroundColor: '#0e264f' }}>
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <div className="section-title mb-50">
                                <h5>FAQ</h5>
                                <h2>Frequently Asked Question</h2>
                            </div>
                            <div className="faq-wrap">
                                <div className="accordion" id="accordionExample">
                                    {faqs.map((faq, index) => (
                                        <div className="card" key={index}>
                                            <div className="card-header" id={`heading-${index}`}>
                                                <h2 className="mb-0">
                                                    <button
                                                        className={`faq-btn ${faqIndex === index ? '' : 'collapsed'
                                                            }`}
                                                        type="button"
                                                        data-bs-toggle="collapse"
                                                        onClick={() => setFaqIndex(index)}
                                                        data-bs-target={`#collapse-${index}`}
                                                    >
                                                        {faq.Que}
                                                    </button>
                                                </h2>
                                            </div>
                                            {faqIndex === index && (
                                                <div
                                                    id={`collapse-${index}`}
                                                    className="collapse show"
                                                    data-bs-parent="#accordionExample"
                                                >
                                                    <div className="card-body">{faq.Answer}</div>
                                                </div>
                                            )}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="faq-img text-right">
                                <img src={Faqimg} alt="img" className="img" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Faqsection;
