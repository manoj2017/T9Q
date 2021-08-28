import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import styled from 'styled-components'

import media from '../UI/media'

const ImageEx = styled(Img)`
  width: 200px;
  height: auto;
  ${media.phone`
    width: 200px;
    height: auto;
  `};
`
const Image = () => (
  <StaticQuery
    query={graphql`
      query {
        placeholderImage: file(relativePath: { eq: "logo.png" }) {
          childImageSharp {
            fluid(maxWidth: 600) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={data => (
      <ImageEx loading='eager' fadeIn fluid={data.placeholderImage.childImageSharp.fluid} />
    )}
  />
)
export default Image
