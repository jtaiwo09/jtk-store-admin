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
import Login from './pages/login/Login';
import Cookies from 'universal-cookie';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Auth from './components/Auth';

const cookies = new Cookies();

function App() {
  const admin = cookies.get('isAdmin');
  return (
    <Router>
        {admin && <TopBar />}
          <div className='container'>
          {admin && <SideBar />}
            <Switch>
              <Auth path='/' exact component={Home} admin={admin} />
              <Auth path='/users' component={UserList} admin={admin} />
              <Auth path='/user/:userId' component={User} admin={admin} />
              <Auth path='/newUser' component={NewUser} admin={admin} />
              <Auth path='/products' component={ProductList} admin={admin} />
              <Auth path='/Product/:productId' component={Product} admin={admin} />
              <Auth path='/newproduct' component={NewProduct} admin={admin} />
              <Route path='/login' component={Login} />
            </Switch>
          </div>
    </Router>
  );
}

export default App;
