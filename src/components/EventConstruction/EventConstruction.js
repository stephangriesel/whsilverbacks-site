import React from 'react'

import { useRef, useState, useEffect } from "react"

import ReactMarkdown from 'react-markdown'
import FlexColumn from '../../UI/Layout/FlexColumn/FlexColumn';
import FlexRow from '../../UI/Layout/FlexRow/FlexRow';

import { Fade } from "react-awesome-reveal";

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// import required modules
import { EffectFade, Navigation, Pagination } from "swiper";

// Swiper styles 
import './styles.css';

const query = `
{
  eventConstructionCollection {
    items {
      title
      heading
      imagesCollection {
        items {
          url
        }
      }
      preHeading1
      paragraph1
      paragraph2
      preHeading3
      paragraph3
      paragraph4
    }
  }
}
`


// Environment variables
const { REACT_APP_SPACE_ID, REACT_APP_CDA_TOKEN } = process.env;



const EventConstruction = () => {

  // define the initial state
  const [eventConstruction, setEventConstruction] = useState(null);

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
        setEventConstruction(data.eventConstructionCollection.items[0]);
      });
  }, []);

  // show a loading screen case the data hasn't arrived yet
  if (!eventConstruction) {
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
                    src={eventConstruction.imagesCollection.items[0].url}
                    alt='installation'
                    placeholder='tracedSVG'
                    width={300}
                    className='border-radius-50' />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    src={eventConstruction.imagesCollection.items[3].url}
                    alt='installation'
                    placeholder='tracedSVG'
                    width={300}
                    className='border-radius-50' />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    src={eventConstruction.imagesCollection.items[4].url}
                    alt='installation'
                    placeholder='tracedSVG'
                    width={300}
                    className='border-radius-50' />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    src={eventConstruction.imagesCollection.items[5].url}
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
            {eventConstruction.title}
          </h1>
          <div>
            <ReactMarkdown>
              {eventConstruction.heading}
            </ReactMarkdown>
          </div>
          <div>
            <h3>
              {eventConstruction.preHeading1}
            </h3>
          </div>
          <div>
            <ReactMarkdown>
              {eventConstruction.paragraph1}
            </ReactMarkdown>
          </div>
          <div>
            <ReactMarkdown>
              {eventConstruction.paragraph2}
            </ReactMarkdown>
          </div>
          <div>
            <h3>
              {eventConstruction.preHeading3}
            </h3>
          </div>
          <div>
            <ReactMarkdown>
              {eventConstruction.paragraph3}
            </ReactMarkdown>
          </div>
          <div>
            <ReactMarkdown>
              {eventConstruction.paragraph4}
            </ReactMarkdown>
          </div>
        </FlexColumn>
      </FlexRow>
    </div>
  )
}

export default EventConstruction