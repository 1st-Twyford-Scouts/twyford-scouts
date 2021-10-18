import * as React from 'react'
import {
  createdAt,
  title,
  story,
  content,
  link
} from './newsStory.module.css'
import { embeddedImage } from './common.module.css'
import { Link } from 'gatsby'
import RenderRichText from './RenderRichText.jsx'

import { GatsbyImage, getImage } from 'gatsby-plugin-image'

const NewsStory = ({ newsStory }) => {

    return (
      <Link className={link} to={"/news/" + newsStory.id}>
        <div className={story}>
          <div className={title}>{newsStory.title}</div>
          <div className={createdAt}>{new Date(newsStory.createdAt).toLocaleString()}</div>
          <div className={content}>
            <GatsbyImage className={embeddedImage} alt={newsStory.title} image={getImage(newsStory.thumbNailImage)}/>
            <RenderRichText content={newsStory.summary}/>
          </div>
        </div>
      </Link>
  )
}

export default NewsStory