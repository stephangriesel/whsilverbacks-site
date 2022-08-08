import { useState, useEffect } from "react";

// Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import { Fade } from "react-awesome-reveal";
import FlexRow from "../../UI/Layout/FlexRow/FlexRow";
import FlexColumn from "../../UI/Layout/FlexColumn/FlexColumn";

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// import required modules
import { EffectFade, Navigation, Pagination } from "swiper";

// Swiper styles 
import './styles.css';
import FullViewPort from "../../UI/FullViewPort/FullViewPort";

const query = `
{
  homeCollection {
    items {
      imagesCollection {
        items {
          url(transform:{
            width:700
            quality:100
          })
        }
      }
      title
      heading
      subHeading
      paragraphOne
      paragraphTwo
      paragraphThree
      paragraphFour
      paragraphFive
    }
  }
}
`;

// Environment variables
const { REACT_APP_SPACE_ID, REACT_APP_CDA_TOKEN } = process.env;

const HomePage = () => {
  // define the initial state
  const [home, setHome] = useState(null);

  useEffect(() => {
    window
      // Change to template string & use template literals to define environment variable
      .fetch(
        `https://graphql.contentful.com/content/v1/spaces/${REACT_APP_SPACE_ID}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            // Authenticate the request
            Authorization: `Bearer ${REACT_APP_CDA_TOKEN}`,
          },
          // send the GraphQL query
          body: JSON.stringify({ query }),
        }
      )
      .then(response => response.json())
      .then(({ data, errors }) => {
        if (errors) {
          console.error(errors);
        }

        // rerender the entire component with new data
        setHome(data.homeCollection.items[0]);
      });
  }, []);

  // show a loading screen case the data hasn't arrived yet
  if (!home) {
    return "";
  }

  return (
    <FullViewPort>
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
                    src={home.imagesCollection.items[0].url}
                    alt='installation'
                    placeholder='tracedSVG'
                    width={300}
                    className='border-radius-50' />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    src={home.imagesCollection.items[1].url}
                    alt='installation'
                    placeholder='tracedSVG'
                    width={300}
                    className='border-radius-50' />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    src={home.imagesCollection.items[2].url}
                    alt='installation'
                    placeholder='tracedSVG'
                    width={300}
                    className='border-radius-50' />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    src={home.imagesCollection.items[3].url}
                    alt='installation'
                    placeholder='tracedSVG'
                    width={300}
                    className='border-radius-50' />
                </SwiperSlide>
              </Swiper>
          </Fade>
        </FlexColumn>
        <FlexColumn>
          <h2>{home.heading}</h2>
          <h3>{home.subHeading}</h3>
          <p>{home.paragraphOne}</p>
          <p>{home.paragraphTwo}</p>
          <p>{home.paragraphThree}</p>
          <p>{home.paragraphFour}</p>
          <p>{home.paragraphFive}</p>
          <p>{home.paragraphSix}</p>
        </FlexColumn>
      </FlexRow>
    </FullViewPort>
  );
};

export default HomePage;
