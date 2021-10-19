import * as React from 'react'
import { Link } from 'gatsby'
import './layout.css'
import { StaticImage, GatsbyImage, getImage } from 'gatsby-plugin-image'
import {
  container,
  topBar,
  navItem,
  navItemContainer,
  navItemFill,
  navSubItem,
  navItemCurrent,
  content,
  backgroundImage
} from './layout.module.css'
import { useStaticQuery, graphql } from 'gatsby'
import "@fontsource/nunito-sans"
import { Fade } from 'react-slideshow-image'
import 'react-slideshow-image/dist/styles.css'
import { Navbar, Container, Nav, NavDropdown, Row, Col } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

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
        allContentfulStaticPage (filter: {linkFromNav: {eq: true}}) {
          nodes {
            buttonText
            url
          }
        }
        contentfulSection(primaryTag: {eq: "group"}) {
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
            {query.contentfulSection.backgroundImages.map(image =>
              <div className="each-fade">
                <GatsbyImage className={backgroundImage} alt={image.title} image={getImage(image)} />
              </div>
              )}
            </Fade>
          }
          <Navbar className={topBar + " " + navItemContainer} variant="dark" expand="lg">
                <Navbar.Brand className={navItem + " " + navItemFill}>
                  <Link to="/" className={navItemFill} activeClassName={navItemCurrent} >
                  <StaticImage
                    className={navSubItem}
                    alt="1st Twyford Scouts"
                    src="../images/Scouts1stTwyfordLinearWhite96px.png"/>
                  </Link>
                </Navbar.Brand>
                <Navbar.Collapse id="basic-navbar-nav" className={navItemContainer}>
                  <Nav className={navItemContainer}>
                    {            
                      query.allContentfulSection.nodes.map(node => (
                          <Nav.Item className={navItem + " " + navItemFill}>
                            <Link className={navItemFill} activeClassName={navItemCurrent} key={node.primaryTag} to={"/" + node.primaryTag} >
                              <GatsbyImage className={navSubItem} alt={node.name} image={getImage(node.logo)}/>
                            </Link>
                          </Nav.Item>
                      ))              
                    }
                    <NavDropdown title="More" id="basic-nav-dropdown" className={navItemFill}>
                      <NavDropdown.Item className={navItem}>
                        <Link to="/how-to-contact-us" >
                          <div>Contact Us</div>
                        </Link>
                      </NavDropdown.Item>
                      {
                        query.allContentfulStaticPage.nodes.map(node => (
                          <NavDropdown.Item className={navItem}>
                            <Link key={node.url} to={"/" + node.url} >
                            <div>{node.buttonText}</div>
                            </Link>
                          </NavDropdown.Item>
                        ))              
                      }
                    </NavDropdown>
                  </Nav>
                </Navbar.Collapse>
          </Navbar>
          <main className={content}>
            {children}
          </main>
        </div>    
  )
}

export default Layout