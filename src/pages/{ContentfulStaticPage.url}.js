import * as React from 'react'
import Layout from '../components/layout'
import { graphql } from 'gatsby'
import { renderRichText} from "gatsby-source-contentful/rich-text"
import { BLOCKS } from "@contentful/rich-text-types"
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { embeddedImage} from '../components/common.module.css'

const StaticPage = ({data}) => {

  const options = {
    renderNode: {
        [BLOCKS.EMBEDDED_ASSET]: node => {
            return (
                <GatsbyImage className={embeddedImage} alt={node.data.target.title} image={getImage(node.data.target.gatsbyImageData)}/>
              )        }
      }
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
}`

export default StaticPage