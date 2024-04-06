import React from 'react'
import '../style/about.css'
import PageBanner from '../compontent/pagebanner'
import AboutUs from '../compontent/aboutus'
import Funfact from '../compontent/funfac'
import Navbar from '../compontent/navbar';
import Footer from '../compontent/footer';
function About() {
  return (
    <div className='about'>
      <Navbar></Navbar>
       <PageBanner></PageBanner>
       <AboutUs></AboutUs>
       <Funfact></Funfact>
       <Footer></Footer>
    </div>
  )
}

export default About
