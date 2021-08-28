import styled from 'styled-components'
import React, { Component } from 'react'
import { Container, Flex } from '../../UI/Globals'
import {
  colorPrimary,
  fontPrimary,
  fontSecondary,
  colorBlack
} from '../../UI/variables'
import { lighten, darken } from 'polished'
import media from '../../UI/media'

import ImageWebSite from './services/ImageWebSite'
import WebApp from './services/ImageWebAoo'
import ImageApk from './services/ImageApk'

const services = [
  {
    name: ' Web Application Development',
    description:
      'Managing a sales team is no easy task. You have the potential to either make or break your sales reps. But with our top-notch services in web application development we help businesses to enhance their possibilities and accelerate their productivity. We also provide an exclusive in-depth insight into our client\'s requirements. Our services are very flexible and highly scalable. We also use the latest framework to enhance the quality and performance of our product',
    Image: WebApp
  },

  {
    name: 'Hybrid/ Android Application Development',
    description:
      'Your Customers are mobile, is your business too?” We create and maintain impactful, compatible, stable and extremely customizable android applications along with backend for our clients. Our aim is to provide products that are user friendly and leave a long-term good impression on the businesses.',
    Image: ImageApk
  },
  {
    name: 'Website Development',
    description:
      'We have expertise in developing highly technically fast, flexible and dynamic websites along with backend. We understand and implement latest research to produce high end, super engaging and powerful, bold websites that shall directly increase the brand value of our client. Our services shall help you expand your reach in the market.',
    Image: ImageWebSite
  }
]

const Background = styled.div`
  background: ${lighten(0.15, colorPrimary)};
`

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
    background: ${lighten(0.1, colorPrimary)};
    z-index: -1;
  }
`

const SubTitle = styled.p`
  font-family: ${fontSecondary};
  color: rgba(0, 0, 0, 0.4);
  font-size: 20px;
  text-align: left;
  margin: 20px 0 20px 0;
`

const ImageBox = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  order: ${({ order }) => (order ? -1 : 1)};
`

const TextBox = styled.div`
  flex: 1;
  > p {
    flex: 1;
    font-family: ${fontSecondary};
    font-size: 18px;
    text-align: justify;
    color: ${lighten(0.1, colorBlack)};
    font-weight: lighter;
    line-height: 1.5;
  }
  > h2 {
    font-family: ${fontPrimary};
    text-align: left;
    color: ${darken(0.1, colorBlack)};
    font-size: 35px;
    letter-spacing: -1px;
    margin-bottom: 20px;
    text-transform: uppercase;
    ${media.phone`
      font-size: 40px;
    `}
  }
  ${media.phone`
    order: 2;
  `}
`

const Card = styled.div`
  margin: 0 0 70px 0;
  display: flex;

  ${media.phone`
    width: 100%;
    margin: 0 0 20px 0;
    flex-direction: column;
  `}
`

export default class Services extends Component {
  render () {
    return (
      <Background>
        <Container>
          <Flex>
            <Title>Services</Title>
          </Flex>
          <SubTitle>Explore our services!</SubTitle>
          <Flex
            justify='space-between'
            p='0 0 0px 0'
            column
            extra={media.phone`
            padding: 0 0 0 0;
          `}
          >
            {services.map(({ name, description, Image = () => <br /> }, i) => (
              <Card key={name}>
                <TextBox>
                  <h2>{name}</h2>
                  <p>{description}</p>
                </TextBox>
                <ImageBox order={i % 2 === 1 ? 1 : 0}>
                  <Image i={i} />
                </ImageBox>
              </Card>
            ))}
          </Flex>
        </Container>
      </Background>
    )
  }
}
