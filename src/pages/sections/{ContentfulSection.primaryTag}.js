import * as React from 'react'
import Layout from '../../components/layout'
import { useStaticQuery, graphql } from 'gatsby'
import NewsStory from '../../components/newsStory'
import Notice from '../../components/notice'
const SectionPage = ({data, pageContext}) => {
  console.log(pageContext)
  console.log(data)

  return (
    <Layout pageTitle={data.contentfulSection.name + " Section"}>
      <div>
      <h1>Notices</h1>
      {
        data.allContentfulNotice.nodes.map(node =>(<Notice notice={node}></Notice>))
      }
      <h1>News</h1>
      {
        data.allContentfulNewsStory.nodes.map(node =>(<NewsStory newsStory={node}></NewsStory>))
      }
      </div>
    </Layout>
  )
}

export const query = graphql`
query ($primaryTag: String) {
    contentfulSection(primaryTag: {eq: $primaryTag}) {
      name
    }
    allContentfulNotice(
      filter: {metadata: {tags: {elemMatch: {contentful_id: {eq: $primaryTag}}}}}
    ) {
      nodes {
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
        title
        createdAt
        mainBody {
          raw
        }
      }
    }
}
`

export default SectionPage