import React, { Component } from 'react';
import './App.css';

import { Router, Switch, Route, Redirect, BrowserRouter } from 'react-router-dom';
import { history } from './History/history';
import { NotLogInRoute, LogInRoute, MyRoute } from './Route/CustomeRoute';

import LandingPageContainer from './LandingPage/LandingPage.container';
import ProductList from './ProductList/ProductList';
import Detail from './Detail/Detail';


import Header from './Helper/Header';
import Cart from './Cart/Cart';
import Checkout from './Checkout/Checkout';
import Login from './Login/Login';
import Register from './Register/Register';

import Profile from './Profile/Profile';
import Footer from './Helper/Footer';
import Contact from './Contact/Contact';

class App extends Component {
  constructor() {
    super();
    this.state = {
      test: 0
    }
  }

  updateCartLength() {
    this.setState({test:this.state.test + 1});
  }
  render() {
    return (
      <div>
        
        <Router history={history}>
          <Header test={this.state.test}></Header>
          <div style={{ marginTop: 100 }}>
            <Switch>
              <MyRoute path="/home" exact updateCartLength={()=>{this.updateCartLength()}} component={LandingPageContainer}></MyRoute>
              <LogInRoute path="/login" exact component={Login}></LogInRoute>
              <LogInRoute path="/register" exact component={Register}></LogInRoute>
              <NotLogInRoute path="/profile" exact component={Profile}></NotLogInRoute>
              <MyRoute path="/productlist" updateCartLength={()=>{this.updateCartLength()}} exact component={ProductList}></MyRoute>
              <MyRoute path="/productlist/id=:id" exact updateCartLength={()=>{this.updateCartLength()}} component={ProductList}></MyRoute>
              <MyRoute path="/productlist/query=:query" exact updateCartLength={()=>{this.updateCartLength()}} component={ProductList}></MyRoute>
              <MyRoute path="/detail/id=:id" updateCartLength={()=>{this.updateCartLength()}} exact component={Detail}></MyRoute>
              <MyRoute path="/cart" updateCartLength={()=>{this.updateCartLength()}} exact component={Cart}></MyRoute>
              <Route path="/contact" exact component={Contact}></Route>
              <NotLogInRoute path="/checkout" exact component={Checkout}></NotLogInRoute>
              <Redirect to='/home' />
            </Switch>
          </div>
          <Footer></Footer>
        </Router> 
      </div>
    );
  }
}

export default App;
