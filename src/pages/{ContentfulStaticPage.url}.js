import * as React from 'react'
import Layout from '../components/layout'
import { graphql } from 'gatsby'
import { generalTextBox } from '../components/layout.module.css'
import RenderRichText from '../components/RenderRichText.jsx'

const StaticPage = ({data}) => {

  return (
    <Layout pageTitle={data.contentfulStaticPage.title}>
      <div className={generalTextBox}>
        <RenderRichText content={data.contentfulStaticPage.content}/>
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
}`

export default StaticPage