import React from 'react';
import Header from './components/header/Header';
import Home from './components/home/Home';
import Cart from './components/cart/Cart';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/login/Login';
import Pay from './components/pay/Pay';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';


const promise = loadStripe('pk_test_51MRdVqGfCtupHouC8CwgXHJ1jfYdIAVQ476IBAiKQzLkXo7TrvZO5DyXvIgwhSxxx0VB83NjD0Y70ssKSXu12wxx00YVEtPNx7');



const App = () => {
  return(
    <Router>
      <div className="app">
      
        <Routes>

          <Route path='/login' element={<Login/>}/>
          <Route path="/checkout" element={<><Header/><Cart/></>}/>
          <Route path="/" element={<><Header/><Home/></>}/>
          <Route path='/pay' element={<><Header/><Elements stripe={promise}><Pay/></Elements></>}/>
          {/* <Route path="*" element={<h1>404 Not Found</h1>}/> */}
        </Routes>

      </div>
    </Router>
  );
};

export default App;