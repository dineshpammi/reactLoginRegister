import React from 'react';
import './button.css';
export default function Button(props)
                                {
                                    return <button className="btn">{props.val}<span id="arrow">&rarr;</span></button>
                                }