import React from "react";
// import Modal from "react-modal";
// import ReactDOM from "react-dom";
import axios from 'axios'

import ViewClippings from './views/ViewClippings'
import ViewAuthors from './views/ViewAuthors'
import ViewTitles from './views/ViewTitles'

// Modal.setAppElement("#app")

import ReactDropzone from "react-dropzone";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import LayoutHeader from './components/LayoutHeader'


class App extends React.Component {
  onDrop = (files) => {
    this.uploadFiles(files).then( resp => {
      console.log(resp.data);
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
    return (
      <ReactDropzone onDrop={this.onDrop}>
        {({ getRootProps }) => (
          <div className="drop-zone" {...getRootProps()}>
          <Router>
            <LayoutHeader />
            <Switch>
              <Route exact path="/home">
                <ViewClippings />
              </Route>
              <Route path="/authors">
                <ViewAuthors />
              </Route>
              <Route path="/titles">
                <ViewTitles />
              </Route>
              <Route exact path="/">
                <Redirect to="/home" />
              </Route>
            </Switch>
          </Router>
            </div>
        )}
      </ReactDropzone>
    );
  }
}

export default App;
