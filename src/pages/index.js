import * as React from 'react'
import Layout from '../components/layout'
import NewsStory from '../components/newsStory'
import { useStaticQuery, graphql } from 'gatsby'
import logo from '../images/Scouts1stTwyfordSquarePurple150px.png'

const IndexPage = () => {
  console.log(logo)
  const news = useStaticQuery(graphql`
  query MyQuery {
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
      <h1>News</h1>
      {
        news.allContentfulNewsStory.nodes.map(node =>(
          <div key={node.contentful_id}>
            <NewsStory newsStory={node}></NewsStory>
          </div>                
            ))
        }

    </Layout>
  )
}
export default IndexPage
