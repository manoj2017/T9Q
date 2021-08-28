import React, { Component } from 'react'
import { Container, Flex } from '../../UI/Globals'
import styled from 'styled-components'
import {
  fontPrimary,
  fontSecondary,
  colorWhite,
  colorBlack,
  colorPrimary
} from '../../UI/variables'
import Image1 from './team/Image1'
import Image2 from './team/Image2'
import Image3 from './team/Image3'
import Image4 from './team/Image4'
import Image5 from './team/Image5'
import Image6 from './team/Image6'
import { lighten } from 'polished'
import media from '../../UI/media'

const Title = styled.h2`
  text-align: left;
  font-family: ${fontPrimary};
  font-size: 50px;
  font-weight: bolder;
  margin: 0px 0 0 0;
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

const Background = styled.div`
  padding: 40px 0px;
`

const Link = styled.a`
  color: #0077b5;
  text-decoration: none;
  font-family: ${fontPrimary};
  font-size: 17px;
  text-align: center;
  margin: 0;
  font-weight: 600;
  opacity: 0.8;
  transition: all 0.2s ease-in-out;
  &:hover {
    opacity: 1;
  }
`


const ImageBox = styled.div`
  height: 150px;
  flex: 1;
  text-align: center;
  > img {
    border-radius: 50%;
    height: 300px;
    width: 100%;
  }
  ${media.phone`
    height: auto;
    width: 100%;
    display: flex;
    justify-content: center;
  `}
`

const TextBox = styled.div`
  flex: 2;
  text-align: center;
  > h2 {
    text-transform: uppercase;
    font-size: 25px;
    font-family: ${fontPrimary};
    color: ${colorBlack};
    font-weight: bold;
    margin-bottom: 10px;
    text-align: center;
    ${media.phone`
      margin-top: 0px;
    `}
  }
  > p {
    font-size: 18px;
    font-weight: lighter;
    line-height: 1.3;
    font-family: ${fontSecondary};
    color: ${lighten(0.3, colorBlack)};
    text-align: center;
    margin-bottom: 5px;
  }
`

const Grid = styled.div`
  display: grid;
  grid-gap: 5px;
  grid-template-columns: 1fr 1fr 1fr;
  /* grid-template-rows: 365px 365px; */
  ${media.phone`
    grid-template-columns: 1fr;
  `}
`

const Member = styled.div`
  background: ${colorWhite};
  transition: all 0.2s ease-out;
  &:hover {
    box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.1);
  }
  padding: 20px;
`

export default class Team extends Component {
  state = {
    team: [
      {
        name: 'Arpit Gupta',
        description: [
          'Android Development | Jiit'
          // 'An Android Enthusiast, Arpit Gupta has a affinity towards developing new android apps and websites. As our team member, he strives hard to accomplish his daily goals. He has been a coordinator at Google’s Developer Group for the past 2 years.'
          /* "  and has created very uselful applications which are changing lives of people. One such example is the app for Josh Talks which was also featured in Economic Times and Forbes 30 under 30 Asia.  He is a waffle-lover and owns his waffles' shop in Delhi. Join him for a conversation over coffee and waffle anytime", */
        ],
        Img: Image2,
        link: 'https://www.linkedin.com/in/arpit7997/'
      },
      {
        name: 'Garvit Gupta',
        description: [
          'BD | Graphic Design | DTU'
          // 'Garvit is the head of business development of our organization and has a lot of in hand experience not just in the field of Website development but also in graphic designing. We consider his creative insight and analytical abilities a boon to the Nine queens.'
          /*           "As an associate consultant at EY, he has had a chance to solve issues pertaining to businesses in different countries such as South Africa and Philippines. Having worked with UPCL, ITC, Garvit aspires to club his talents and potential to build this organization into one of the leading ones.", */
        ],
        Img: Image3,
        link: 'https://www.linkedin.com/in/garvit101293/'
      },
      {
        name: 'Manoj Kumar',
        description: ['Back-End Developer | Ruby On Rails | IPU'],
        Img: Image4,
        link: 'https://www.linkedin.com/in/manoj-kumar-93105513a'
      },
      {
        name: 'Rishabh Aggarwal',
        description: ['Back-end Developer | Ruby on Rails | DIT'],
        Img: Image5,
        link: 'https://www.linkedin.com/in/rishabh-aggarwal-01a8ab138/'
      },
      {
        description: ['Front-End Mobile Developer | Flutter | PEC'],
        name: 'Dhruv Singla',
        Img: Image6,
        link: 'https://www.linkedin.com/in/dhruv-singla-116598135/'
      }
    ]
  }
  render () {
    return (
      <Background>
        <Container>
          <Flex>
            <Title> Meet Our Team </Title>
          </Flex>
          <Grid>
            {this.state.team.map(({ name, description, Img, link }) => (
              <Member key={name}>
                <Flex align='center' column justify='space-between'>
                  <ImageBox>
                    <Img />
                  </ImageBox>
                  <TextBox>
                    <h2>{name}</h2>
                    <p>{description}</p>
                    <Link target="_blank" href={link}>LinkedIn</Link>
                  </TextBox>
                </Flex>
              </Member>
            ))}
          </Grid>
        </Container>
      </Background>
    )
  }
}
