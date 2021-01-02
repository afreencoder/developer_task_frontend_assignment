import React from 'react';
import * as Styled from './main.styled';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Header from './components/common/Header';
import Home from './pages/Home';
import Brands from './pages/Brands';
import Transporters from './pages/Transporters';

const Main = () => {
  return (
    <> <Router>
      <Styled.MainContainer>
        <Header/>
          <Switch>
            <Route path="/" exact>
              <Home />
            </Route>
            <Route path="/brands" exact>
              <Brands />
            </Route>
            <Route path="/transporters" exact>
              <Transporters />
            </Route>
          </Switch>
      </Styled.MainContainer>
      </Router>
    </>
  );
};

export default Main;
