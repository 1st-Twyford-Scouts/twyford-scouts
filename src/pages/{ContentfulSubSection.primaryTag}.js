import * as React from 'react'
import Layout from '../components/layout'
import { graphql } from 'gatsby'
import { BLOCKS } from "@contentful/rich-text-types"
import Notice from '../components/notice'
import NewsStory from '../components/newsStory'
import { renderRichText} from "gatsby-source-contentful/rich-text"
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { embeddedImage} from '../components/common.module.css'

const SubSectionPage = ({data}) => {

  const options = {
    renderNode: {
        [BLOCKS.EMBEDDED_ASSET]: node => {
            return (
                <GatsbyImage className={embeddedImage} alt={node.data.target.title} image={getImage(node.data.target.gatsbyImageData)}/>
              )        }
      }
    }

  return (
    <Layout>
      <GatsbyImage alt={data.contentfulSubSection.section.name} image={getImage(data.contentfulSubSection.section.logo)}/>
      <div>
        <h1>{data.contentfulSubSection.longname}</h1>
        {
          data.contentfulSubSection.description && renderRichText(data.contentfulSubSection.description, options)
        }
        {data.allContentfulNotice.nodes.length > 0 &&
          <div>
            <h1>{data.contentfulSubSection.name} Notices</h1>
            {
              data.allContentfulNotice.nodes.map(node =>(<Notice key={node.contentful_id} notice={node}></Notice>))
            }
            </div>
        }
        {data.allContentfulNewsStory.nodes.length > 0 &&
          <div>
            <h1>{data.contentfulSubSection.name} News</h1>
            {
              data.allContentfulNewsStory.nodes.map(node =>(<NewsStory key={node.contentful_id} newsStory={node}></NewsStory>))
            }
          </div>
        }
      </div>
    </Layout>
  )
}

export const query = graphql`
query ($primaryTag: String) {
  allContentfulNotice(
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
  contentfulSubSection(primaryTag: {eq: $primaryTag}) {
    name
    section {
      name
      longname
      logo {
        gatsbyImageData
        title
      }
    }      
    description {
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

export default SubSectionPage