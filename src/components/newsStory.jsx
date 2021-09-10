import * as React from 'react'
import {
  createdAt,
  title,
  story,
  content
} from './newsStory.module.css'

import { renderRichText} from "gatsby-source-contentful/rich-text"

const NewsStory = ({ newsStory }) => {
  const options = {
    }

    return (
    <div className={story}>
      <div className={title}>{newsStory.title}</div>
      <div className={createdAt}>{new Date(newsStory.createdAt).toLocaleString()}</div>
      <div className={content}>
      {
        renderRichText(newsStory.mainBody, options)
      }
      </div>
    </div>
  )
}

export default NewsStory