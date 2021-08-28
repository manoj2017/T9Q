import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Img from './ImageTemplate2'

export default ({ i }) => (
  <StaticQuery
    query={graphql`
      query {
        placeholderImage: file(relativePath: { eq: "snb.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 600) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={data => (
      <Img loading='eager' web i={i} fluid={data.placeholderImage.childImageSharp.fluid} />
    )}
  />
)
