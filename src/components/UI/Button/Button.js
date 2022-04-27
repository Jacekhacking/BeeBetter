import React from 'react';
import './Button.css';
import '../Hexagon/Hexagon.css'


const Button = props => {
    return (
        <button type = {props.type} className = "button ribbon-outset border" onClick = {props.onClick}> Test Button</button>
    )
};

export default Button;