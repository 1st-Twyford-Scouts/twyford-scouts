import * as React from 'react'
import Layout from '../components/layout'
import { useStaticQuery, graphql } from 'gatsby'
import { renderRichText} from "gatsby-source-contentful/rich-text"
const StaticPage = ({data, pageContext}) => {

  const options = {
  }

  return (
    <Layout pageTitle={data.contentfulStaticPage.title}>
      <div>
      {
          data.contentfulStaticPage.content && renderRichText(data.contentfulStaticPage.content, options)
      }
      </div>
    </Layout>
  )
}

export const query = graphql`
query ($url: String) {
    contentfulStaticPage(url: {eq: $url}) {
        title
        url
        content {
            raw
          }
    }
}`

export default StaticPage