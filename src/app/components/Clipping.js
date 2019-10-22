import React from 'react'

export default class Clipping extends React.Component {

  render() {
    return (
      <div className="clipping">
        <blockquote className="clipping-content">{ this.props.content }</blockquote>
        <div className="clipping-footer">
          <div className="clipping-title">{ this.props.title.title }</div>
          <div className="clipping-authors">Graeber, David</div>
          <time className="clipping-date">{ this.props.date }</time>
          <div className="clipping-range">Location 181-183</div>
        </div>
      </div>
    )
  }
}
