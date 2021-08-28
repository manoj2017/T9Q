import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Img from './PortfolioImageTemplate'

export default ({ i }) => (
  <StaticQuery
    query={graphql`
      query {
        placeholderImage: file(relativePath: { eq: "easehr.png" }) {
          childImageSharp {
            fluid(maxWidth: 600) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={data => (
      <Img loading='eager' i={i} fluid={data.placeholderImage.childImageSharp.fluid} />
    )}
  />
)
