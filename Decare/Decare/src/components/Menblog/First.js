import React, { useState } from 'react'
import Bssingle from '../../assets/img/blog/inner_b1.jpg'
import bgsingleOne from '../../assets/img/blog/inner_b5.jpg'
import Bloginnertwo from '../../assets/img/blog/inner_b3.jpg'
import { Link } from 'react-router-dom'


function First() {
    const [video, setVideo] = useState();
      

    return (
        <>
            <div className="bsingle__post mb-50">
                <div className="bsingle__post-thumb">
                    <img src={Bssingle} alt="" />
                </div>
                <div className="bsingle__content">
                    
                    <h2>Brighten Your Smile: Effective Tips for Combatting Yellow Teeth</h2>
                    <p>
                    To combat yellow teeth, prioritize oral hygiene by brushing twice daily with a whitening toothpaste containing hydrogen peroxide or 
                    baking soda. Floss daily to remove plaque buildup between teeth.
                    Limit consumption of stain-causing substances like coffee, tea, and tobacco.Drink water after consuming staining foods and beverages.
                    Regular dental check-ups for professional cleaning and whitening treatments can also help restore and maintain a brighter smile.
                    </p>
                    <div className="blog__btn">
                    <a href="tel:+91-8770803211" className="btn">Call Now</a>
                    </div>
                </div>
            </div>
            <div className="bsingle__post mb-50">
            <div className="bsingle__post-thumb video-p">
            <iframe width="560" height="315" src="https://www.youtube.com/embed/7O24Wpq_Uro?si=qf7N0pNb9MOldTgJ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                </div>
               
                <div className="bsingle__content">
                    <div className="meta-info">
                        <ul>
                            <li>
                                <i className="fal fa-user" />
                                By Dr.Neha Mohanty
                            </li>
                            <li>  
                                Care Hospital
                            </li>
                        </ul>
                    </div>
                    <h2>
                        <Link to="/blogdetails">
                        Wisdom teeth removal//Dr. Neha Mohanty//i-SMILE Dental clinic, Bhubaneswar
                        </Link>
                    </h2>
                    <p>
                    Wisdom teeth removal is a common dental procedure aimed at extracting problematic third molars.
                     Typically performed under local or general anesthesia, it alleviates pain, prevents overcrowding, and reduces the risk of infections.
                     Recovery involves rest and following post-operative care instructions diligently.
                    </p>
                    <div className="blog__btn">
    <a href="https://www.youtube.com/@ismiledentalclinic1501" className="btn" target="_blank">
        Click Here to see More Videos
    </a>
</div>
                </div>
            </div>
            <div className="bsingle__post mb-50">
            <div className="bsingle__post-thumb video-p">
            <iframe width="560" height="315" src="https://www.youtube.com/embed/Gwjsj2tumDk?si=bFreoPjsc2YsDSJ1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                </div>
            {/* <div className="bsingle__post-thumb video-p">
                    {video ? (
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/Gwjsj2tumDk?si=fR-skHrV_acknClR" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                        ) : (
                            <img src={bgsingleOne} alt="" />
                        )}
                        {!video && (
                            <Link to="#" onClick={() => setVideo(true)} className="video-i popup-video" >
                                <i className="fas fa-play" />
                            </Link>
                        )}
                </div> */}
                <div className="bsingle__content">
                    <div className="meta-info">
                        <ul>
                            <li>
                                <i className="fal fa-user" />
                                By Sauvik Singha
                            </li>
                            <li>  
                                Care Hospital
                            </li>
                        </ul>
                    </div>
                    <h2>
                        <Link to="/blogdetails">
                        ଖରାଦିନେ ପାଟିର ଯତ୍ନ କେମିତି ନେବେ Oral Health Tips in Summer in Odia दांत की देखभाल Dr Sauvik Singha
                        </Link>
                    </h2>
                    <p>
                    Oral Health Tips in Summer in Odia | ଖରାଦିନେ ପାଟିର ଯତ୍ନ କେମିତି ନେବେ ? गर्मियों में  दांतों की देखभाल कैसे करें I Watch The Excusive Interview of Dr. Sauvik Singha · Maxillofacial Surgeon from CARE Hospitals, Bhubaneswar. 
                    </p>
                    
                </div>
            </div>
            <div className="bsingle__post-thumb video-p">
                <iframe width="560" height="315" src="https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2Fchoklate104%2Fvideos%2F598918361210898%2F&show_text=false&width=560&t=0"  frameborder="0" allowfullscreen="true"></iframe>
                </div>
                <div className="bsingle__content">
                    <div className="meta-info">
                        <ul>
                            <li>
                                <i className="fal fa-user" />
                                By Sauvik Singha
                            </li>
                            <li>  
                                Care Hospital
                            </li>
                        </ul>
                    </div>
                    <h2>
                        <a href="https://fb.watch/r8HbNY4u2M/" target='_blank'> Do listen FROZIT present Special #podcast #Sakalara_Pahili_Gadire with Dr.Sauvik_Singha</a>
                       
                        
                    </h2>
                    <p>
                    Do listen FROZIT present Special #podcast #Sakalara_Pahili_Gadire Dr. #Sauvik_Singh Consultant in dental and maxillofacial surgeon CARE HOSPITAL, BHUBANESWAR in Conversation with RJ Komal.
                    #CareHospital #Frozit #SPG #RjKomal
                    </p>
                </div>
        </>
    )
}

export default First