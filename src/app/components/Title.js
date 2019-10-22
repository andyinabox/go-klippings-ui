import React from 'react'

export default class Title extends React.Component {

  render() {
    return (
      <div className="title">
        <i>{this.props.title}</i>
      </div>
    )
  }
}
