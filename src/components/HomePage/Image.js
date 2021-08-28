import Img from "gatsby-image"
import styled from "styled-components"

import media from "./../../UI/media"

export default styled(Img)`
  width: 550px;
  height: auto;
  ${media.phone`
    width: 100%;
    height: 253px;
    margin-top: 20px;
  `};
`
