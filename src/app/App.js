import React from "react";
// import Modal from "react-modal";
// import ReactDOM from "react-dom";

import ViewClippings from './views/ViewClippings'
import ViewAuthors from './views/ViewAuthors'
import ViewTitles from './views/ViewTitles'

// Modal.setAppElement("#app")

import ReactDropzone from "react-dropzone";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import LayoutHeader from './components/LayoutHeader'

class App extends React.Component {
  onDrop = (files) => {
    files.forEach(file => {
      console.log(file);
    });
  }
  render() {
    return (
      <ReactDropzone onDrop={this.onDrop}>
        {({ getRootProps }) => (
          <div {...getRootProps()}>
          <Router>
            <LayoutHeader />
            <Switch>
              <Route exact path="/">
                <ViewClippings />
              </Route>
              <Route path="/authors">
                <ViewAuthors />
              </Route>
              <Route path="/titles">
                <ViewTitles />
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
