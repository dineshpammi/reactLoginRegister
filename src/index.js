import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Login from './login';
import Sso from './sso';
import Register from './register';
import { BrowserRouter,Route,Switch } from 'react-router-dom'; 

function Routing(){ //Routing Components
    return <>
            <Switch> 
	            <Route exact path='/' component={() => (<Login head="Enter your strobes ID" />)}></Route> 
	            <Route exact path='/sso' component={() => (<Sso head="Log in with SAML SSO" />)}></Route> 
	            <Route exact path='/register' component={Register}></Route> 
            </Switch> 
            </>
}

ReactDOM.render(<BrowserRouter><Routing/></BrowserRouter>,document.getElementById('sso'));
