import React from 'react'
import { StaticQuery, graphql } from 'gatsby'

import Header from './header'
import Normalize from './../UI/Normalize'
import Footer from './Footer'

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Normalize />
        <Header siteTitle={data.site.siteMetadata.title} />
        <div>
          <main>{children}</main>
          <Footer />
        </div>
      </>
    )}
  />
)

export default Layout
