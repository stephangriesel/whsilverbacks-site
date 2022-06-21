import { useState, useEffect } from "react"

// Swiper React components
// import { Swiper, SwiperSlide } from 'swiper/react';

// Swiper required modules
// import { EffectFade, Navigation, Pagination } from "swiper";

// Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

// Image reveal
import { Fade } from "react-awesome-reveal";
import FlexRow from "../../UI/Layout/FlexRow/FlexRow";
import FlexColumn from "../../UI/Layout/FlexColumn/FlexColumn";

const query = `
{
  homeCollection {
    items {
      imagesCollection {
        items {
          url
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
      paragraphSix
      paragraphSeven
      paragraphEight
    }
  }
}
`

// Environment variables
const { REACT_APP_SPACE_ID, REACT_APP_CDA_TOKEN } = process.env;

const HomePage = () => {

  // define the initial state
  const [home, setHome] = useState(null);
  console.log("check content state:", home);

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
        setHome(data.homeCollection.items[0]);
      });
  }, []);

  // show a loading screen case the data hasn't arrived yet
  if (!home) {
    return "Loading...";
  }

  return (
    <div>
      <FlexRow>
        <FlexColumn>
          <Fade delay={1000}>
            {/* <h1>
              {home.title}
            </h1> */}
            <h2>
              {home.heading}
            </h2>
            <h3>{home.subHeading}</h3>
          <p>{home.paragraphOne}</p>
          <p>{home.paragraphTwo}</p>
          <p>{home.paragraphThree}</p>
          <p>{home.paragraphFour}</p>
          <p>{home.paragraphFive}</p>
          <p>{home.paragraphSix}</p>
          </Fade>
        </FlexColumn>
        <FlexColumn>
          <img src={home.imagesCollection.items[0].url} alt="tent" />
        </FlexColumn>
      </FlexRow>
    </div>
  )
}

export default HomePage