import React from 'react'
import { useState, useEffect } from "react"

// TO DO: Query Update: About
const query = `
{
  aboutCollection {
    items {
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
      testimonialOne
      testimonialTwo
      testimonialThree
      testimonialFour
      testimonialFive
    }
  }
}
`

// Environment variables
const { REACT_APP_SPACE_ID, REACT_APP_CDA_TOKEN } = process.env;

const About = () => {
  // define the initial state
  const [about, setAbout] = useState(null);

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
        setAbout(data.aboutCollection.items[0]);
      });
  }, []);

  // show a loading screen case the data hasn't arrived yet
  if (!about) {
    return "Loading...";
  }
  return (
    <div>
      <h1>
        {about.title}
      </h1>
      <h2>
        {about.heading}
      </h2>
      <h3>{about.subHeading}</h3>
      <p>{about.paragraphOne}</p>
      <p>{about.paragraphTwo}</p>
      <p>{about.paragraphThree}</p>
      <p>{about.paragraphFour}</p>
      <p>{about.paragraphFive}</p>
      <p>{about.paragraphSix}</p>
      <p>{about.testimonialOne}</p>
      <p>{about.testimonialTwo}</p>
      <p>{about.testimonialThree}</p>

    </div>
  )
}

export default About