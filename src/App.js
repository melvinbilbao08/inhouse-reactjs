import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import Services from './components/Services';
import ModelPage from './components/pages/ModelPage';
import About from './components/pages/About';

//styles//
import './styles/main.scss';




function App() {
  return (
    <Router>
    <>
     <Navbar />
     <Switch>
        <Route path='/' exact component={Home}/>
        <Route path='/About'  component={About}/>
        <Route path='/ModelPage'  component={ModelPage}/>
        <Route path='/Services'  component={Services}/>
     </Switch>
     
    </>
    </Router>
    
  );
}

export default App;
