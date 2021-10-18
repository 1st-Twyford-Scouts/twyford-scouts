import * as React from 'react'
import { Link } from 'gatsby'
import { renderRichText} from "gatsby-source-contentful/rich-text"
import { BLOCKS } from "@contentful/rich-text-types"
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { embeddedImage} from '../components/common.module.css'

const RenderRichText = ({ content }) => {
    const options = {
        renderNode: {
            'embedded-entry-inline': node => {
                return (<Link to={"/" + node.data.target.url}>{node.data.target.title}</Link>)
            },
            [BLOCKS.EMBEDDED_ASSET]: node => {
                return (<GatsbyImage className={embeddedImage} alt={node.data.target.title} image={getImage(node.data.target.gatsbyImageData)}/>)
            }
        }
    }
    
    return (
        content && renderRichText(content, options)
        )        
}

export default RenderRichText