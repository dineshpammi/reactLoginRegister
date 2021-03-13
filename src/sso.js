
import React from 'react';
import Side from './carbonComponents/sideBar/sidebar';
import Button from './carbonComponents/button/button'
import Input from './carbonComponents/input/input.js'
import './login.css';
import { Link} from 'react-router-dom'; 


export default function Login(props){
    return <> 
            <div className="containerLogin"> 
                <Side></Side>
                <div style={{margin: "3% 25% 3% 20%",paddingRight:"25px"}}>
                    <h1 style={{fontFamily:"monospace"}}>strobes</h1> <br/>
                    <div style={{fontSize:"2em"}}>Log in </div> 
                    <span>Dont't have an account? <a style={{textDecorationLine:"none"}}><Link to="/register">Register now</Link></a></span> <br/> <br/><br/>
                    
                    <b>{props.head}</b>
                    
                    <form>
                        <Input label="Email" placeholder="john.doe@example.com" type="email"/>
                        <Button val="Continue" />
                        <div style={{marginTop:"10px"}}><input type="checkbox"/>Remember me  <a href="#" style={{float:"right",textDecorationLine:"none"}}>Forgot Password</a> </div> <br/>
                        <a style={{textDecorationLine:"none"}}><Link to="/">Alternative Login</Link></a>
                    </form>
                <div style={{marginTop:"50%"}}>&copy; Copyright Strobes 2020. All Rights Reserved.</div>
                </div>
                
                
            </div>
            </>
}

// ReactDOM.render(<BrowserRouter><Login value="Enter your Strobes ID"/></BrowserRouter>,document.getElementById('login'));
