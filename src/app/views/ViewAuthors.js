import React from 'react'
import Author from '../components/Author'
export default class ViewAuthors extends React.Component {
  render() {
    return (
      <main role="main" className="view-authors">
        <ul className="authors-list">
          {this.props.authors.map((author) => {
            return <Author key={author.id} {...author}></Author>
          })}
        </ul>
      </main>
    )
  }
}
