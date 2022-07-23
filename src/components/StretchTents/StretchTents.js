import React from 'react'

import { useRef, useState, useEffect } from "react"

import { Fade } from "react-awesome-reveal";

import ReactMarkdown from 'react-markdown'
import FlexColumn from '../../UI/Layout/FlexColumn/FlexColumn';
import FlexRow from '../../UI/Layout/FlexRow/FlexRow';
import Inline from '../../UI/Inline/Inline'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// import required modules
import { EffectFade, Navigation, Pagination } from "swiper";

// Swiper styles 
import './styles.css';

const query = `
{
  stretchTentsCollection {
    items {
      title
      heading
      imagesCollection {
        items {
          url(transform:{
            width:700
            quality:100
          })
        }
      }
      paragraph1
      paragraph2
      paragraph3
      paragraph4
      paragraph5
      paragraph6
      paragraph7
      paragraph8
      paragraph9
    }
  }
}
`


// Environment variables
const { REACT_APP_SPACE_ID, REACT_APP_CDA_TOKEN } = process.env;

const StretchTents = () => {
  // define the initial state
  const [isActive, setIsActive] = useState(false);
  const [stretchTents, setStretchTents] = useState(null);

  useEffect(() => {
    window
      // Change to template string & use template literals to define environment variable
      .fetch(`https://graphql.contentful.com/content/v1/spaces/${REACT_APP_SPACE_ID}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          // Authenticate the request
          Authorization: `Bearer ${REACT_APP_CDA_TOKEN}`,
        },
        // send the GraphQL query
        body: JSON.stringify({ query }),
      })
      .then((response) => response.json())
      .then(({ data, errors }) => {
        if (errors) {
          console.error(errors);
        }

        // rerender the entire component with new data
        setStretchTents(data.stretchTentsCollection.items[0]);
      });
  }, []);

  // show a loading screen case the data hasn't arrived yet
  if (!stretchTents) {
    return "";
  }

  return (
    <div>
      <FlexRow>
        <FlexColumn>
        <Fade delay={200}>
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
                    src={stretchTents.imagesCollection.items[0].url}
                    alt='installation'
                    placeholder='tracedSVG'
                    width={300}
                    className='border-radius-50' />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    src={stretchTents.imagesCollection.items[1].url}
                    alt='installation'
                    placeholder='tracedSVG'
                    width={300}
                    className='border-radius-50' />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    src={stretchTents.imagesCollection.items[2].url}
                    alt='installation'
                    placeholder='tracedSVG'
                    width={300}
                    className='border-radius-50' />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    src={stretchTents.imagesCollection.items[4].url}
                    alt='installation'
                    placeholder='tracedSVG'
                    width={300}
                    className='border-radius-50' />
                </SwiperSlide>
              </Swiper>
          </Fade>
        </FlexColumn>
        <FlexColumn>
          <h1>
            {stretchTents.title}
          </h1>
          <div>
            <ReactMarkdown>
              {stretchTents.paragraph1}
            </ReactMarkdown>
          </div>
          <div>
            <ReactMarkdown>
              {stretchTents.paragraph2}
            </ReactMarkdown>
          </div>
          <div>
            <ReactMarkdown>
              {stretchTents.paragraph3}
            </ReactMarkdown>
          </div>
          <div>
            <ReactMarkdown>
              {stretchTents.paragraph4}
            </ReactMarkdown>
          </div>
          <div>
            <ReactMarkdown>
              {stretchTents.paragraph5}
            </ReactMarkdown>
          </div>
          <div>
            <ReactMarkdown>
              {stretchTents.paragraph6}
            </ReactMarkdown>
          </div>
          <div>
           
          </div>
          <div>
            <div className='accordion-item'>
              <div
                className='accordion-title'
                onClick={() => setIsActive(!isActive)}
              >
                <Inline> <ReactMarkdown>
              {stretchTents.paragraph7}
            </ReactMarkdown><div>{isActive ? '-' : '+'}</div></Inline>
              </div>
              {isActive && (
                <div className='accordion-content'>
                  <Fade delay={200}>
                  <ReactMarkdown>
                    {stretchTents.paragraph8}
                  </ReactMarkdown>
                  </Fade>
                </div>
              )}
            </div>
          </div>
          <div>
            <ReactMarkdown>
              {stretchTents.paragraph9}
            </ReactMarkdown>
          </div>
        </FlexColumn>
      </FlexRow>
    </div>
  )

}

export default StretchTents