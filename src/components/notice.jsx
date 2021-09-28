import * as React from 'react'
import { renderRichText} from "gatsby-source-contentful/rich-text"
import {
  updatedAt,
  title,
  entireNotice,
  categoryThisWeek,
  categoryCamp,
  categoryFundraising,
  categoryUrgent,
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

      case 'urgent':
        categoryClass = categoryUrgent;
        break;

      default:
        break;
    }

    return (
    <div className={`${categoryClass} ${entireNotice}`}>
      <div className={title}>{ notice.title || (notice.category === 'thisweek' ? 'Scouts This Week' : '')}</div>
      <div className={updatedAt}>{new Date(notice.updatedAt).toLocaleString()}</div>
      {
        renderRichText(notice.content, options)
      }
    </div>
  )
}

export default Notice