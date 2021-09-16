import * as React from 'react'
import Layout from '../components/layout'
import { graphql, Link } from 'gatsby'
import { renderRichText} from "gatsby-source-contentful/rich-text"
import NewsStory from '../components/newsStory'
import Notice from '../components/notice'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { linkWithoutUnderline } from '../components/common.module.css'
import { introText, introLogo } from './section.module.css'

const SectionPage = ({data}) => {

  const options = {
  }

  return (
    <Layout pageTitle={data.contentfulSection.name + " Section"}>
      <div>
      <GatsbyImage className={introLogo} alt={data.contentfulSection.name} image={getImage(data.contentfulSection.logo)}/>
      <div className={introText}>
      {
        data.contentfulSection.intro && renderRichText(data.contentfulSection.intro, options)
      }
      </div>
      {data.allContentfulSubSection.nodes.length > 0 &&
        <div>
          <h1>Sections</h1>
          {
            data.allContentfulSubSection.nodes.map(node =>(
              <div>
              {node.hasPage &&
                <Link key={node.primaryTag} className={linkWithoutUnderline} to={"/" + node.primaryTag}>
                  <p>{node.name} - {node.summary}</p>
                </Link>}
              {!node.hasPage && <p>{node.name} - {node.summary}</p>}
              </div>
              ))
          }
        </div>
      }

      <h1>Notices</h1>
      {
        data.allContentfulNotice.nodes.map(node =>(<Notice key={node.contentful_id} notice={node}></Notice>))
      }
      <h1>News</h1>
      {
        data.allContentfulNewsStory.nodes.map(node =>(<NewsStory key={node.contentful_id} newsStory={node}></NewsStory>))
      }
      </div>
    </Layout>
  )
}

export const query = graphql`
query ($primaryTag: String) {
    contentfulSection(primaryTag: {eq: $primaryTag}) {
      name
      intro {
        raw
      }
      logo {
        gatsbyImageData
      }
    }
    allContentfulSubSection(
      filter: {metadata: {tags: {elemMatch: {contentful_id: {eq: $primaryTag}}}}}
    ) {
      nodes {
        name
        summary
        primaryTag
        hasPage
      }
    }    allContentfulNotice(
      filter: {metadata: {tags: {elemMatch: {contentful_id: {eq: $primaryTag}}}}}
      sort: {order: ASC, fields: priority}
    ) {
      nodes {
        contentful_id
        updatedAt
        category
        title
        content {
          raw
        }
      }
    }
    allContentfulNewsStory(
      filter: {metadata: {tags: {elemMatch: {contentful_id: {eq: $primaryTag}}}}}
      sort: {order: DESC, fields: createdAt}
      limit: 10
    ) {
      nodes {
        contentful_id
        id
        title
        createdAt
        thumbNailImage {
          gatsbyImageData
        }
        summary {
          raw
          references {
            __typename
            ... on ContentfulAsset {
               contentful_id
               gatsbyImageData
              title
            }
        }         
    }
      }
    }
}
`

export default SectionPage