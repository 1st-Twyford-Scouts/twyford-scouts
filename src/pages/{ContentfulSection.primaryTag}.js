import * as React from 'react'
import { graphql } from 'gatsby'
import Section from '../components/Section'

const SectionPage = ({data}) => {
  return (
    <Section data={data} />
  )
}

export const query = graphql`
query ($primaryTag: String) {
  contentfulSection(primaryTag: {eq: $primaryTag}) {
        name
        primaryTag
        intro {
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

export default SectionPage