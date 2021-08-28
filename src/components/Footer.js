import React, { Component } from 'react'
import { Container, Flex } from '../UI/Globals'
import styled from 'styled-components'
import { Phone } from 'styled-icons/icomoon/Phone'
import { Email } from 'styled-icons/material/Email'

import {
  colorBlack,
  fontPrimary,
  colorWhite,
  fontSecondary
} from '../UI/variables'
import { darken } from 'polished'
import media from '../UI/media'

import Map from './Map'

const Background = styled.div`
  background: ${colorBlack};
  padding: 40px 0 0 0;
`

const About = styled.div`
  flex: 1;
  > h1 {
    font-family: ${fontPrimary};
    font-weight: bolder;
    font-size: 30px;
    letter-spacing: -1px;
    color: ${darken(0.5, colorWhite)};
  }
  > p {
    font-family: ${fontSecondary};
    font-weight: lighter;
    font-size: 18px;
    /* letter-spacing: 1px; */
    text-align: justify;
    color: ${darken(0.6, colorWhite)};
    padding: 0 100px 0 0;
    margin-left: 20px;
    ${media.phone`
      padding: 0 30px;
      margin-left: 0px;
    `}
  }
`

const PhoneIcon = styled(Phone)`
  color: ${darken(0.6, colorWhite)};
  height: 20px;
  margin-right: 20px;
`
const EmailIcon = styled(Email)`
  color: ${darken(0.6, colorWhite)};
  height: 20px;
  margin-right: 20px;
`

const Contact = styled.div`
  flex: 1;
  > h1 {
    font-family: ${fontPrimary};
    font-weight: bolder;
    font-size: 30px;
    letter-spacing: -1px;
    color: ${darken(0.5, colorWhite)};
  }
  > div {
    margin-left: 20px;
    > span {
      font-family: ${fontPrimary};
      font-weight: bold;
      font-size: 18px;
      letter-spacing: -1px;
      color: ${darken(0.5, colorWhite)};
    }
    > a {
      text-decoration: none;
      color: ${darken(0.6, colorWhite)};
      font-family: ${fontSecondary};
      font-size: 15px;
      padding: 0px 0;
      display: flex;
      align-items: center;
      margin: 0px 0 0 0;
    }
  }
`

const Looter = styled.div`
  background: ${darken(0.5, colorBlack)};
  padding: 20px 0px;
  text-align: center;
  color: ${darken(0.5, colorWhite)};
  width: 100%;
  margin-top: 50px;
`

export default class Footer extends Component {
  render () {
    return (
      <Background id='contact'>
        <Container>
          <Flex>
            <About>
              <h1>The Nine Queens</h1>
              <p>
                The Nine Queens is a leading Software Development company
                offering its inimitable proficiency and end to end services. We
                are greatly pivoted on latest technology. Established half a
                decade ago, The Nine Queens aims to render its clients top
                notch, scalable, sustainable and dynamic software solutions.
              </p>
            </About>
            <Contact>
              <h1>Contact Us</h1>
              <div>
                {/* <a href="#">
                  Second Floor, Suvidha Supermarket, <br />
                  220/105, Saharanpur Road, <br />
                  Patel Nagar, Dehradun - 248001
                </a>
                <br /> */}
                {/* <span></span> */}
                <a href='tel:+919368526729'><PhoneIcon /> +91-9368526729</a> <br />
                {/* <span>Email:</span> */}
                <a href='mailto:admin@theninequeens.com'>
                  <EmailIcon />
                  admin@theninequeens.com
                </a>
              </div>
            </Contact>
            <Map />
          </Flex>
        </Container>
        <Looter>&copy; All right reserved by The Nine Queens.</Looter>
      </Background>
    )
  }
}
