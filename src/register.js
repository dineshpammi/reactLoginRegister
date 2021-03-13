import React,{useState} from 'react';
import Side from './carbonComponents/sideBar/sidebar';
import Input from './carbonComponents/input/input.js';
import Button from './carbonComponents/button/button';
import './carbonComponents/input/input.css';
import './register.css';
import { Link,} from 'react-router-dom'; 


export default function Register(){
    const [passwordShow, setPasswordShow] = useState(false);   //creates a state for password toggle
    const togglePassword = () => {   
        setPasswordShow(passwordShow ? false : true);
      };
    return <>
                <div className="containerRegister"> 
                <Side></Side>
                <div className="register">
                    <h1 style={{fontFamily:"monospace"}}>strobes</h1> <br/>
                    <div style={{fontSize:"2em"}}>Register </div> 
                    <span>Already have an account? <a style={{textDecorationLine:"none"}}><Link to="/">Log in</Link></a></span> <br/> <br/><br/>
                    
                    <div class="grid-container"> {/*created a grid for inps*/}
                        <div class="grid-item"><Input label="First Name" placeholder="john" type="text"/></div>
                        <div class="grid-item"><Input label="Last Name" placeholder="Acme Corp Inc" type="text"/></div>
                        <div class="grid-item"><Input label="Company" placeholder="john" type="text"/></div>  
                        <div class="grid-item" id="select">
                            <label>I am a</label> <br/>
                            <select  className="inputField" >
                                <option value="" hidden>Select</option>
                                <option>Male</option>
                                <option>Female</option>
                            </select>
                        </div>
                        <div class="grid-item"><Input label="Email" placeholder="john.doe@example.com" type="email"/></div>
                        <div class="grid-item"><div className="inputLabel">
                                        <label>Password</label> <br/>
                                        <input className="inputField" type={passwordShow ? "text" : "password"} placeholder="*****" />
                                        <span className="passwordSpan" onClick={togglePassword}>&#128065;</span> <br/>
                        </div></div>
                        <div class="grid-item" id="item7"><Button val="Continue to your free account" /></div>
                    </div>
                <div id="TC">By creating a Strobes account, you consent to fully accept our Privacy Policy. Terms of Service apply.</div>
                <div style={{textAlign:"center",marginTop:"8%",fontSize:"12px"}}>&copy; Copyright Strobes 2020. All Rights Reserved.</div>
                </div>
                
                
            </div>
            </>
}
