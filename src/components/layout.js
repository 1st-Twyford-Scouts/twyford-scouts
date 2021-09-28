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
  content,
  backgroundImage
} from './layout.module.css'
import { useStaticQuery, graphql } from 'gatsby'
import "@fontsource/nunito-sans"
import { Fade } from 'react-slideshow-image'
import 'react-slideshow-image/dist/styles.css'

const Layout = ({ children, images }) => {
    const query = useStaticQuery(graphql`
    query {
      allContentfulSection(
        sort: {order: ASC, fields: primaryTag}
        filter: {linkFromNav: {eq: true}}
      ) {
        nodes {
          name
          primaryTag
          logo {
            gatsbyImageData
          }
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
        contentfulGroup {
          backgroundImages {
            gatsbyImageData(width: 1280)
            title
          }       
        }
        contentfulAsset(title: {eq: "canoes-jpg"}) {
          gatsbyImageData(width: 1280)
          title
        }        
      }`)

      const slideShowProps = {
        duration: 20000,
        arrows: false,
        canSwipe: false
      }

      return (
    <div className={container}>
      {images && images.length > 0 &&
        <Fade {...slideShowProps}>
        {images.map(image =>
          <div className="each-fade">
            <GatsbyImage className={backgroundImage} alt={image.title} image={getImage(image)} />
          </div>
          )}
        </Fade>
      }
      {(!images || images.length === 0) &&
        <Fade {...slideShowProps}>
        {query.contentfulGroup.backgroundImages.map(image =>
          <div className="each-fade">
            <GatsbyImage className={backgroundImage} alt={image.title} image={getImage(image)} />
          </div>
          )}
        </Fade>
      }
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