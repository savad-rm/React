import React from 'react'
import '../style/footer.css';
import { Link } from "react-router-dom";
import Instagragm from "../assets/img/img/insta.png";
import Facebook from '../assets/img/img/fb.png';
import Logo from '../assets/logo/logo-t.png'
function Footer() {
  return (
    <section className='footer'>
      <div className='container'>
        <div className="row">
          <div className="col-lg-5 col-md-6 col-12">
            <div className="logo">
              <img className='logo' src={Logo} alt="" />
            </div>
            <p className='sec-dec'>
              Lorem ipsum dolor sit amet. <br />
              Lorem ipsum dolor sit amet.
            </p>
            <div className='social'>
              <img className='social-media-links' src={Instagragm}></img>
              <img className='social-media-links' src={Facebook}></img>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-12">
          <h3 className="widget-title">Explore</h3>
          <ul className='footer-contact'>
          <Link to={"/"}> <li > Home</li></Link>
          <Link to={"/about"}><li>About</li></Link>
          <Link to={"/blogs"}><li>Blog</li></Link>
          <Link to={"/gallery"}><li>Gallery</li></Link>
          <Link to={"/contact"}><li>Contact</li></Link>
          </ul>
          </div>
          <div className="col-lg-3">
          <h3 className="widget-title">Contact</h3>
         <ul className='contact-right'>
         <li>
            <a href ="">JDT Islam, Jamiath Hill,
              Marikunnu P O, Calicut - 12,
              Kerala, India
            </a>
          </li>
          <li>
            <a  className='d-block' href="tel:+91 4952 731 420">+91 4952 731 420</a>
            <a  className='d-block' href="tel:+91 6282 014 275">+91 6282 014 275</a>
          </li>
          <li>
            <a className='d-block' href="mailto:jdtislamclt12@gmail.com">jdtislamclt12@gmail.com</a>
            <a className='d-block' href="mailto:info@jdtislam.org">info@jdtislam.org</a>
          </li>
         </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Footer
