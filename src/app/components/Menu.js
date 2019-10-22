import React from 'react'

export default class Menu extends React.Component {
  render() {
    return (
      <nav role="navigation" class="nav-main">
        <a href ="/clippings" class="nav-btn">Clippings</a>
        <a href="/titles" class="nav-btn">Titles</a>
        <a href="/authors" class="nav-btn">Authors</a>
        <a class="nav-btn">Upload</a>
      </nav>
    )
  }
}
