import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";

import Content from '../../components/layout/Content';
import ShoppingList from '../shoppingList/ShoppingList';

class App extends Component {
  render() {
    return (
      <Router>
        <Content>
          <Switch>
            <Route exact path="/" component={ShoppingList} />
          </Switch>
        </Content>
      </Router>
    );
  }
}

export default App;
