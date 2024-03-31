import React from 'react'
import Make from '../MenContact-Us/Make'
import Bredcm from '../Menhome/breadcrumb'
import Map from '../MenContact-Us/Map'

function Main() {
  return (
    <>
         <Bredcm
            subtitle="Contact Us"
            title="Home"
            subtitledown="about-Us"
          />
        <Make/>
        <Map/>
    </>
  )
}

export default Main