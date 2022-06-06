import React from 'react'
import { useRef, useState, useEffect } from "react"
import ReactMarkdown from 'react-markdown'

import FlexColumn from '../../UI/Layout/FlexColumn/FlexColumn'

// TO DO: Query Update: Header
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
    return "Loading...";
  }

  return (
    <div>
        <h1>{contact.title}</h1>
        <h3>{contact.heading}</h3>
        <form action="https://form.taxi/s/2dbsqdfa" method="POST">
      <FlexColumn>
          <input type="text" name="Name" />
          <input type="number" name="Number" />
          <input type="email" name="Email" />
          <input type="date" name="EventDate" />
          <input type="text" name="Location" />
          <input type="number" name="NumberPeople" />
          <input type="text" name="Reference" />
          <button type="submit">Send</button>
      </FlexColumn>
        </form>
        <ReactMarkdown>
          {contact.slotParagraph}
        </ReactMarkdown>
    </div>
  )
}

export default Contact