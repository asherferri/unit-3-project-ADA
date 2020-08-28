import React from 'react';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom'
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import About from './components/About';
import Login from './components/Login';
import Register from './components/Register';
import GroceryController from './components/GroceryController'

function App() {
  return (
    <BrowserRouter>
      <div className="grocery-app-container">
        <Header />
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/about" component={About} />
          <Route exact path="/groceries" component={GroceryController} />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
