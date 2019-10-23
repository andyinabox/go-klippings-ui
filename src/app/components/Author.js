import React from 'react'
import { Link } from 'react-router-dom'
export default class Author extends React.Component {

  render() {
    const to = '/authors/' + this.props.id;
    return (
      <div className="author">
        <Link to={to}>{this.props.name}</Link>
      </div>
    )
  }
}
