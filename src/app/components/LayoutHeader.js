import React from 'react'
import Menu from './Menu'

export default class LayoutFooter extends React.Component {
  render() {
    return (
      <header role="banner" class="header-main">
        <h1>Klippings</h1>
        <Menu />
      </header>
    )
  }
}
