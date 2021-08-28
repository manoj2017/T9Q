import React, { Component } from 'react'
import styled from 'styled-components'
import { Container, Flex, Hash } from '../../UI/Globals'
import { fontPrimary, fontSecondary, colorPrimary } from '../../UI/variables'
import Image from './AboutImage'
import media from '../../UI/media'

const Title = styled.h2`
  text-align: left;
  font-family: ${fontPrimary};
  font-size: 50px;
  font-weight: bolder;
  margin: 40px 0 0 0;
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

const Text = styled.p`
  font-family: ${fontSecondary};
  color: rgba(0, 0, 0, 0.7);
  font-size: 18px;
  flex: 1;
  line-height: 1.5;
  display: flex;
  align-items: center;
  text-align: justify;
`

const ImageEx = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
`

export default class AboutUs extends Component {
  render () {
    return (
      <div>
        <Container>
          <Flex>
            <Title>About Us</Title>
          </Flex>
          <Flex
            p='40px 0px'
            extra={media.phone`
            padding: 0;
          `}
          >
            <ImageEx>
              <Image />
            </ImageEx>
            <Text>
              The Nine Queens is a leading Software Development company offering
              its inimitable proficiency and end to end services. We are greatly
              pivoted on latest technology. Established one year ago, The
              Nine Queens aims to render its clients top notch, scalable,
              sustainable and dynamic software solutions.
            </Text>
          </Flex>
          <Hash id='services' />
        </Container>
      </div>
    )
  }
}
