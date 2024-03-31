import React from 'react'
import Slider from '../Slider/Main'
import Ourservish from '../Menhome/Ourservices'
import Testimo from '../Menhome/Testimonialslider'
import Faq from '../Menhome/Faqsection'
import OurDr from '../Menhome/Ourdr'
import Appointment from '../Menhome/Appointment'
import Blog from '../Menhome/Blog'

function Main() {
  return (
    <>
      <Slider/>
      <Ourservish/>
      <Testimo/>
      <Faq/>
      <OurDr/>
      <Appointment/>
      <Blog/>
    </>
  )
}

export default Main