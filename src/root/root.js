import React from 'react';
import { Route, Switch, Link } from 'react-router-dom'
import Blog from './routes/blog'
import Data from './routes/data'
import Photo from './routes/photo'

import css from './root.scss';

export default class Root extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Main />
      </div>);
  }
}

const Header = () => (
  <header>
    <ul class="nav nav-tabs">
      <li class="nav-item">
        {/* <a class="nav-link active" href="#">Active</a> */}
        <Link className="nav-link active" to='/'>Blog</Link>
      </li>
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Dropdown</a>
        <div class="dropdown-menu">
          <a class="dropdown-item" href="#">Action</a>
          <a class="dropdown-item" href="#">Another action</a>
          <a class="dropdown-item" href="#">Something else here</a>
          <div class="dropdown-divider"></div>
          <a class="dropdown-item" href="#">Separated link</a>
        </div>
      </li>
      <li class="nav-item">
        <Link className="nav-link" to='/photos'>Photos</Link>
      </li>
      <li class="nav-item">
        <Link className="nav-link" to='/data'>Data</Link>
      </li>
    </ul>
  </header>
)

const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Blog}/>
      <Route path='/photos' component={Photo}/>
      <Route path='/data' component={Data}/>
    </Switch>
  </main>
)