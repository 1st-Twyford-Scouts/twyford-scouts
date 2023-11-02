import * as React from 'react'
import { graphql } from 'gatsby'
import Section from '../components/Section'

const IndexPage = ({data}) => {
  return (
    <Section data={data} />
  )
}

export const query = graphql`
query {
  contentfulSection(primaryTag: {eq: "group"}) {
        name
        primaryTag
        intro {
          raw
        }
        logo {
          gatsbyImageData
        }
        backgroundImages {
          gatsbyImageData(width: 1280)
          title
        }
        subSections {
          name
          summary
          primaryTag
          hasPage
        }		
  }
  allContentfulNotice(
    filter: {metadata: {tags: {elemMatch: {contentful_id: {eq: "group"}}}}}
    sort: { priority: ASC }
  ) {
    nodes {
      contentful_id
      updatedAt
      category
      title
      content {
        raw
        references {
          __typename
          ... on ContentfulStaticPage {
            contentful_id
            title
            url
          }
          ... on ContentfulAsset {
              contentful_id
              gatsbyImageData
            title
          }
        }
      }
    }
  }
  allContentfulNewsStory(
    filter: {metadata: {tags: {elemMatch: {contentful_id: {eq: "group"}}}}}
    sort: { createdAt: DESC }
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
          ... on ContentfulStaticPage {
            contentful_id
            title
            url
          }
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

export default IndexPage
