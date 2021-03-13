import React from 'react';
// import ReactDOM from 'react-dom';
import './sidebar.css';
export default function Side(){
    return <>
            <div className="container">
                <div className="top">
                    <b>Risk-centered</b><br/>
                    Vulnerability Management
                </div>
                <div className = "bottom">
                    <span id="infi">	&infin;</span><br/>
                    <b>Security Workflows</b> <br/>
                    <p>Create and run playbooks to integrate<br/>
                       security into your CI/CD pipeline.
                    </p>
                </div>
            </div>
           </>
}