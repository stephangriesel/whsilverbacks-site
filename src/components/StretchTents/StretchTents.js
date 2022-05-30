import React from 'react'

import { useRef, useState, useEffect } from "react"

const query = `
{
  stretchTentsCollection {
    items {
      title
      heading
      imagesCollection {
        items {
          url
        }
      }
      paragraph1
      paragraph2
      paragraph3
    }
  }
}
`


// Environment variables
const { REACT_APP_SPACE_ID, REACT_APP_CDA_TOKEN } = process.env;

const StretchTents = () => {
  // define the initial state
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
    return "Loading...";
  }

  return (
    <div>
      <h1>
        {stretchTents.title}
      </h1>
      <img src={stretchTents.imagesCollection.items[0].url} alt="Events" />
    </div>
  )

}

export default StretchTents