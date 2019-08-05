import React from "react"

import { Helmet } from "react-helmet"

import { Container } from '@material-ui/core';

import { useStaticQuery, graphql } from "gatsby"

export default ({ children }) => {
    const data = useStaticQuery(
        graphql`
          query {
            site {
              siteMetadata {
                title
              }
            }
          }
        `
      )
    return (
    <Container>
        <Helmet
                    defaultTitle={data.site.siteMetadata.title}
                    titleTemplate={"%s - "+data.site.siteMetadata.title}
            >
            <meta charSet="utf-8" />
            <link rel="canonical" href="http://mysite.com/example" />
        </Helmet>
        <h3>{data.site.siteMetadata.title}</h3>
        {children}
    </Container>
)
}