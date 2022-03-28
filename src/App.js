import './App.css';
import { useState, useEffect } from "react";
import Button from '@mui/material/Button';
import FreshButton from './UI/Button/Button'
import TestButton from './components/TestButton'
import SEO from './components/Seo'
import Greeting from './components/Greeting'

const query = `
{
  pageCollection {
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

function App() {
  // define the initial state
  const [page, setPage] = useState(null);

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
        setPage(data.pageCollection.items[0]);
      });
  }, []);

  // show a loading screen case the data hasn't arrived yet
  if (!page) {
    return "Loading...";
  }
  //return statement and JSX template
  return (
    <div className="App">
      {/* TODO!! Helmet throws error, fix: https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html */}
      <SEO />
      <header className="App-header">
        <img src={page.logo.url} className="App-logo" alt="logo" />
        <p>
          {page.title}
        </p>
        <div>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </div>
        {/* Material UI Button */}
        <Button variant="contained">
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </Button>
        {/* Jest Test */}
        <TestButton />
        {/* CSS Modules Button */}
        <FreshButton type="button">
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </FreshButton>
      </header>
    </div>
  );
}

export default App;
