import styled, { css } from 'styled-components'
import media from './media'
import {
  fontPrimary,
  colorBlack,
  colorPrimary,
  fontSecondary,
  colorWhite
} from './variables'

export const Container = styled.div`
  max-width: 1300px;
  width: 90%;
  margin: 0 auto;
  display: ${({ flex }) => (flex ? 'flex' : 'block')};
  padding: ${({ p }) => p || 0};
  ${media.phone`
    flex-direction: column;
  `};
`

export const FlexMixin = css`
  flex: ${({ flex }) => flex || 0};
  display: flex;
  width: ${({ w }) => w || '100%'};
  height: ${({ h }) => h || 'inherit'};
  flex-direction: ${({ column }) => (column ? 'column' : 'row')};
  justify-content: ${({ justify }) => justify || 'default'};
  align-items: ${({ align }) => align || 'default'};
  margin: ${({ m }) => m || 0};
  padding: ${({ p }) => p || 0};
  flex-wrap: ${({ wrap }) => (wrap ? 'wrap' : 'no-wrap')};
  ${({ extra }) => extra || ''};
  ${media.phone`
    flex-direction: column;
    ${({ res = '' }) => res}
  `};
`

export const Flex = styled.div`
  flex: ${({ flex }) => flex || 0};
  display: flex;
  width: ${({ w }) => w || '100%'};
  height: ${({ h }) => h || 'inherit'};
  flex-direction: ${({ column }) => (column ? 'column' : 'row')};
  justify-content: ${({ justify }) => justify || 'default'};
  align-items: ${({ align }) => align || 'default'};
  margin: ${({ m }) => m || 0};
  padding: ${({ p }) => p || 0};
  flex-wrap: ${({ wrap }) => (wrap ? 'wrap' : 'no-wrap')};
  ${({ extra }) => extra || ''};
  ${media.phone`
    flex-direction: column;
    ${({ res = '' }) => res}
  `};
`

export const A = styled.a`
  text-decoration: none;
  font-size: ${({ fs }) => fs || '18px'};
  font-family: ${fontPrimary};
  padding: ${({ p }) => p || 0};
  transition: padding 0.2s ease-out;
  transition: color 0.15s ease-in;
  transition: opacity 0.15s ease-in;
  cursor: pointer;
  color: black;
  &:after {
    content: " ";
    display: block;
    width: 0;
    height: 2px;
    background: ${colorBlack};
    transition: width 0.15s ease-in;
  }
  &:hover {
    &:after {
      background: #052391;
      width: 100%;
    }
    color: #052391;
  }
  ${({ extra = '' }) => extra};
`

export const ButtonLight = styled.button`
  border: solid 2px ${({ primary }) => (primary ? colorPrimary : colorWhite)};
  padding: ${({ p }) => p || '10px 30px'};
  border-radius: 25px;
  background: ${({ primary }) => (primary ? colorPrimary : 'none')};
  transition: all 0.3s ease-out;
  font-family: ${fontSecondary};
  font-size: 18px;
  color: ${colorWhite};
  margin: ${({ m }) => m || '0'};
  cursor: pointer;
  > a {
    color: ${({ col }) => col || '#000'};
    transition: all 0.3s ease-out;
    font-family: ${fontPrimary};
    font-size: 18px;
    text-decoration: none;
  }
  &:hover {
    background: ${({ colBg }) => colBg || colorPrimary};
    border-color: ${({ colBg }) => colBg || colorPrimary};
    color: #fff;
    transform: ${({ primary }) => (primary ? 'scale(1.1)' : 'none')};
    > a {
      color: #fff;
    }
  }
  ${({ extra = '' }) => extra};
`
export const Hash = styled.div`
  background: ${({ bg }) => bg || colorWhite};
  height: ${({ h = '80px' }) => h};
  ${media.phone`
    height: 108px;
  `}
`
