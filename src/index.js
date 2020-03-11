import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Switch, Route} from'react-router-dom';
import Home from './pages/home';
import About from './pages/about';
import Contact from './pages/contact';
import Default from './pages/default'

import * as serviceWorker from './serviceWorker';

ReactDOM.render( <BrowserRouter>    
    <Switch>      
        <Route exact path='/' component={Home} />      
        <Route path='/about' component={About} />
        <Route path='/contact' component={Contact} /> 
        <Route component={Default} /> 
    </Switch>  
</BrowserRouter>,  document.getElementById('root'));


serviceWorker.unregister();
