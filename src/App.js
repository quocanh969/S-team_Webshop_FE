import React from 'react';

import { BrowserRouter, Switch,Route, Redirect } from 'react-router-dom';

import LandingPageContainer from './LandingPage/LandingPage.container';
import ProductGrid from './ProductGrid/ProductGrid';
import ProductList from './ProductList/ProductList';
import Detail from './Detail/Detail';

import Header from './Helper/Header';
import Cart from './Cart/Cart';
import Checkout from './Checkout/Checkout';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header></Header>
        <Switch>
          <Route path="/home" exact component={LandingPageContainer}></Route> 
          <Route path="/productgird" exact component={ProductGrid}></Route>  
          <Route path="/productlist" exact component={ProductList}></Route>    
          <Route path="/detail" exact component={Detail}></Route>    
          <Route path="/cart" exact component={Cart}></Route>   
          <Route path="/checkout" exact component={Checkout}></Route>   
          <Redirect to='/home' />        
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
