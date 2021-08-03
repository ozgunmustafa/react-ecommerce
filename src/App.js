import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Basket from './components/pages/Basket';
import Home from './components/pages/Home';
import PageNotFound from './components/pages/PageNotFound';
import ProductDetail from './components/pages/ProductDetail';
import { ToastContainer, toast } from 'react-toastify';

function App() {
  return (
    <Router>
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={true}
        newestOnTop={true}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover={false}
      />
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
