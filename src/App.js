import React from 'react';

import { BrowserRouter, Switch,Route, Redirect } from 'react-router-dom';

import LandingPageContainer from './LandingPage/LandingPage.container';
import ProductGrid from './ProductGrid/ProductGrid';
import ProductList from './ProductList/ProductList';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route path="/home" exact component={LandingPageContainer}></Route> 
          <Route path="/productgird" exact component={ProductGrid}></Route>  
          <Route path="/productlist" exact component={ProductList}></Route>            
          <Redirect to='/home' />        
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
