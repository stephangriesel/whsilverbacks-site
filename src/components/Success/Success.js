import React from 'react'
import { useState, useEffect } from "react"
import FlexColumn from '../../UI/Layout/FlexColumn/FlexColumn'
import FlexRow from '../../UI/Layout/FlexRow/FlexRow'
import FullViewPort from '../../UI/FullViewPort/FullViewPort'

import './success.css'

const query = `
{
  contactCollection {
    items {
      title
      heading
      slotParagraph
    }
  }
}
`

// Environment variables
const { REACT_APP_SPACE_ID, REACT_APP_CDA_TOKEN } = process.env;

const Contact = () => {

  const [contact, setContact] = useState(null);


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
        setContact(data.contactCollection.items[0]);
      });
  }, []);

  // show a loading screen case the data hasn't arrived yet
  if (!contact) {
    return "";
  }

  return (
    <FullViewPort>
      <FlexRow>
        <FlexColumn>
          <h1>Thank you!</h1>
          <h2>Your form has been submitted!</h2>
        </FlexColumn>
      </FlexRow>
    </FullViewPort>
  )
}

export default Contact