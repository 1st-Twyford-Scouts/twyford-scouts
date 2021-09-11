import * as React from 'react'
import Layout from '../../components/layout'
import { graphql } from 'gatsby'
import { renderRichText} from "gatsby-source-contentful/rich-text"
import { BLOCKS } from "@contentful/rich-text-types"
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { embeddedImage} from '../../components/common.module.css'

const NewsPage = ({data}) => {

  const options = {
    renderNode: {
        [BLOCKS.EMBEDDED_ASSET]: node => {
            return (
                <GatsbyImage className={embeddedImage} alt={node.data.target.title} image={getImage(node.data.target.gatsbyImageData)}/>
              )        }
      }
    }

  return (
    <Layout pageTitle={data.contentfulNewsStory.title}>
      <GatsbyImage alt={data.contentfulNewsStory.title} image={getImage(data.contentfulNewsStory.thumbNailImage)}/>
      <h1>{data.contentfulNewsStory.title}</h1>
      <div>
      {
          data.contentfulNewsStory.mainBody && renderRichText(data.contentfulNewsStory.mainBody, options)
      }
      </div>
    </Layout>
  )
}

export const query = graphql`
query ($id: String) {
    contentfulNewsStory(id: {eq: $id}) {
        title
        thumbNailImage {
            gatsbyImageData
        }
        mainBody {
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

export default NewsPage