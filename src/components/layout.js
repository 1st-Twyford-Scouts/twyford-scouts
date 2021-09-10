import * as React from 'react'
import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import {
  container,
  heading,
  navLinks,
  navLinkItem,
  navLinkText
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
      <title>{pageTitle}</title>
      <nav>
      <StaticImage
        alt="Clifford, a reddish-brown pitbull, posing on a couch and looking stoically at the camera"
        src="../images/Scouts1stTwyfordLinearPurple60px.png"/>
        <ul className={navLinks}>
          <li className={navLinkItem}>
            <Link to="/" className={navLinkText}>
              Home
            </Link>
          </li>
          <li className={navLinkItem}>
            <Link to="/contact" className={navLinkText}>
              Contact Us
            </Link>
          </li>
          {
            sections.allContentfulSection.nodes.map(node => (
                <li  className={navLinkItem} key = {node.name}>
                    <Link to={"/sections/" + node.primaryTag} class={navLinkText}>
                    {node.name}
                    </Link>
                </li>
            ))              
          }
        </ul>
      </nav>
      <main>
        <h1 className={heading}>{pageTitle}</h1>
        {children}
      </main>
    </div>
  )
}

export default Layout