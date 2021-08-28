import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Img from './ImageTemplate2'

export default ({ i }) => (
  <StaticQuery
    query={graphql`
      query {
        placeholderImage: file(relativePath: { eq: "market.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 600) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={data => (
      <Img loading='eager' i={i} web fluid={data.placeholderImage.childImageSharp.fluid} />
    )}
  />
)
