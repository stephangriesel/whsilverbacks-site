import React from 'react';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// import required modules
import { EffectFade, Navigation, Pagination } from "swiper";

// Swiper styles 
import './styles.css';

const Slider = (props) => {
  const children = props.children;
  return (
      <div>
              <Swiper
                spaceBetween={30}
                navigation={true}
                pagination={{
                  clickable: true,
                }}
                modules={[EffectFade, Navigation, Pagination]}
                className="mySwiper"
              >
                <SwiperSlide>
                  <img
                    src="https://images.ctfassets.net/y2kxguv0syko/2Ze0rLaiYYD4GVIZVj1Z4i/7b50acd7c6c5793625889bff0e48c984/aboutsunrise.jpg"
                    alt='installation'
                    placeholder='tracedSVG'
                    width={300}
                    className='border-radius-50' />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    src="https://picsum.photos/id/239/200/300"
                    alt='installation'
                    placeholder='tracedSVG'
                    width={300}
                    className='border-radius-50' />
                </SwiperSlide>
              </Swiper>
      </div>
  )
}

export default Slider