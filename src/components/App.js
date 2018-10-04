import React, { Component } from 'react'
import {Switch, Route} from 'react-router-dom'
import '../styles/app.css'

// components
import HomePage from './HomePage'
import NavBar from './Navbar'
import Footer from './Footer'


class App extends Component {
  render() {
    return (
      <div className="app">
      <NavBar/>
      <div className="container mainContent">
        <Switch>
          <Route exact path='/' component={HomePage}/>
          <Route render ={() => (
              <h1>Page not Found!</h1>
            )}/>
        </Switch>
      </div>
      <Footer />
    </div>
    );
  }
}

export default App;
