import * as React from 'react'
import RenderRichText from './RenderRichText.jsx'
import {
  updatedAt,
  title,
  entireNotice,
  categoryThisWeek,
  categoryCamp,
  categoryFundraising,
  categoryUrgent,
  categoryOther,
  categoryTitleThisWeek,
  categoryTitleCamp,
  categoryTitleFundraising,
  categoryTitleUrgent,
  categoryTitleOther,
} from './notice.module.css'


const Notice = ({ notice }) => {
    var categoryClass = categoryOther;
    var categoryTitleClass = categoryTitleOther
    switch (notice.category)
    {
      case 'thisweek':
        categoryClass = categoryThisWeek;
        categoryTitleClass = categoryTitleThisWeek;
        break;

      case 'camp':
        categoryClass = categoryCamp;
        categoryTitleClass = categoryTitleCamp;
        break;

      case 'fundraising':
        categoryClass = categoryFundraising;
        categoryTitleClass = categoryTitleFundraising;
        break;

      case 'urgent':
        categoryClass = categoryUrgent;
        categoryTitleClass = categoryTitleUrgent;
        break;

      default:
        break;
    }

    return (
    <div className={`${categoryClass} ${entireNotice}`}>
      <div className={title + ' ' + categoryTitleClass}>{ notice.title || (notice.category === 'thisweek' ? 'Scouts This Week' : '')}</div>
      <div className={updatedAt}>{new Date(notice.updatedAt).toLocaleString()}</div>
      <RenderRichText content={notice.content}/>
    </div>
  )
}

export default Notice