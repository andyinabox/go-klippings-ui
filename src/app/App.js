import React from "react";
// import Modal from "react-modal";
// import ReactDOM from "react-dom";
import axios from 'axios'
import ReactDropzone from "react-dropzone";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import LayoutHeader from './components/LayoutHeader'

import ViewClippings from './views/ViewClippings'
import ViewAuthors from './views/ViewAuthors'
import ViewAuthorsSingle from './views/ViewAuthorsSingle'
import ViewTitles from './views/ViewTitles'
import ViewTitlesSingle from './views/ViewTitlesSingle'


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hasErrors: false,
      clippings: [],
      authors: [],
      titles: [],
    };
  }
  componentDidMount() {
    axios.get(process.env.API_HOST + '/api/clippings')
      .then(res => {
        this.setState({ clippings: res.data })
      })
    axios.get(process.env.API_HOST+ '/api/titles')
      .then(res => {
        this.setState({ titles: res.data })
      })
    axios.get(process.env.API_HOST + '/api/authors')
      .then(res => {
        this.setState({ authors: res.data })
      })
  }
  onDrop = (files) => {
    this.uploadFiles(files).then( ({ data }) => {
      const updated = data.records;
      console.log(updated);

      // concat new records to existing list
      this.updateState(previousState => {
        state.clippings = updated.clippings.concat(state.clippings)
        state.authors = updated.authors.concat(state.authors)
        state.titles = updated.titles.concat(state.titles)
        return state
      })
    });
  }
  uploadFiles = (files) => {
    const url = process.env.API_HOST + "/api/clippings"
    const fd = new FormData();

    fd.append('file', files[0]);

    const config = {
      headers: {
        'content-type': 'multipart/form-data'
      }
    }
    return axios.post(url, fd, config)
  }
  render() {
    console.log(this.state);
    return (
      <ReactDropzone onDrop={this.onDrop}>
        {({ getRootProps }) => (
          <div className="drop-zone" {...getRootProps()}>
          <Router>
            <LayoutHeader />
            <Switch>
              <Route path="/authors/:id" component={ViewAuthorsSingle}></Route>
              <Route path="/authors">
                <ViewAuthors
                  authors={this.state.authors}
                />
              </Route>
              <Route path="/titles/:id" component={ViewTitlesSingle}></Route>
              <Route path="/titles">
                <ViewTitles
                  titles={this.state.titles}
                />
              </Route>
                <Route exact path="/">
                  <ViewClippings
                    clippings={this.state.clippings}
                  />
                </Route>
              {/* <Route exact path="/">
                <Redirect to="/home" />
              </Route> */}
            </Switch>
          </Router>
            </div>
        )}
      </ReactDropzone>
    );
  }
}

export default App;
