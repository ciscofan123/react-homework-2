import React from "react";
import './controlbutton.scss';

const ControlButton = (props) => {
    const icon = props.icon ? props.icon : 'none';
    const theme = props.theme ? props.theme : 'grey';
    const actualClassName = [
        props.className && props.className,
        'controlbutton',
        `controlbutton_${theme}`
    ].join(' ');
    return (
        <button className={actualClassName}>
            <img className={"controlbutton__icon"} src={`/img/icon-${icon}.svg`} alt={`${icon} icon`} />
            {props.text && <span className={"controlbutton__label"}>{props.text}</span>}
        </button>
    );
}

export default ControlButton;