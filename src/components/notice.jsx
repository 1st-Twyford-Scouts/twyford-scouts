import * as React from 'react'
import { renderRichText} from "gatsby-source-contentful/rich-text"
import {
  updatedAt,
  title,
  entireNotice,
  categoryThisWeek,
  categoryCamp,
  categoryFundraising,
  categoryOther
} from './notice.module.css'


const Notice = ({ notice }) => {
  const options = {
    }

    var categoryClass = categoryOther;
    switch (notice.category)
    {
      case 'thisweek':
        categoryClass = categoryThisWeek;
        break;

      case 'camp':
        categoryClass = categoryCamp;
        break;
      case 'fundraising':
        categoryClass = categoryFundraising;
        break;
    }

    return (
    <div className={`${categoryClass} ${entireNotice}`}>
      <div className={title}>{ notice.title || (notice.category == 'thisweek' ? 'Scouts This Week' : '')}</div>
      <div className={updatedAt}>{notice.updatedAt}</div>
      {
        renderRichText(notice.content, options)
      }
    </div>
  )
}

export default Notice