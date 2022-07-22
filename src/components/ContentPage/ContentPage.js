import { useRef, useState, useEffect } from "react"
import Content from '../../UI/Content/Content'
import ContentCopy from '../../UI/ContentCopy/ContentCopy'
import Layout from '../../UI/Layout/Layout'

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

// TO DO: Query update: Content
const query = `
{
  contentCollection {
  items {
    title
    description
    imagesCollection {
      items {
        url
      }
    }
  }
  }
}
`

// Environment variables
const { REACT_APP_SPACE_ID, REACT_APP_CDA_TOKEN } = process.env;

const ContentPage = () => {

  // define the initial state
  const [content, setContent] = useState(null);
  console.log("check content state:", content);

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
        setContent(data.contentCollection.items[0]);
      });
  }, []);

  // show a loading screen case the data hasn't arrived yet
  if (!content) {
    return "";
  }

  return (
    <Layout>
      <Content>
        <ContentCopy>
          <h1>{content.title}</h1>
          <p>{content.description}</p>
        </ContentCopy>
        <Fade delay={1000}>
        <div className="content-media">
          <img src={content.imagesCollection.items[0].url} alt="test" />
          {/* <img src={content.imagesCollection.items[1].url} alt="test" /> */}
        </div>
        </Fade>
      </Content>
    </Layout>
  )
}

export default ContentPage