import React, { Component } from 'react'
import styled from 'styled-components'
import { Container, Flex as Fle, Hash } from './../../../UI/Globals'
import media from './../../../UI/media'
import { fontPrimary, colorPrimary, colorBlack } from './../../../UI/variables'
import djIcon from './../../../images/dj-icon.png'
import nodeIcon from './../../../images/node-icon.png'
import pyIcon from './../../../images/py-icon.png'
import phpIcon from './../../../images/php-icon.png'
import rorIcon from './../../../images/ror-icon.png'
import reactIcon from './../../../images/react-icon.png'
import rnIcon from './../../../images/reactnative-icon.png'
import androidIcon from './../../../images/android-icon.png'
import flutterIcon from './../../../images/flutter-icon.png'

const Background = styled.div`
  background: #f5f5f5;
  padding: 20px 0px 40px 0;
`
const Title = styled.h2`
  text-align: left;
  font-family: ${fontPrimary};
  font-size: 40px;
  font-weight: bolder;
  margin: 20px 0 0 0;
  letter-spacing: -1px;
  z-index: 4;
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

const Flex = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
`

const Icon = styled.div`
  height: 125px;
  width: 125px;
  margin-top: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 25px 55px;
  position: relative;
  > div {
    transition: all 0.2s ease-out;
    height: 0;
    width: 100%;
    position: absolute;
    overflow: hidden;
    background: ${colorBlack};      
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 0px 5px 2px rgba(0, 0, 0, 0.17);
    opacity: 0.9;
    > p {
      opacity: 1;
      color: white;
      font-family: ${fontPrimary};
      font-weight: 600;
      font-size: 18px;
      text-align: center;
    }
  }
  > img {
    height: auto;
    width: 125px;
  }
  &:hover{
    > div {
      transform: scale(1.1);
      height: 100%;
      width: 100%;
    }
  }
  ${media.phone`
    height: 75px;
    width: 75px;
    margin: 20px 10px;
    > div {
    }
      > img {
        height: auto;
        width: 75px;
      }
  `}
`

export default class tech extends Component {
  render () {
    return (
      <>
        <Background>
          <Container>
            <Fle>
              <Title>Tech We Offer</Title>
            </Fle>
            <Flex>
              <Icon>
                <div>
                  <p>React</p>
                </div>
                <img alt='React' src={reactIcon} />
              </Icon>
              <Icon>
                <div>
                  <p>React Native</p>
                </div>
                <img alt='React Native' src={rnIcon} />
              </Icon>
              <Icon>
                <div>
                  <p>Node JS</p>
                </div>
                <img alt='Node JS' src={nodeIcon} />
              </Icon>
              <Icon>
                <div>
                  <p>Django</p>
                </div>
                <img alt='Django' src={djIcon} />
              </Icon>
              <Icon>
                <div>
                  <p>Python</p>
                </div>
                <img alt='Python' src={pyIcon} />
              </Icon>
              <Icon>
                <div>
                  <p>Ruby On Rails</p>
                </div>
                <img alt='Ruby On Rails' src={rorIcon} />
              </Icon>
              <Icon>
                <div>
                  <p>Flutter</p>
                </div>
                <img alt='Flutter' src={flutterIcon} />
              </Icon>
              <Icon>
                <div>
                  <p>Android</p>
                </div>
                <img alt='Android' src={androidIcon} />
              </Icon>
              <Icon>
                <div>
                  <p>PHP</p>
                </div>
                <img alt='PHP' src={phpIcon} />
              </Icon>
            </Flex>
          </Container>
        </Background>
        <Hash h='0px' id='portfolio' bg='#fff ' />
      </>
    )
  }
}
