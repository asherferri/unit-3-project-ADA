import React from 'react';
import './App.css';
import { BrowserRouter, Route, Redirect } from 'react-router-dom'
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import About from './components/About';
import Login from './components/Login';
import Register from './components/Register';
import GroceryController from './components/GroceryController'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      auth: false,
      user: null,
    }
    this.handleLoginSubmit = this.handleLoginSubmit.bind(this)
    this.handleRegisterSubmit = this.handleRegisterSubmit.bind(this)
    this.logout = this.logout.bind(this)
  }

  /* Checks credentials for user authentication at app load */
  componentDidMount() {
    fetch(`/api/auth/verify`, {credentials: 'include'} )
    .then(res => res.json())
    .then(res => {
      this.setState({
        auth: res.auth,
        user: res.data.user,
      })
    })
    .catch(err => console.log(err))
    // console.log(this)
  }
  
  /* Function to handle user login to site */
  handleLoginSubmit(e, data) {
    e.preventDefault();

    fetch(`/api/auth/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
      body: JSON.stringify(data),
    })
    .then(res => res.json())
    .then(res => {
      // console.log(res);
      this.setState({
        auth: res.auth,
        user: res.data.user,
      })
    })
    .catch(err => console.log(err));
  }

  /* Function to handle registering a new user for site */
  handleRegisterSubmit(e, data) {
    e.preventDefault();

    fetch(`/api/auth/register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
      body: JSON.stringify(data),
    })
    .then(res => res.json())
    .then(res => {
      console.log(res)
      this.setState({
        auth: res.auth,
        user: res.data.user,
      })
    })
    .catch(err => console.log(err))
  }

  /* Function to handle user logout from site */
  logout() {
    fetch(`/api/auth/logout`, { credentials: 'include'} )
    .then(res => res.json())
    .then(res => {
      this.setState({
        auth: res.auth,
        user: res.data.user,
      })
    })
    .catch(err => console.log(err))
    localStorage.setItem('cG', null);
    localStorage.setItem('vT', null );
  }

  render() {
      return (
      <BrowserRouter>
        <div className="grocery-app-container">
          <Header logout={this.logout} user={this.state.user}/>
            <Route exact path="/" component={Home} />
            <Route exact path="/login" render={ () => (
              this.state.auth
                ? <Redirect to='/groceries' />
                : <Login handleLoginSubmit={this.handleLoginSubmit} />
            )} />
            <Route exact path="/register" render={ () => (
              this.state.auth
                ? <Redirect to='/groceries' />
                : <Register handleRegisterSubmit={this.handleRegisterSubmit} />
            )} />
            <Route exact path="/about" component={About} />
            <Route exact path="/groceries" render={ () => (
                this.state.auth
                  ? <GroceryController auth={this.state.auth} />
                  : <Redirect to="/login" /> )} />
            <Route exact path="/logout" render={ () => <Redirect to="/" />} />
          <Footer />
        </div>
      </BrowserRouter>
    )
  }
}

export default App;
