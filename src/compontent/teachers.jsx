import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Img1 from '../assets/img/teachers/1.jpg';
import Img2 from '../assets/img/teachers/2.jpg';
import Img3 from '../assets/img/teachers/3.jpg';
import Img4 from '../assets/img/teachers/4.jpg';
import Img5 from '../assets/img/teachers/5.jpg';
import Img6 from '../assets/img/teachers/6.jpg';
import Img7 from '../assets/img/teachers/7.jpg';
import Img8 from '../assets/img/teachers/8.jpg';
import Img9 from '../assets/img/teachers/9.jpg';
import Img10 from '../assets/img/teachers/10.jpg';
import '../style/teacher.css'
const Teachers = () => {
    const productData =[
        {
          id:1,
          img:Img1,
          name:"SHERMILLA. V",
          desc:"Principal",        
      },
      {
        id:2,
        img:Img2,
        name:"SABEERA.P P",
        desc:"Vice Principal",       
    },    
    {
      id:3,
      img:Img10,
      name:"REMYA.P K",
      desc:"Special Educator",       
  },      
    {
        id:4,
        img:Img4,
        name:"NOORJAHAN.M",
        desc:"Special Educator",   
    },
    {
        id:5,
        img:Img5,
        name:"BADARIYA.M K",
        desc:"Special Educator",
    },
    {
      id:6,
      img:Img6,
      name:"JIJI.C K",
      desc:"Special Educator",
    },
    {
      id:7,
      img:Img7,
      name:"RUGMA.T",
      desc:"Special Educator",
    }, {
      id:8,
      img:Img8,
      name:"ROOPA.K",
      desc:"Special Educator",
    }, 
    {
      id:9,
      img:Img9,
      name:"SINI.M G",
      desc:"Special Educator",
    },
    {
      id:10,
      img:Img3,
      name:"MEERA VARGHESE",
      desc:"SpeechTherapist",       
  },
  
      
    ]
    var settings = {
      dots: false,
      arrows:false,
      autoplay:true,
      autoplaySpeed: 2000,
      focusOnHover:true,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 1399,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
              infinite: true,
            }
          },
          {
            breakpoint: 992,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              infinite: true,
            }
          },
          {
            breakpoint: 567,
            settings: {
              slidesToShow: 1,
              slidesToScroll:1,
              initialSlide: 1
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
  return (
    <div>
      <section className='mt-3'>
        <div className='container'>
          <div className="col-12">
            <h2 className="ment-head">Mentors</h2>
          </div>
        <Slider {...settings}>
          {productData.map((item, index) => (
              <div key={index} className="col-12" data-aos="fade-up">
              <div className="card-teacher mb-3">
              <div className="teacher-card">
                <img src={item.img} alt={`Image ${index}`} className="gallery-image img-fluid" />
                <div className='teacher-info'>
                    <h4>{item.name}</h4>
                    <h6>{item.desc}</h6>
                  </div>
              </div>
              </div>
            </div>
           ))}
        </Slider>
        </div>
      </section>
    </div>
  )
}

export default Teachers
