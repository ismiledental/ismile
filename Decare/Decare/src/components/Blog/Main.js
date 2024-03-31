import React from 'react'
import First from '../Menblog/First'
import Second from '../Menblog/Second'
import Sideone from '../Menblog/Sideone'
import Three from '../Menblog/Three'
import Bredcm from '../Menhome/breadcrumb'
import Pagination from '../Pagination/Main'


function Main() {
  return (
    <>
      <Bredcm
          subtitle="Blog"
          title="Home"
          subtitledown="Blog" 
        />
        
      <section className="inner-blog pt-120 pb-120">
          <div className="container">
            <div className="row">
              <div className="col-lg-8">
                  <First/>
                  <Second/>
                  <Three/>
                  <Pagination/>
              </div>
              <div className="col-sm-12 col-md-12 col-lg-4">
                <aside className="sidebar-widget">
                  <Sideone/>
                </aside>
              </div>
            </div>
          </div>
      </section>

    </>
  )
}

export default Main