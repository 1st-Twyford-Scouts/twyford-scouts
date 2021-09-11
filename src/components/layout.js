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
    const query = useStaticQuery(graphql`
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
        allContentfulStaticPage {
          nodes {
            buttonText
            url
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
            query.allContentfulSection.nodes.map(node => (
                    <Link to={"/" + node.primaryTag} className={navLinkItem}>
                    <div className={navLinkText}>{node.name}</div>
                    </Link>
            ))              
          }
          <div className={navLinkItem}>
            <Link to="/how-to-contact-us" className={navLinkItem}>
            <div className={navLinkText}>Contact Us</div>
            </Link>
          </div>
          {
            query.allContentfulStaticPage.nodes.map(node => (
                    <Link to={"/" + node.url} className={navLinkItem}>
                    <div className={navLinkText}>{node.buttonText}</div>
                    </Link>
            ))              
          }
      </nav>
      <main className={content}>
        <h1 className={heading}>{pageTitle}</h1>
        {children}
      </main>
    </div>
  )
}

export default Layout