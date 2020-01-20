import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';

import Login from './components/Login';
import FriendsList from './components/FriendsList';
import Logout from './components/Logout';
import Dashboard from './components/Dashboard';
import PrivateRoute from './components/PrivateRoute';
import { getToken } from './utils/api';
import AddFriendForm from './components/AddFriendForm';


function App() {
  const loggedIn = getToken(true)
  return (
    <div className="App">
      <nav>
        {!loggedIn && <Link to='/login' className='login-link'>Login</Link>}
        {loggedIn && <Link to='dashboard' className='dashboard-link'>Dashboard</Link>}
        {loggedIn && <Link to='/logout' className='logout-link'>Logout</Link>}
      </nav>
        <Switch>
          <Route exact path='/login' component={Login} />
          <PrivateRoute exact path='/friendsList' component={FriendsList} />
          <PrivateRoute exact path='/logout' component={Logout} />
          <PrivateRoute exact path='/dashboard' component={Dashboard} />
          <PrivateRoute exact path='/addFriendForm' component={AddFriendForm} />
        </Switch>
    </div>
  );
}

export default App;
