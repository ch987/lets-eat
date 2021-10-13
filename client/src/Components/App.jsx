import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Main from './Main.jsx';
import Home from './Home/Home.jsx';
import Login from './Login/Login.jsx';

const App = () => {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/main'>Main</Link>
          </li>
          <li>
            <Link to='/login'>Login</Link>
          </li>
        </ul>

        <hr />
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route path='/main'>
            <Main />
          </Route>
          <Route path='/login'>
            <Login />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
