import React from 'react'

class NoticeListControl extends React.Component {
  render () {
    return (
      <div className='noticeList'>
        <ul>
        {
            this.props.notices.map((notice) =>
            (
                <li key={notice.id}>
                    <span>{notice.title}</span>
                </li>
            ))
        }
        </ul>
      </div>
    )
  }
}

export default NoticeListControl
