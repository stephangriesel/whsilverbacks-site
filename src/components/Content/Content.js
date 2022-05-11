import { useRef, useState, useEffect } from "react"
import Button from '../../UI/Button/Button'
import Layout from '../../UI/Layout/Layout'

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

const Content = () => {

  // define the initial state
  const [content, setContent] = useState(null);
  console.log("check content state:",content);

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
    return "Loading...";
  }

  return (
    <Layout>
      <div className='content-wrapper'>
        <h1>{content.title}</h1>
        <p>{content.description}</p>
        <img src={content.imagesCollection.items[0].url} alt="test" />
        <img src={content.imagesCollection.items[1].url} alt="test" />
      </div>
    </Layout>
  )
}

export default Content