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
            <Link to="/" className={navLinkItem}>
              <div className={navLinkText}>Home</div>
            </Link>
          {
            sections.allContentfulSection.nodes.map(node => (
                    <Link to={"/sections/" + node.primaryTag} className={navLinkItem}>
                    <div className={navLinkText}>{node.name}</div>
                    </Link>
            ))              
          }
          <div className={navLinkItem}>
            <Link to="/contact" className={navLinkItem}>
            <div className={navLinkText}>Contact Us</div>
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