import React from 'react'
import { Link } from 'react-router-dom'

export default class Title extends React.Component {

  render() {
    const to = '/titles/' + this.props.id;
    return (
      <div className="title">
        <Link to={to}>{this.props.title}</Link>
      </div>
    )
  }
}
