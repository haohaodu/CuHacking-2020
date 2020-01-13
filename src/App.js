import React from 'react';

import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import './App.css';


import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';

class App extends React.Component {
  // bulk of state remains with App
  constructor(props){
    super(props);
    this.state = {
      title: "RBC Tracker",
      headerLinks: [
        {title: 'Home', path: '/'},
        {title: 'About', path: '/about'},
        {title: 'Contact', path: '/contact'}
      ],
      home: {
        title: 'Social Media Insights',
        subTitle: 'Understanding Our Customers',
      },
      about: {
        title: 'About Our Project'
      },
      contact: {
        title: 'Reach Out!'
      }
    }
  }
  
  render() {
    return (
      <Router>
        <Container className="p-0" fluid={true}>
          
          <Navbar className="border-bottom" bg="transparent" expand="lg">
            
            <Navbar.Brand>
              <Link className="nav-link" to="/">
                <img src={require("./assets/images/rbc.png")} className="navbar-brand" alt="logo"/>            
              </Link>
            </Navbar.Brand>
  
            <Navbar.Toggle className="border-0" aria-controls="navbar-toggle" />
            
            <Navbar.Collapse id="navbar-toggle">
              
              <Nav className="ml-auto font-weight-bolder">
                <Link className="nav-link" to="/">Home</Link>
                <Link className="nav-link" to="/about">About</Link>
                <Link className="nav-link" to="/contact">Contact</Link>

              </Nav>

            </Navbar.Collapse>
          
          </Navbar>

          <Route path="/" exact render={() => <HomePage title={this.state.home.title} subTitle={this.state.home.subTitle} text={this.state.home.text }/>}/>
          <Route path="/about" render={() => <AboutPage title={this.state.about.title} subTitle={this.state.about.subTitle} text={this.state.about.text }/>}/>
          <Route path="/contact" render={() => <ContactPage title={this.state.contact.title} subTitle={this.state.contact.subTitle} text={this.state.contact.text }/>}/>
          
          <Footer />

          </Container>

      </Router>
    );
  }
}

export default App;
