import React from 'react'

class TagFilterControl extends React.Component {
  render () {
    return (
      <div className='tagFilter'>
          <select name='Tag Filter' id="tag_filer" value={this.props.tagFilterValue} onChange={this.props.onValueChanged}>
              <option value="*">Show All</option>
              {
                  this.props.tags.map((tag) =>
                  (
                      <option key={tag} value={tag}>{tag}</option>
                  ))
              }
          </select>
      </div>
    )
  }
}

export default TagFilterControl
