import React from 'react';
import './App.scss';
import TopBar from './components/topbar/TopBar';
import SideBar from './components/sidebar/SideBar';
import Home from './pages/home/Home';
import UserList from './pages/userList/UserList';
import NewUser from './pages/newUser/NewUser';
import User from './pages/user/User';
import ProductList from './pages/productList/ProductList';
import Product from './pages/product/Product';
import NewProduct from './pages/newProduct/NewProduct';

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
            <Route path='/user/:userId' component={User} />
            <Route path='/newUser' component={NewUser} />
            <Route path='/products' component={ProductList} />
            <Route path='/Product/:productId' component={Product} />
            <Route path='/newproduct' component={NewProduct} />
          </Switch>
        </div>
    </Router>
  );
}

export default App;
