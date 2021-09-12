import * as React from 'react'
import Layout from '../components/layout'
import { graphql } from 'gatsby'
import { BLOCKS } from "@contentful/rich-text-types"
import { renderRichText} from "gatsby-source-contentful/rich-text"
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { embeddedImage} from '../components/common.module.css'

const SubSectionPage = ({data}) => {

  const options = {
    renderNode: {
        [BLOCKS.EMBEDDED_ASSET]: node => {
            return (
                <GatsbyImage className={embeddedImage} alt={node.data.target.title} image={getImage(node.data.target.gatsbyImageData)}/>
              )        }
      }
    }

  return (
    <Layout>
      <GatsbyImage alt={data.contentfulSubSection.section.name} image={getImage(data.contentfulSubSection.section.logo)}/>
      <div>
      {
        data.contentfulSubSection.description && renderRichText(data.contentfulSubSection.description, options)
      }
      </div>
    </Layout>
  )
}

export const query = graphql`
query ($name: String) {
    contentfulSubSection(name: {eq: $name}) {
      name
      section {
        name
        logo {
          gatsbyImageData
          title
        }
      }      
      description {
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
`

export default SubSectionPage