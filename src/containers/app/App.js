import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";

import Content from '../../components/layout/Content';
import Dashboard from '../dashboard/Dashboard';
import ShoppingList from '../shoppingList/ShoppingList';

class App extends Component {
  render() {
    return (
      <Router>
        <Content>
          <Switch>
            <Route exact path="/" component={ShoppingList} />
            <Route exact path="/dashboard" component={Dashboard} />
          </Switch>
        </Content>
      </Router>
    );
  }
}

export default App;
