import * as React from 'react'
import Layout from '../components/layout'
import NewsStory from '../components/newsStory'
import Notice from '../components/notice'
import { useStaticQuery, graphql } from 'gatsby'
import logo from '../images/Scouts1stTwyfordSquarePurple150px.png'

const IndexPage = () => {
  console.log(logo)
  const data = useStaticQuery(graphql`
  query MyQuery {
    allContentfulNotice(
      filter: {metadata: {tags: {elemMatch: {contentful_id: {eq: "group"}}}}}
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
      filter: {metadata: {tags: {elemMatch: {contentful_id: {eq: "group"}}}}}
      sort: {order: DESC, fields: createdAt}
      limit: 10
    ) {
      nodes {
        title
        contentful_id
        id
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
  }`)
  
  return (
    <Layout pageTitle="Home Page">
      {data.allContentfulNotice.nodes.length > 0 &&
        <div>
          <h1>Notices</h1>
          {
            data.allContentfulNotice.nodes.map(node =>(<Notice key={node.contentful_id} notice={node}></Notice>))
          }
        </div>
      }
      {data.allContentfulNewsStory.nodes.length > 0 &&
        <div>
          <h1>News</h1>
          {
            data.allContentfulNewsStory.nodes.map(node =>(
              <div key={node.contentful_id}>
                <NewsStory newsStory={node}></NewsStory>
              </div>                
                ))
          }
        </div>
      }
    </Layout>
  )
}
export default IndexPage
