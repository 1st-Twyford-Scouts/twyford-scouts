import * as React from 'react'
import Layout from '../components/layout'
import NewsStory from '../components/newsStory'
import { StaticImage } from 'gatsby-plugin-image'
import { useStaticQuery, graphql } from 'gatsby'

const IndexPage = () => {
  const news = useStaticQuery(graphql`
  query MyQuery {
    allContentfulNewsStory(
      filter: {metadata: {tags: {elemMatch: {contentful_id: {eq: "group"}}}}}
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
  }`)
  
  return (
    <Layout pageTitle="Home Page">
      <h1>News</h1>
      {
        news.allContentfulNewsStory.nodes.map(node =>(
          <div>
            <NewsStory newsStory={node}></NewsStory>
          </div>                
            ))
        }

    </Layout>
  )
}
export default IndexPage
