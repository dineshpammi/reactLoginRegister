import React from 'react';
import './input.css';

export default function Input(props) {
    return <>
           <div className="inputLabel">
                <label>{props.label}</label> <br/>
                <input className="inputField" type={props.type} placeholder={props.placeholder} /> <br/>
            </div>
           </>
}
//Here we get type and place holder using props