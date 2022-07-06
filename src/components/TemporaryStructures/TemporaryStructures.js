import React from 'react'

import { useRef, useState, useEffect } from "react";

import { Fade } from "react-awesome-reveal";

import ReactMarkdown from 'react-markdown'
import FlexColumn from '../../UI/Layout/FlexColumn/FlexColumn';
import FlexRow from '../../UI/Layout/FlexRow/FlexRow';

import Inline from '../../UI/Inline/Inline';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// import required modules
import { EffectFade, Navigation, Pagination } from "swiper";

// Swiper styles 
import './styles.css';

const query = `
{
  temporaryStructuresCollection {
    items {
      title
      heading
      imagesCollection {
        items {
          url
        }
      }
      preHeading3
      preHeading4
      preHeading5
      paragraph1
      paragraph2
      paragraph3
      paragraph4
      paragraph5
      paragraph6
      paragraph7
      paragraph8
    }
  }
}
`


// Environment variables
const { REACT_APP_SPACE_ID, REACT_APP_CDA_TOKEN } = process.env;

const TemporaryStructures = () => {
  // define the initial state
  const [isActiveOne, setIsActiveOne] = useState(false);
  const [isActiveTwo, setIsActiveTwo] = useState(false);
  const [isActiveThree, setIsActiveThree] = useState(false);
  const [temporaryStructures, setTemporaryStructures] = useState(null);

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
        setTemporaryStructures(data.temporaryStructuresCollection.items[0]);
      });
  }, []);

  // show a loading screen case the data hasn't arrived yet
  if (!temporaryStructures) {
    return "Loading...";
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
                className="mySwiper shadow"
              >
                <SwiperSlide>
                  <img
                    src={temporaryStructures.imagesCollection.items[0].url}
                    alt='installation'
                    placeholder='tracedSVG'
                    width={300}
                    className='border-radius-50' />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    src={temporaryStructures.imagesCollection.items[1].url}
                    alt='installation'
                    placeholder='tracedSVG'
                    width={300}
                    className='border-radius-50' />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    src={temporaryStructures.imagesCollection.items[2].url}
                    alt='installation'
                    placeholder='tracedSVG'
                    width={300}
                    className='border-radius-50' />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    src={temporaryStructures.imagesCollection.items[3].url}
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
            {temporaryStructures.title}
          </h1>
          <div>
            <ReactMarkdown>
              {temporaryStructures.paragraph1}
            </ReactMarkdown>
          </div>
          <div>
            <ReactMarkdown>
              {temporaryStructures.paragraph2}
            </ReactMarkdown>
          </div>

          <div className='accordion-item'>
            <div
              className='accordion-title'
              onClick={() => setIsActiveOne(!isActiveOne)}
            >
              <Inline>
                <ReactMarkdown>
                  {temporaryStructures.preHeading3}
                </ReactMarkdown>
                <div>{isActiveOne ? '-' : '+'}
                </div>
              </Inline>
            </div>
            {isActiveOne && (
              <div className='accordion-content'>
                <p>
                  {temporaryStructures.paragraph3}
                </p>
              </div>
            )}
          </div>

          <div className='accordion-item'>
            <div
              className='accordion-title'
              onClick={() => setIsActiveTwo(!isActiveTwo)}
            >
              <Inline>
                <ReactMarkdown>
                  {temporaryStructures.preHeading4}
                </ReactMarkdown>
                <div>{isActiveTwo ? '-' : '+'}
                </div>
              </Inline>
            </div>
            {isActiveTwo && (
              <div className='accordion-content'>
                <p>
                  {temporaryStructures.paragraph4}
                </p>
              </div>
            )}
          </div>

          <div className='accordion-item'>
            <div
              className='accordion-title'
              onClick={() => setIsActiveThree(!isActiveThree)}
            >
              <Inline>
                <ReactMarkdown>
                  {temporaryStructures.preHeading5}
                </ReactMarkdown>
                <div>{isActiveThree ? '-' : '+'}
                </div>
              </Inline>
            </div>
            {isActiveThree && (
              <div className='accordion-content'>
                <p className='accordion-paragraph'>
                  {temporaryStructures.paragraph5}
                </p>
              </div>
            )}
          </div>

          <div>
            <ReactMarkdown>
              {temporaryStructures.paragraph6}
            </ReactMarkdown>
          </div>
          <div>
            <ReactMarkdown>
              {temporaryStructures.paragraph7}
            </ReactMarkdown>
          </div>
          <div>
            <ReactMarkdown>
              {temporaryStructures.paragraph8}
            </ReactMarkdown>
          </div>
        </FlexColumn>
      </FlexRow>
    </div>
  )
}

export default TemporaryStructures