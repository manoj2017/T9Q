import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'

import { Container, A } from './../UI/Globals'
import { fontPrimary, colorBlack, colorWhite } from '../UI/variables'
import media from '../UI/media'

import LogoImage from './HeaderImage'

const FlexContainer = styled(Container)`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const Logo = styled.h1`
  flex: 3;
  margin: 0;
  > a {
    color: white;
    text-decoration: none;
    font-family: ${fontPrimary};
    font-weight: bold;
    letter-spacing: -1px;
    > h1 {
      margin: 0;
      font-size: 35px;
      display: none;
    }
  }

  ${media.phone`
    margin: 0 0 10px 0;
  `}
`

const A1 = styled(A)`
  font-size: 16px;
  color: ${colorBlack};
  opacity: 0.7;
  font-weight: 700;
  &:after {
    background: ${colorBlack};
  }
  &:hover {
    color: ${colorBlack};
    opacity: 1;
  }

  ${media.phone`
    font-size: 14px;
  `}
`

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  flex: 2;
  ${media.phone`
    width: 100%;
    flex-wrap: wrap;
    justify-content: center;
  `}
`

const VerticalLine = styled.div`
  width: 1px;
  background: #d4d4d4;
`

const HeaderBar = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  padding: 5px 0px;
  background: ${colorWhite};
  z-index: 100;
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.1);
  ${media.phone`
    padding: 0 0 20px 0;
  `}
`

const Header = ({ siteTitle }) => (
  <HeaderBar>
    <FlexContainer>
      <Logo>
        <Link to='/'>
          <h1>{siteTitle}</h1>
          <LogoImage />
        </Link>
      </Logo>
      <Nav>
        <A1 href='#aboutus'>About Us</A1>
        <VerticalLine />
        <A1 href='#services'>Services</A1>
        <VerticalLine />
        <A1 href='#portfolio'>Portfolio</A1>
        <VerticalLine />
        <A1 href='#team'>Team</A1>
        <VerticalLine />
        <A1 href='#contact'>Contact Us</A1>
      </Nav>
    </FlexContainer>
  </HeaderBar>
)

Header.propTypes = {
  siteTitle: PropTypes.string
}

Header.defaultProps = {
  siteTitle: ``
}

export default Header
