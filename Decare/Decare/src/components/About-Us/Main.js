import React from 'react'
import Bredcm from '../Menhome/breadcrumb'
import About from '../Menabout/About'
import Appointment from '../Menhome/Appointment'
import Ourdr from '../Menhome/Ourdr'
import Faq from '../Menhome/Faqsection'
import Blog from '../Menhome/Blog'


function Main() {
  return (
    <>
      <Bredcm subtitle="About Us" title="Home" subtitledown="About Us"/>
      <About/>
      <Appointment/>
      <Ourdr/>
      <Faq/>
      <Blog/>
    </>
  )
}

export default Main