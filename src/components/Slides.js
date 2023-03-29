import React from 'react'
import '../styles/slides.css'
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import '../styles/index.css'
import DonButton from './Stripe/DonButton';

const Slides = ({images}) => {
  const settings = {
    infinite: true,
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    lazyLoad: true,
    autoplay: true,
    pauseOnHover: true,
    speed: 2000,
    autoplaySpeed: 5000,
    responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 4,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 4,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 3
          }
        }
      ]

  };

  return (
    <div className="imgslider">
        <Slider  {...settings}>
          {images.map((item) => (
            <div className='slick-slide' key={item.id}>
              <div className='img' style={{backgroundImage: `url(${item.img})`}}>
                <div className='slides'>
                    <div className='gradient'>
                        <div className='text'>
                          <h1>WE <span>CARE</span></h1>
                          <p>WeCare c'est plus qu'un don, c'est un sourire</p>
                          <p>{item.title}</p>
                          <form action="http://localhost:3001/api/stripe/create-checkout-session" method="POST">
                            <div className='buttons'>
                              <DonButton />
                              <button className='but2 but'>Donner 100XAF</button>
                            </div>
                          </form>
                        </div>
                      </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
    </div>
  )
}

export default Slides