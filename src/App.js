import React, { Component } from 'react';
import { NavLink, Route } from 'react-router-dom';
import MainPage from './pages/mainpage';

class App extends Component {
    render() {
      return (
          <div className="container">
            <div className="ui two item menu">
              <NavLink className="item" activeClassName="active" exact to="/">Settings</NavLink>
            </div>
            <Route exact path="/" component={MainPage}/>
          </div>
      );
   }
}

export default App;
