import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Basket from './components/pages/Basket';
import Home from './components/pages/Home';
import PageNotFound from './components/pages/PageNotFound';
import ProductDetail from './components/pages/ProductDetail';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/sepet" component={Basket} />
        <Route exact path="/product/:productId" component={ProductDetail} />
        <Route component={PageNotFound} />
      </Switch>
    </Router>
  );
}

export default App;
