import React from 'react';
import './App.scss';
import TopBar from './components/topbar/TopBar';
import SideBar from './components/sidebar/SideBar';
import Home from './pages/home/Home';
import UserList from './pages/userList/UserList';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <TopBar />
        <div className='container'>
        <SideBar />
          <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/users' component={UserList} />
          </Switch>
        </div>
    </Router>
  );
}

export default App;
