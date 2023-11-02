import * as React from 'react'
import Layout from '../../components/layout'
import { graphql } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { newsMain } from './news.module.css'
import RenderRichText from '../../components/RenderRichText.jsx'

const NewsPage = ({data}) => {

  return (
    <Layout images="">
      <GatsbyImage alt={data.contentfulNewsStory.title} image={getImage(data.contentfulNewsStory.thumbNailImage)}/>
      <h1>{data.contentfulNewsStory.title}</h1>
      <div className={newsMain}>
        <RenderRichText content={data.contentfulNewsStory.mainBody}/>
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

export default NewsPage