import React from "react"
import styled from "styled-components"
import media from "../../UI/media"
const ButtonRound = styled.button`
  background: #fff;
  height: 50px;
  width: 50px;
  border-radius: 50%;
  padding: 5px;
  ${media.phone`
    height: 35px;
    width: 35px;
  `};
`

const Image = styled.img`
  height: ${({ h }) => h || "auto"};
  width: ${({ w }) => w || "auto"};
  border-radius: ${({ round, roundness }) =>
    round ? "50%" : roundness || "0"};
  box-shadow: ${({ bs }) => bs || "0px 3px 6px rgba(0, 0, 0, 0.21)"};
  padding: ${({ p }) => p || "auto"};
  ${({ extra = "" }) => extra} ${media.phone`
    width: ${({ resW }) => resW || "auto"};
    height:  ${({ resH }) => resH || "inherit"};
    ${({ res = "" }) => res}
  `};
`

export default ({ className, onClick, left = 0 }) => (
  <div className={className}>
    <ButtonRound onClick={onClick}>
      <Image
        src="./../../static/right-arrow.png"
        h="30px"
        bs="none"
        extra={`transform: rotate(${left ? `180deg` : `0deg`});`}
        res="height: 20px;"
      />
    </ButtonRound>
  </div>
)
