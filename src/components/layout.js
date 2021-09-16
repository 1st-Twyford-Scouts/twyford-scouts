import * as React from 'react'
import { Link } from 'gatsby'
import './layout.css'
import { StaticImage, GatsbyImage, getImage } from 'gatsby-plugin-image'
import {
  container,
  topBar,
  navLinkItem,
  navLinkText,
  navLinkItemCurrent,
  content
} from './layout.module.css'
import { useStaticQuery, graphql } from 'gatsby'
import "@fontsource/nunito-sans"

const Layout = ({ children }) => {
    const query = useStaticQuery(graphql`
    query {
        allContentfulSection(sort: {order: ASC, fields: primaryTag}) {
          nodes {
            name
            primaryTag
            logo {
              gatsbyImageData
            }
            imageFileName
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
          <Link to="/" className={navLinkItem} activeClassName={navLinkItemCurrent}>
            <StaticImage className={navLinkItem}
              alt="1st Twyford Scouts"
              src="../images/Scouts1stTwyfordLinearWhite96px.png"/>
          </Link>
          {
            query.allContentfulSection.nodes.map(node => (
                    <Link key={node.primaryTag} to={"/" + node.primaryTag} className={navLinkItem} activeClassName={navLinkItemCurrent}>
                      <GatsbyImage className={navLinkText} alt={node.name} image={getImage(node.logo)}/>
                    </Link>
            ))              
          }
            <Link to="/how-to-contact-us" className={navLinkItem} activeClassName={navLinkItemCurrent}>
            <div className={navLinkText}>Contact Us</div>
            </Link>
          {
            query.allContentfulStaticPage.nodes.map(node => (
                    <Link key={node.url} to={"/" + node.url} className={navLinkItem} activeClassName={navLinkItemCurrent}>
                    <div className={navLinkText}>{node.buttonText}</div>
                    </Link>
            ))              
          }
      </nav>
      <main className={content}>
        {children}
      </main>
    </div>
  )
}

export default Layout