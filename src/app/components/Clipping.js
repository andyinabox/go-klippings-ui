import React from 'react'
import { Link } from 'react-router-dom'

export default class Clipping extends React.Component {
  render() {
    const toTitle = '/titles/' + this.props.title.id
    return (
      <div className="clipping">
        <blockquote className="clipping-content">{ this.props.content }</blockquote>
        <div className="clipping-footer">
          <div className="clipping-title"><Link to={toTitle}>{this.props.title.title}</Link></div>
          <div className="clipping-authors">{this.props.title.authors.map(a => {
            const to = "/authors/" + a.id
            return <Link key={a.id} to={ to } className="author-link">{a.name}</Link>
          }) }</div>
          <time className="clipping-date">{ this.props.date }</time>
          <div className="clipping-range">Location 181-183</div>
        </div>
      </div>
    )
  }
}
