import * as React from 'react'
import {
  container,
  heading,
  navLinks,
  navLinkItem,
  navLinkText
} from './layout.module.css'
import { renderRichText} from "gatsby-source-contentful/rich-text"

const NewsStory = ({ newsStory }) => {
  const options = {
    }

    return (
    <div>
      <div class='title'>{newsStory.title}</div>
      <div class='createdAt'>{newsStory.createdAt}</div>
      {
        renderRichText(newsStory.mainBody, options)
      }
    </div>
  )
}

export default NewsStory