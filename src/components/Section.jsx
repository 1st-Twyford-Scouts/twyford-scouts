import * as React from 'react'
import Layout from './layout'
import { Link } from 'gatsby'
import { renderRichText} from "gatsby-source-contentful/rich-text"
import NewsStory from './newsStory'
import Notice from './notice'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { introText, introLogo, sectionList } from './section.module.css'

const Section = ({data}) => {

  const options = {
  }

  return (
    <Layout images={data.contentfulSection.backgroundImages}>
      <div>
      <GatsbyImage className={introLogo} alt={data.contentfulSection.name} image={getImage(data.contentfulSection.logo)}/>
      <div className={introText}>
      {
        data.contentfulSection.intro && renderRichText(data.contentfulSection.intro, options)
      }
      </div>
      {data.contentfulSection.subSections && data.contentfulSection.subSections.length > 0 &&
        <div>
          <h1>Sections</h1>
          <div className={sectionList}>
          {
            data.contentfulSection.subSections.map(node =>(
              <div>
              {node.hasPage &&
              <p>
                <Link key={node.primaryTag} to={"/" + node.primaryTag}>
                  <span>{node.name}</span>
                </Link>
                <span> - {node.summary}</span>
              </p>
              }
              {!node.hasPage && <p>{node.name} - {node.summary}</p>}
              </div>
              ))
            }
          </div>
        </div>
      }
      {data.allContentfulNotice.nodes.length > 0 &&
        <div>
          <h1>{data.contentfulSection.name} Notices</h1>
          {
            data.allContentfulNotice.nodes.map(node =>(<Notice key={node.contentful_id} notice={node}></Notice>))
          }
          </div>
      }
      {data.allContentfulNewsStory.nodes.length > 0 &&
        <div>
          <h1>{data.contentfulSection.name} News</h1>
          {
            data.allContentfulNewsStory.nodes.map(node =>(<NewsStory key={node.contentful_id} newsStory={node}></NewsStory>))
          }
        </div>
      }
      </div>
    </Layout>
  )
}

export default Section
