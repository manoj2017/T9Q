import styled from 'styled-components'
import Img from 'gatsby-image'
import media from '../../../UI/media'

const width = i => {
  if (i === 0) {
    return '453px'
  }
  if (i === 1) {
    return '453px'
  }
  return '328px'
}

export default styled(Img)`
  width: ${({ i }) => width(i)};
  height: auto;
  ${media.phone`
    width: 100%;
    height: auto;
    margin-bottom: 20px;
  `};
`
