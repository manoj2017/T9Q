import React, { Component } from 'react'
import styled from 'styled-components'

import media from './../UI/media'

const Iframe = styled.iframe`
  flex: 1;
  height: 250px;
  ${media.phone`
    width: 100%;
    margin-top: 50px;
  `}
`

export default class Map extends Component {
  render () {
    return (
      <Iframe
        src='https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13778.014851314882!2d78.0188293!3d30.3081871!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xc16a94120a2a865!2sThe+Nine+Queens!5e0!3m2!1sen!2sin!4v1562351092006!5m2!1sen!2sin'
        width={600}
        height={450}
        frameBorder={0}
        style={{ border: 0 }}
        allowFullScreen
      />
    )
  }
}
