import React, { Component } from 'react'
import styled from 'styled-components'
import PortfolioSlider from './PortfolioSlider'
import { Container, Flex, Hash } from './../../UI/Globals'
import {
  fontPrimary,
  // fontSecondary,
  // colorWhite,
  // colorBlack,
  colorPrimary
} from '../../UI/variables'

const Title = styled.h2`
  text-align: left;
  font-family: ${fontPrimary};
  font-size: 50px;
  font-weight: bolder;
  margin: 70px 0 0 0;
  letter-spacing: -1px;
  position: relative;
  &:after {
    content: " ";
    display: block;
    width: 100%;
    height: 27px;
    position: absolute;
    bottom: 0;
    background: ${colorPrimary};
    z-index: -1;
  }
`

export default class Portfolio extends Component {
  render () {
    return (
      <Container>
        <Flex m='0 0 60px 0' res='margin: 0;'>
          <Title>Portfolio</Title>
        </Flex>
        <PortfolioSlider />
        <Hash id='team' />
      </Container>
    )
  }
}
