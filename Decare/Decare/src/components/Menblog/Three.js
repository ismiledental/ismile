import React from 'react'
import blockquote from '../../assets/img/icon/blockquote.png'
import { Link } from 'react-router-dom'

function Three() {
  return (
    <>
        {/* <div className="bsingle__post mb-50">
                
                <div className="bsingle__content">
                <div className="meta-info">
                    <ul>
                    <li>
                        <i className="fal fa-user" />
                        By Zcube
                    </li>
                    <li>
                        <i className="fal fa-calendar-alt" /> 24th March 2021
                    </li>
                    </ul>
                </div>
                <h2>
                    <Link to="/blogdetails">
                    There are many variations passages of like consectetur lorem ipsum
                    available.
                    </Link>
                </h2>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                    veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                    commodo consequat.Duis aute irure dolor in reprehenderit in voluptate
                    velit esse.
                </p>
                <div className="blog__btn">
                    <Link to="#" className="btn">
                    Read More
                    </Link>
                </div>
                </div>
        </div> */}
        {/* <div className="bsingle__post mb-50">
                <div className="bsingle__content">
                <div className="meta-info">
                    <ul>
                    <li>
                        <i className="fal fa-user" />
                        By Zcube
                    </li>
                    <li>
                        <i className="fal fa-calendar-alt" /> 24th March 2021
                    </li>
                    </ul>
                </div>
                <h2>
                    <Link to="/blogdetails">
                    On the other hand, we denounce with of righteous indignation and
                    dislike men.
                    </Link>
                </h2>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                    veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                    commodo consequat.Duis aute irure dolor in reprehenderit in voluptate
                    velit esse.
                </p>
                <div className="blog__btn">
                    <Link to="#" className="btn">
                    Read More
                    </Link>
                </div>
                </div>
        </div> */}
        <div className="bsingle__post mb-50">
                <div
                className="bsingle__content quote-post"
                style={{ backgroundImage: "url(img/bg/quote_bg.png)" }}
                >
                <div className="meta-info">
                    {/* <ul>
                    <li>
                        <i className="fal fa-user" />
                        By Zcube
                    </li>
                    <li>
                        <i className="fal fa-calendar-alt" /> 24th March 2021
                    </li>
                    </ul> */}
                </div>
                <div className="quote-icon">
                    <img src={blockquote} alt="" />
                </div>
                <h2>
                    <Link to="/blogdetails">
                   Smile with iSmile
                    </Link>
                </h2>
                </div>
        </div>
    </>
  )
}

export default Three