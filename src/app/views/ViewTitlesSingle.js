import React from 'react'
import Clipping from '../components/Clipping'
import axios from 'axios'

export default class ViewTitlesSingle extends React.Component {
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
    const url = process.env.API_HOST + '/api/titles/' + this.props.match.params.id;
    axios.get(url).then(({ data }) => this.setState(data))
  }
  render() {
    return (
      <main role="main" className="view-titles-single">
        <h2>{this.state.model.title}</h2>
        {this.state.clippings.map(c => {
          return <Clipping key={c.id} {...c} />
        })}
      </main>
    )
  }
}
