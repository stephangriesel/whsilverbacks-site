import React from 'react'
import { useState, useEffect } from "react"

import { Link } from 'react-router-dom';

// Navbar Styles
import Brand from '../../UI/Brand/Brand'

// TO DO: Query Update: Header
const query = `
{
  headerCollection {
    items {
      title
      logo {
        url
      }
    }
  }
}
`

// Environment variables
const { REACT_APP_SPACE_ID, REACT_APP_CDA_TOKEN } = process.env;

const BrandHeader = () => {

  // define the initial state
  const [header, setHeader] = useState(null);

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
        setHeader(data.headerCollection.items[0]);
      });
  }, []);

  // show a loading screen case the data hasn't arrived yet
  if (!header) {
    return <div className="lds-ellipsis"><div></div><div></div><div></div><div></div></div>;
  }

  return (
    <Brand>
      <Link to="/">
        <img src={header.logo.url} className="logo" alt="logo" />
      </Link>
      <h1>
        {/* {header.title} */}
      </h1>
    </Brand>
  )
}

export default BrandHeader