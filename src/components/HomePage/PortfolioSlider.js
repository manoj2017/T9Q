import React from "react"
import Slider from "react-slick"
import Arrow from "./portfolio/Arrow"
import styled from "styled-components"

// UI Components
import { Container, Flex } from "./../../UI/Globals"

import data from "./portfolio/porfolioData"

import media from "./../../UI/media"
import {
  // colorPrimary,
  // colorBlack,
  fontPrimary,
  fontSecondary,
  // colorWhite,
} from "./../../UI/variables"

const Heading = styled.h2`
  font-family: ${({ secondary }) => (secondary ? fontSecondary : fontPrimary)};
  font-size: ${({ fs }) => fs || "30px"};
  margin: ${({ m }) => m || 0};
  text-align: ${({ center }) => (center ? "center" : "left")};
  color: ${({ col }) => col || "rgb(0, 0, 0)"};
  ${media.phone`
    font-size: ${({ resFs }) => resFs || "inherit"};
    ${({ res = "" }) => res};
  `};
`

const Text = styled.p`
  font-family: ${({ secondary }) => (secondary ? fontSecondary : fontPrimary)};
  text-align: justify;
  font-size: ${({ fs }) => fs || "16px"};
  margin: ${({ m }) => m || 0};
  padding: ${({ p }) => p || 0};
  color: ${({ col }) => col || "rgb(0, 0, 0)"};
  line-height: ${({ lheight }) => lheight || 1};
  width: ${({ w }) => w || "auto"};
  ${media.phone`
    ${({ res = "" }) => res}
  `};
`

const Wrapper = styled.div`
  width: ${({ w }) => w || "auto"};
  height: ${({ h }) => h || "auto"};
  margin: 0;
  padding: ${({ p }) => p || "auto"};
  flex: ${({ flex }) => flex || "auto"};
  flex-wrap: ${({ wrap }) => (wrap ? "wrap" : "no-wrap")};
  text-align: ${({ center }) => (center ? "center" : "left")};
  ${media.phone`
    ${({ res = "" }) => res}
  `};
`

export default class SimpleSlider extends React.Component {
  state = {
    products: data,
  }

  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      dotsClass: "slick-dots-custom",
      nextArrow: <Arrow />,
      prevArrow: <Arrow left={1} />,
      autoplay: true
    }
    return (
      <Container>
        <Slider {...settings}>
          {this.state.products.map(({ name, Image, description, tagline }) => (
            <div key={name}>
              <Flex  res="width: 85%; margin: 0 auto;">
                <Flex h='400px' justify="center" align="center" flex="5" res="order: 2; height: 419px;">
                  <Image />
                </Flex>
                <Wrapper flex="1">
                  <Heading
                    fs="40px"
                    col="rgba(0, 0, 0, 0.9)"
                    m="0px 0 0 0"
                    res="font-size: 30px;"
                  >
                    {name}
                  </Heading>
                  <Text
                    fs="20px"
                    lheight="1.5"
                    col="rgba(0, 0, 0, 0.9)"
                    p="10px 0 30px"
                    res="font-size: 20px;"
                  >
                    {tagline}
                  </Text>
                  <Text
                    fs="17px"
                    lheight="1.2"
                    col="rgba(0, 0, 0, 0.9)"
                    w="450px"
                    res="display: none;"
                  >
                    {description}
                  </Text>
                </Wrapper>
              </Flex>
            </div>
          ))}
        </Slider>
      </Container>
    )
  }
}
