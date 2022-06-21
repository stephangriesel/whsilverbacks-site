import React from 'react'

import { useRef, useState, useEffect } from "react"

import ReactMarkdown from 'react-markdown'
import FlexColumn from '../../UI/Layout/FlexColumn/FlexColumn';
import FlexRow from '../../UI/Layout/FlexRow/FlexRow';

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
          <img src={temporaryStructures.imagesCollection.items[0].url} alt="Events" />
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
          <div>
            <ReactMarkdown>
              {temporaryStructures.paragraph3}
            </ReactMarkdown>
          </div>
          <div>
            <ReactMarkdown>
              {temporaryStructures.paragraph4}
            </ReactMarkdown>
          </div>
          <div>
            <ReactMarkdown>
              {temporaryStructures.paragraph5}
            </ReactMarkdown>
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