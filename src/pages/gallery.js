import React from 'react'
import PageBanner from '../compontent/pagebanner'
import Navbar from '../compontent/navbar';
import Footer from '../compontent/footer';
function Gallery() {
  return (
    <div className='main-Gallery'>
        <Navbar></Navbar>
        <PageBanner/>
        <Footer></Footer>
    </div>
  )
}

export default Gallery
