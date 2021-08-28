import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"

import media from "../../../UI/media"

const ImageEx = styled(Img)`
  width: 150px;
  height: auto;
  border-radius: 50%;
  ${media.phone`
    width: 200px;
    height: 200px;
    margin-bottom: 20px;
  `};
`
const Image = () => (
  <StaticQuery
    query={graphql`
      query {
        placeholderImage: file(relativePath: { eq: "rishabh.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 600) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={data => (
      <ImageEx fluid={data.placeholderImage.childImageSharp.fluid} />
    )}
  />
)
export default Image
