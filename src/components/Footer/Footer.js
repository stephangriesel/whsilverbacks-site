import React from 'react'
import { useRef, useState, useEffect } from "react"
import { FaPhone } from 'react-icons/fa'
import { FaRegMap } from 'react-icons/fa'
import { FaEnvelope } from 'react-icons/fa'

import Layout from '../../UI/Layout/Layout'
import FlexEvenly from '../../UI/Layout/FlexEvenly/FlexEvenly'

const query = `
{
    footerCollection {
      items {
        leftTitle
        leftParagraph
        middleTitle
        middleParagraph
        rightTitle
        rightParagraph    
      }
    }
  }
`

// Environment variables
const { REACT_APP_SPACE_ID, REACT_APP_CDA_TOKEN } = process.env;

const Footer = () => {
    // define the initial state
    const [footer, setFooter] = useState(null);

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
                setFooter(data.footerCollection.items[0]);
            });
    }, []);

    // show a loading screen case the data hasn't arrived yet
    if (!footer) {
        return "Loading...";
    }
    return (
        <Layout>
            <div className='container'>
                <FlexEvenly>
                    <div className='block'>
                        <h5 className='pt-4 flex-center-center'>{footer.leftTitle}</h5>
                        <div className='pt-4'>
                            <p><FaRegMap /> WH Group Ltd / 13903490</p>
                        </div>
                    </div>
                    <div className='block'>
                        <h5 className='pt-4 flex-center-center'>CONTACT
                            {/* <span><img className='flag' alt='flag' src={gb} /></span> */}
                        </h5>
                        <div className='pt-4'>
                            {/* <p><FaPhone />#####</p> */}
                            <p><FaEnvelope /><a className="link-dark" href="mailto:info@whsilverbacks.co.uk">  info@whsilverbacks.co.uk </a></p>
                        </div>
                    </div>
                    <div className='block'>
                        <div>
                            <h5 className='pt-4'>SOCIAL</h5>
                        </div>
                        <div className='socials pt-3'>
                            {/* Facebook */}
                            <a href="https://www.facebook.com/WHSilverbacks"><svg
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                className="fb-icon"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M9.19795 21.5H13.198V13.4901H16.8021L17.198 9.50977H13.198V7.5C13.198 6.94772 13.6457 6.5 14.198 6.5H17.198V2.5H14.198C11.4365 2.5 9.19795 4.73858 9.19795 7.5V9.50977H7.19795L6.80206 13.4901H9.19795V21.5Z"
                                    fill="currentColor"
                                />
                            </svg>
                            </a>
                            {/* Instagram */}
                            <a href="https://www.instagram.com/whsilverbacks/"><svg
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                className="ig-icon"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M12 7C9.23858 7 7 9.23858 7 12C7 14.7614 9.23858 17 12 17C14.7614 17 17 14.7614 17 12C17 9.23858 14.7614 7 12 7ZM9 12C9 13.6569 10.3431 15 12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12Z"
                                    fill="currentColor"
                                />
                                <path
                                    d="M18 5C17.4477 5 17 5.44772 17 6C17 6.55228 17.4477 7 18 7C18.5523 7 19 6.55228 19 6C19 5.44772 18.5523 5 18 5Z"
                                    fill="currentColor"
                                />
                                <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M5 1C2.79086 1 1 2.79086 1 5V19C1 21.2091 2.79086 23 5 23H19C21.2091 23 23 21.2091 23 19V5C23 2.79086 21.2091 1 19 1H5ZM19 3H5C3.89543 3 3 3.89543 3 5V19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19V5C21 3.89543 20.1046 3 19 3Z"
                                    fill="currentColor"
                                />
                            </svg>
                            </a>
                        </div>
                    </div>
                </FlexEvenly>
                <div className="row">
                    <div className="col-10 mx-auto col-md-6 text-center text-capatalize pt-5">
                        <small>WH Group Ltd. {new Date().getFullYear().toString()}</small>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default Footer
