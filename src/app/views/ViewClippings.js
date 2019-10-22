import React from 'react'
import Clipping from '../components/Clipping'

export default class ViewClippings extends React.Component {
  render() {
    return (
      <main role="main" className="view-clippings">
        <ul className="clippings-list">
          {this.props.clippings.map((clipping) => {
            return <Clipping key={clipping.id} {...clipping}></Clipping>
          })}
        </ul>
      </main>
    )
  }
}
