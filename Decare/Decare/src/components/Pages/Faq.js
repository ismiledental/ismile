import React, { useState } from "react";

function Faq() {
  const [Faq, setFaq] = useState(0);

  const Drop = [
    {
      Que: " Do I really need to floss?",
      Answer:
        " There's no getting around the need to get around your teeth daily with dental floss. It clears food and plaque from between teeth and under the gumline. If you don't, plaque hardens into tartar, which forms wedges and widens the space between teeth and gums, causing pockets. Over time, gums pull away and teeth loosen."

    },
    {
      Que: "Are dental X-rays safe and needed?",
      Answer:
        "'Medical and dental experts study the use of X-rays and set limits for their safety. Your dentist should take as few as possible. Sometimes dentists may recommend X-rays to diagnose a special problem. Advancements in technology means todays digital X-rays release much less radiation and are safer than in the past.xpect to get them during a first exam after not seeing a dentist for a while. This helps check tooth and gum health. If you have gum disease, the dentist may want pictures every 6 months. For regular check-ups, it's about every 2 years, depending on your dentist's plan.Kids have more X-rays done than adults because their teeth are changing and because they get cavities more easily.'",
    },
    {
      Que: "How do fillings work?",
      Answer:
        "'Cavities break through the surface enamel of teeth, and they'll probably get bigger unless you close them off with fillings.Your dentist will numb your mouth before drilling around the cavity to prep it. A combination of strong materials or a white mix called a composite goes into the cavity soft and then hardens as it dries. You may feel pain or pressure when getting the numbing shot and during the drilling.Once set, fillings can last a long time but need replacing if they break or wear down.'",
    },
    {
      Que: "How can I fix my teeth and smile?",
      Answer:
        "'Caps and crowns cover problem teeth by surrounding them in a material that looks like a real tooth. They use the root and inside of the tooth as a base to build on, then attach with special cement.Veneers and bonding improve your smile by sticking a layer of smoother and whiter materials like porcelain or resin to the natural tooth.Talk with your dentist about which fix is right for you'",
    },
  ];
  const Drop2 = [
    {
      Que: " Can a broken teeth be fixed?",
      Answer:
        " Fillings are among the safest dental procedures that dentists use to fix broken teeth. The dentist fixes cracked or broken teeth temporarily using the restorative material. The dental process is beneficial if your tooth has suffered cavity. It is painless and cost-efficient."
    },
    {
      Que: "What causes mouth to smell?",
      Answer:
        "'Halitosis is caused by sulphur-producing bacteria in the tongue and throat. The major causes include a dry mouth caused by certain foods, smoking, poor oral hygiene and a coated tongue. The treatment of halitosis will depend on the underlying cause.'",
    },
    {
      Que: "How do you stop a tooth headache?",
      Answer:
        "'Alternate between heat and cold. Gentle massages to your temples can help relax your head, face, and jaw muscles to relieve tension and alleviate dental headaches. You can also use an ice-pack to reduce pain, and a heating pad to further relax the muscles.'",
    },
    {
      Que: "How do you fix loose teeth from accidents?",
      Answer:
        "'If your tooth is loose because of an impact injury, the most common treatment is a splint. This is exactly what it sounds like. Your loose tooth will be “splinted” to the two adjacent teeth, holding it in place until the ligaments can strengthen and reattach themselves.",
    },
  ];

  return (
    <>
      <section id="faq" className="faq-area pt-120 pb-120">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-6">
              <div className="faq-wrap">
                <div className="accordion" id="accordionExample">
                  {Drop.map((items, index) => (
                    <div className="card" key={items.id}>
                      <div className="card-header" id="headingOne">
                        <h2 className="mb-0">
                          <button
                            className={`faq-btn ${
                              Faq !== index && "collapsed"
                            }`}
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseOne"
                            onClick={() => {
                              setFaq(index);
                            }}
                            key={items}
                          >
                            {items.Que}
                          </button>
                        </h2>
                      </div>
                      {Faq === index && (
                        <div
                          id="collapseOne"
                          className="collapse show"
                          aria-labelledby="headingOne"
                          data-bs-parent="#accordionExample"
                          style={{}}
                        >
                          <div className="card-body" key={items}>
                            {items.Answer}
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6">
              <div className="faq-wrap">
                <div className="accordion" id="accordionExample1">
                  {Drop2.map((items, index) => (
                    <div className="card" key={items.id}>
                      <div className="card-header" id="headingfive">
                        <h2 className="mb-0">
                          <button
                            className={`faq-btn ${
                              Faq !== index && "collapsed"
                            }`}
                            onClick={() => {
                              setFaq(index);
                            }}
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapsefive"
                          >
                            {items.Que}
                          </button>
                        </h2>
                      </div>
                      {Faq === index && (
                        <div
                          id="collapsefive"
                          className="collapse show"
                          aria-labelledby="headingfive"
                          data-bs-parent="#accordionExample1"
                        >
                          <div className="card-body">{items.Answer}</div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Faq;
