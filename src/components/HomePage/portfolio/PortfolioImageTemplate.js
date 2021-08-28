import styled from 'styled-components'
import Img from 'gatsby-image'
import media from '../../../UI/media'

export default styled(Img)`
  width: ${({ web }) => (!web ? '200px' : 'auto')};
  height: ${({ web }) => (web ? '300px' : 'auto')};
  ${media.phone`
    width: 200px;
    height: auto;
    margin-bottom: 20px;
  `};
`
