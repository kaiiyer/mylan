import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './App.css';
import AboutUs from './Components/AboutUs';
import Homepage from './Components/Homepage';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
        loggedIn: false
    }
    this.logout = this.logout.bind(this);
    this.login = this.login.bind(this);
  }
  logout(){
    console.log("Logging Out")
    this.setState({loggedIn: false})
  }
  login(){
    console.log("Logging In")
    this.setState({loggedIn: true})
  }
  render() {
    const navLoggedIn = (
      <ul id="nav-mobile" className="right hide-on-med-and-down">
        <li>
          <Link to="/">Homepage</Link>
        </li>
        <li>      
          <Link to="/account">Account</Link>
        </li>
        <li>      
          <a onClick={this.logout}>Logout</a>
        </li>
        <li>
          <Link to="/about">About Us</Link>
        </li>
      </ul>
    )
    const navLoggedOut = (
      <ul id="nav-mobile" className="right hide-on-med-and-down">
        <li>
          <Link to="/">Homepage</Link>
        </li>
        <li>      
          <Link to="/signup">Sign Up</Link>
        </li>
        <li>      
          <a onClick={this.login}>Login</a>
        </li>
        <li>
          <Link to="/about">About Us</Link>
        </li>
      </ul>
    )
    const nav = (
      (this.state.loggedIn) ? navLoggedIn : navLoggedOut
    )
    const Signup = () => (
      <div>Signup</div>
    )
    const Login = () => (
      <div>Login</div>
    )
    const Account = () => (
      <div>Account</div>
    )
    return (
      <div className="App">
        <Router>
            <div>
              <nav>
                <div className="nav-wrapper" style={{backgroundColor: '#707ce6'}}>
                  <a href="/" style={{float: 'left', fontSize: '4em', marginLeft: '0.5em', marginTop: '0.052em'}}>My Med</a>
                    {nav}
                </div>
              </nav>
              <Route exact path="/" component={Homepage} />  
              <Route path="/signup" component={Signup} />
              <Route path="/login" component={Login}  />
              <Route path="/account" component={Account} />
              <Route path="/about" component={AboutUs} />
            </div>
        </Router>
       </div>
    );
  }
}

export default App;
