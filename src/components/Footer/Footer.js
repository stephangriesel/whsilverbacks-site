import React from 'react'
import { useState, useEffect } from "react"
import { FaUserFriends } from 'react-icons/fa'
import { FaRegMap } from 'react-icons/fa'
import { FaEnvelope } from 'react-icons/fa'

import Layout from '../../UI/Layout/Layout'
import FlexEvenly from '../../UI/Layout/FlexEvenly/FlexEvenly'
import JustifyCenter from '../../UI/Layout/JustifyCenter/JustifyCenter'
import Inline from '../../UI/Inline/Inline'
import FooterWrapper from '../../UI/Footer/FooterWrapper'
import FooterEnd from '../../UI/Layout/FooterEnd/FooterEnd'
import Facebook from '../../UI/Social/Facebook/Facebook'
import Instagram from '../../UI/Social/Instagram/Instagram'

import ReactMarkdown from 'react-markdown'

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
        contactLineOne
        contactLineTwo
        contactLineThree  
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
        return "";
    }
    return (
        <Layout>
            <FooterWrapper>
                <FlexEvenly>
                    <div>
                        <h3>
                            <FaRegMap />
                            {footer.leftTitle}
                        </h3>
                        <div>
                            <ReactMarkdown>
                                {footer.leftParagraph}
                            </ReactMarkdown>
                        </div>
                    </div>
                    <div>
                        <h3>
                            <FaEnvelope />
                            {footer.middleTitle}
                        </h3>
                        <div>
                            <ReactMarkdown>
                                {footer.middleParagraph}
                            </ReactMarkdown>
                        </div>
                        <div>
                            <ReactMarkdown>
                                {footer.contactLineOne}
                            </ReactMarkdown>
                        </div>
                        <div>
                            <ReactMarkdown>
                                {footer.contactLineTwo}
                            </ReactMarkdown>
                        </div>
                        <div>
                            <ReactMarkdown>
                                {footer.contactLineThree}
                            </ReactMarkdown>
                        </div>
                    </div>
                    <div>
                        <div>
                            <h3>
                                <FaUserFriends />
                                {footer.rightTitle}
                            </h3>
                        </div>
                        <FlexEvenly>
                            <Inline>
                                {/* Facebook */}
                                <a href="https://www.facebook.com/WHSilverbacks">
                                    <Facebook />
                                </a>
                                {/* Instagram */}
                                <a href="https://www.instagram.com/whsilverbacks/">
                                    <Instagram />
                                </a>
                            </Inline>
                        </FlexEvenly>
                    </div>
                </FlexEvenly>
                <FooterEnd>
                    <JustifyCenter>
                        <small>WH Group Ltd. {new Date().getFullYear().toString()}</small>
                    </JustifyCenter>
                </FooterEnd>
            </FooterWrapper>
        </Layout>
    )
}

export default Footer
