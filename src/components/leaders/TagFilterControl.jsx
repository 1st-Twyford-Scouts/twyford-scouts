// @ts-check

import React from 'react'

class TagFilterControl extends React.Component {
  render () {
    return (
      <div className='tagFilter'>
          <select name='Tag Filter' id="tag_filter" value={this.props.selected} onChange={this.props.OnSelect}>
              <option value="*">Show All</option>
              {
                  this.props.tags.map((tag) =>
                  (
                      <option key={tag.id} value={tag.id}>{tag.name}</option>
                  ))
              }
          </select>
      </div>
    )
  }
}

export default TagFilterControl
