import React from 'react'

export default class Author extends React.Component {

  render() {
    return (
      <div className="author">
        { this.props.name }
      </div>
    )
  }
}
