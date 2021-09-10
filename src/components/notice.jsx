import * as React from 'react'
import { renderRichText} from "gatsby-source-contentful/rich-text"

const Notice = ({ notice }) => {
  const options = {
    }

    return (
    <div>
      <div class='updatedAt'>{notice.updatedAt}</div>
      {
        renderRichText(notice.content, options)
      }
    </div>
  )
}

export default Notice