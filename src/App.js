import React from 'react';

import { BrowserRouter, Switch,Route, Redirect } from 'react-router-dom';

import LandingPageContainer from './LandingPage/LandingPage.container';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route path="/home" exact component={LandingPageContainer}></Route>  
          <Redirect to='/home' />        
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
