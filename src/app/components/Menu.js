import React from 'react'
import { Link } from "react-router-dom";

export default class Menu extends React.Component {
  render() {
    return (
      <nav role="navigation" className="nav-main">
        <Link to="/clippings" className="nav-btn">Clippings</Link>
        <Link to="/titles" className="nav-btn">Titles</Link>
        <Link to="/authors" className="nav-btn">Authors</Link>
      </nav>
    )
  }
}
