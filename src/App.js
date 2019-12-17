import React from 'react';

import { BrowserRouter, Switch,Route, Redirect } from 'react-router-dom';

import LandingPageContainer from './LandingPage/LandingPage.container';
import ProductGrid from './ProductGrid/ProductGrid';
import ProductList from './ProductList/ProductList';
import Detail from './Detail/Detail';

import Header from './Helper/Header';

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
          <Redirect to='/home' />        
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
