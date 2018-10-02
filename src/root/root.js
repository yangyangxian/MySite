import React from 'react';
import { Route, Switch, Link, NavLink } from 'react-router-dom'
import Blog from './routes/blog'
import Data from './routes/data'
import Photo from './routes/photo'

import css from './root.scss';

export default class Root extends React.Component {
  render() {
    return (
      <div id="root">
        <Header />
        <Main />
      </div>);
  }
}

class Header extends React.Component {
  render() {
    return (
      <header>
        <ul id="tabs" class="nav nav-tabs">
          <li class="nav-item">
            <NavLink className="nav-link" exact activeClassName='active' to='/'>Blog</NavLink>
          </li>
          <li class="nav-item">
            <NavLink className="nav-link" activeClassName='active' to='/photos'>Photos</NavLink>
          </li>
          <li class="nav-item">
            <NavLink className="nav-link" activeClassName='active' to='/data'>Data</NavLink>
          </li>
        </ul>
      </header>
    );
  }
}

const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Blog}/>
      <Route path='/photos' component={Photo}/>
      <Route path='/data' component={Data}/>
    </Switch>
  </main>
)