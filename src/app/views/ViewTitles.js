import React from 'react'
import Title from '../components/Title'
export default class ViewTitles extends React.Component {
  render() {
    return (
      <main role="main" className="view-titles">
        <ul className="titles-list">
          {this.props.titles.map((title) => {
            return <Title key={title.id} {...title}></Title>
          })}
        </ul>
      </main>
    )
  }
}
