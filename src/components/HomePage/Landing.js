import React, { Component } from 'react'
import styled from 'styled-components'
import { colorBlack, fontPrimary, colorPrimary } from './../../UI/variables'
import { Container, Flex, ButtonLight as Button, Hash } from '../../UI/Globals'
import LandingImage from './LandingImage'
import media from '../../UI/media'
// import bg from './../../images/bg.png'

const Background = styled.div`
  background: ${colorBlack};
  padding: 50px 0 0px 0px;
  height: calc(100vh - 68px);
  display: flex;
  justify-content: center;
  align-items: center;
`

const Title = styled.h1`
  color: white;
  margin: 150px 0 0 0;
  font-family: ${fontPrimary};
  font-size: 35px;
  font-weight: lighter;
  > span {
    color: ${colorPrimary};
    font-weight: bold;
    font-size: 40px;
  }
  ${media.phone`
    margin: 45px 0 0 0;
    order: 2;
  `}
`

const Filler = styled.div`
  height: 70px;
`

const Image = styled(LandingImage)`
  height: 500px;
  width: 500px;
  ${media.phone`
    order: -1;
  `}
`

export default class Landing extends Component {
  render () {
    return (
      <>
        <Background>
          <Filler />
          <Container>
            <Flex justify='space-between'>
              <Title>
                <span>Scalable</span>,<br />
                <span>Sustainable </span>
                and <br />
                <span>Dynamic </span>
                software solutions.
                <Flex m='30px 0 0 0'>
                  <a href='#contact'>
                    <Button
                      primary
                      extra={media.phone`
                      margin: 20px 0 0 0;
                    `}
                    >
                      Let's Talk
                    </Button>
                  </a>
                  <a href='#services'>
                    <Button
                      m='0px 0px 0px 20px'
                      extra={media.phone`
                    margin: 20px 0 0 0;
                  `}
                    >
                      Our Services
                    </Button>
                  </a>
                </Flex>
              </Title>
              <Image />
            </Flex>
          </Container>
        </Background>
        <Hash bg={colorBlack} id='aboutus' h='68px' />
      </>
    )
  }
}
