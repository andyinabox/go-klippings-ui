import React from 'react'
import Clipping from '../components/Clipping'
import axios from 'axios'

export default class ViewAuthorsSingle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      model: {
        name: null
      },
      clippings: [],
    };
  }
  componentDidMount() {
    const url = process.env.API_HOST + '/api/authors/' + this.props.match.params.id;
    axios.get(url).then(({ data }) => this.setState(data))
  }
  render() {
    return (
      <main role="main" className="view-authors-single">
        <h2>{ this.state.model.name }</h2>
        { this.state.clippings.map(c => {
          return <Clipping key={c.id} {...c} />
        })}
      </main>
    )
  }
}
