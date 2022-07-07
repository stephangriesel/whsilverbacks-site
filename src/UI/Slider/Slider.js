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
              >
                <SwiperSlide>
                  <img
                    src="https://picsum.photos/id/237/200/300"
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