import React, { Component } from "react";
import Home from "./components/Home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import BookList from "./components/BookList";
import BookEdit from "./components/BookEdit";

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path='/' exact={true} component={Home} />
          <Route path='/books' exact={true} component={BookList} />
          <Route path='/book/:id' component={BookEdit} />
        </Switch>
      </Router>
    );
  }
}

export default App;
