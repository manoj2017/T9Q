import React from "react"
import { StaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import Img from "gatsby-image"
import { colorPrimary } from "./../../../UI/variables"
import media from "./../../../UI/media"

const Image = styled(Img)`
  width: 30px;
  height: 30px;
  transform: rotate(${({ left }) => (!left ? "180deg" : "0deg")});
  ${media.phone`
    width: 20px;
    height: 20px;
  `}
`
const Arrow = ({ left }) => (
  <StaticQuery
    query={graphql`
      query {
        placeholderImage: file(relativePath: { eq: "left-arrow.png" }) {
          childImageSharp {
            fluid(maxWidth: 200) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={data => (
      <Image left={left} fluid={data.placeholderImage.childImageSharp.fluid} />
    )}
  />
)

const ButtonRound = styled.button`
  box-shadow: 0px 3px 5px rgba(0, 0, 0, 0.21);
  background: ${colorPrimary};
  padding: 10px;
  border-radius: 50%;
  border: 0;
  &:hover {
    box-shadow: 0px 3px 5px rgba(0, 0, 0, 0.27);
  }
  ${media.phone`
    padding: 5px;
  `}
`

export default ({ className, onClick, left = 0 }) => (
  <div className={className}>
    <ButtonRound onClick={onClick}>
      <Arrow left={left} />
    </ButtonRound>
  </div>
)
