import React from 'react';
import './App.css';

import { Router, Switch,Route, Redirect } from 'react-router-dom';
import { history } from './History/history';
import { IsLogInRoute } from './Route/CustomeRoute';

import LandingPageContainer from './LandingPage/LandingPage.container';
import ProductGrid from './ProductGrid/ProductGrid';
import ProductList from './ProductList/ProductList';
import Detail from './Detail/Detail';


import Header from './Helper/Header';
import Cart from './Cart/Cart';
import Checkout from './Checkout/Checkout';
import Login from './Login/Login';
import Register from './Register/Register';

import Profile from './Profile/Profile';
import Footer from './Helper/Footer';

function App() {
  return (
    <div>
      <Router history={history}>
        <Header></Header>
        <div style={{marginTop: 170}}>
          <Switch>
            <Route path="/home" exact component={LandingPageContainer}></Route>
            <Route path="/login" exact component={Login}></Route>
            <Route path="/register" exact component={Register}></Route> 
            <IsLogInRoute path="/profile" exact component={Profile}></IsLogInRoute> 
            <Route path="/productgird" exact component={ProductGrid}></Route>
            <Route path="/productgird" exact component={ProductGrid}></Route>
            <Route path="/productlist" exact component={ProductList}></Route>
            <Route path="/detail" exact component={Detail}></Route>
            <Route path="/cart" exact component={Cart}></Route>
            <IsLogInRoute path="/checkout" exact component={Checkout}></IsLogInRoute>
            <Redirect to='/home' />
          </Switch>
        </div>
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
