import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'

import Landing from './../components/HomePage/Landing'
import About from './../components/HomePage/AboutUs'
import Services from './../components/HomePage/Services'
import PortFolio from './../components/HomePage/portfolio'
import Team from './../components/HomePage/Team'
import Tech from './../components/HomePage/tech'
import DemoPlugin from './../components/HomePage/DemoPlugin'

const IndexPage = () => (
  <Layout>
    <SEO title='Home' keywords={[`gatsby`, `application`, `react`]} />
    <Landing />
    <About />
    <Services />
    <Tech />
    <PortFolio />
    <Team />
    <DemoPlugin />
  </Layout>
)

export default IndexPage
