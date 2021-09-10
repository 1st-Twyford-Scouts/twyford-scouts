import * as React from 'react'
import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import {
  container,
  topBar,
  topBarStaticElement,
  heading,
  navLinks,
  navLinkItem,
  navLinkText,
  content
} from './layout.module.css'
import { useStaticQuery, graphql } from 'gatsby'

const Layout = ({ pageTitle, children }) => {
    const sections = useStaticQuery(graphql`
    query {
        allContentfulSection {
          nodes {
            name
            primaryTag
            metadata {
              tags {
                name
              }
            }
          }
        }
      }`)

      return (
    <div className={container}>
      <nav className={topBar}>
        <StaticImage className={topBarStaticElement}
          alt="1st Twyford Scouts"
          src="../images/Scouts1stTwyfordLinearWhite96px.png"/>
          <div className={navLinkItem}>
            <Link to="/" className={navLinkText}>
              Home
            </Link>
          </div>
          {
            sections.allContentfulSection.nodes.map(node => (
                <div className={navLinkItem} key = {node.name}>
                    <Link to={"/sections/" + node.primaryTag} className={navLinkText}>
                    {node.name}
                    </Link>
                </div>
            ))              
          }
          <div className={navLinkItem}>
            <Link to="/contact" className={navLinkText}>
              Contact Us
            </Link>
          </div>
      </nav>
      <main className={content}>
        <h1 className={heading}>{pageTitle}</h1>
        {children}
      </main>
    </div>
  )
}

export default Layout