import React from "react";
import { useState, useEffect } from "react";
import FullViewPort from "../../UI/FullViewPort/FullViewPort";
import FlexColumn from "../../UI/Layout/FlexColumn/FlexColumn";
import FlexRow from "../../UI/Layout/FlexRow/FlexRow";

import { Fade } from "react-awesome-reveal";

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
      imageOne {
        url
      }
      imageTwo {
        url
      }
    }
  }
}
`;

// Environment variables
const { REACT_APP_SPACE_ID, REACT_APP_CDA_TOKEN } = process.env;

const About = () => {
  // define the initial state
  const [about, setAbout] = useState(null);

  useEffect(() => {
    window
      // Change to template string & use template literals to define environment variable
      .fetch(
        `https://graphql.contentful.com/content/v1/spaces/${REACT_APP_SPACE_ID}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            // Authenticate the request
            Authorization: `Bearer ${REACT_APP_CDA_TOKEN}`,
          },
          // send the GraphQL query
          body: JSON.stringify({ query }),
        }
      )
      .then(response => response.json())
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
    <FullViewPort>
      <FlexRow>
        <FlexColumn>
          <h1>{about.title}</h1>
          <h2>{about.heading}</h2>
          <Fade delay={200}>
            <img src={about.imageOne.url} alt="sunrise" />
          </Fade>
          <p>{about.paragraphOne}</p>
          <p>{about.paragraphTwo}</p>
        </FlexColumn>
        <FlexColumn>
          <p>{about.paragraphThree}</p>
          <p>{about.paragraphFour}</p>
          <p>{about.paragraphFive}</p>
          <Fade delay={200}>
            <img src={about.imageTwo.url} alt="crane" />
          </Fade>
          <p>{about.paragraphSix}</p>
        </FlexColumn>
      </FlexRow>
      <FlexRow>
        <p>{about.testimonialOne}</p>
        <p>{about.testimonialTwo}</p>
        <p>{about.testimonialThree}</p>
      </FlexRow>
    </FullViewPort>
  );
};

export default About;
