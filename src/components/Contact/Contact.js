import React from 'react'
import { useRef, useState, useEffect } from "react"
import ReactMarkdown from 'react-markdown'

import FlexColumn from '../../UI/Layout/FlexColumn/FlexColumn'
import Form from '../../UI/Form/Form'
import FlexRow from '../../UI/Layout/FlexRow/FlexRow'

import FullViewPort from '../../UI/FullViewPort/FullViewPort'

import JustifyCenter from '../../UI/Layout/JustifyCenter/JustifyCenter'

import './contact.css'

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
    <FullViewPort>
      <FlexRow>
        <FlexColumn>
          <h1>{contact.title}</h1>
          <h3>{contact.heading}</h3>
          <ReactMarkdown>
            {contact.slotParagraph}
          </ReactMarkdown>
        </FlexColumn>
        <Form action="https://form.taxi/s/2dbsqdfa" method="POST">
          <FlexColumn>
            <label for="name">Name:</label>
            <input type="text" name="Name" />

            <label for="number">Number</label>
            <input type="number" name="Number" />

            <label for="email">E-Mail:</label>
            <input type="email" name="Email" />

            <label for="eventdate">Event Date:</label>
            <input type="date" name="EventDate" />

            <label for="location">Location:</label>
            <input type="text" name="Location" />

            <label for="NumberPeople">Number of people:</label>
            <input type="number" name="NumberPeople" />

            <label for="Reference">How did you find us?</label>
            <input type="text" name="Reference" />

            <JustifyCenter>
              <button type="submit">Send</button>
            </JustifyCenter>
          </FlexColumn>
        </Form>
      </FlexRow>
    </FullViewPort>
  )
}

export default Contact