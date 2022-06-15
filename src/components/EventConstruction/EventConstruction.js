import React from 'react'

import { useRef, useState, useEffect } from "react"

import ReactMarkdown from 'react-markdown'
import FlexColumn from '../../UI/Layout/FlexColumn/FlexColumn';
import FlexRow from '../../UI/Layout/FlexRow/FlexRow';

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
      paragraph1
      paragraph2
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
    return "Loading...";
  }

  return (
    <div>
      <FlexRow>
      <FlexColumn>
          <img src={eventConstruction.imagesCollection.items[0].url} alt="Events" />
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