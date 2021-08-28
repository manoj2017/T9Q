import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Img from './Image'

const Image = () => (
  <StaticQuery
    query={graphql`
      query {
        placeholderImage: file(relativePath: { eq: "team.png" }) {
          childImageSharp {
            fluid(maxWidth: 600) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={data => <Img loading='eager' fluid={data.placeholderImage.childImageSharp.fluid} />}
  />
)
export default Image
