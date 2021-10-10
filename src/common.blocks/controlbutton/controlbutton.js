import React from "react";
import './controlbutton.scss';

const ControlButton = (props) => {
    const icon = props.icon ? props.icon : null;
    const theme = props.theme ? props.theme : 'grey';
    const actualClassName = [
        props.className && props.className,
        'controlbutton',
        `controlbutton_${theme}`
    ].join(' ');
    const disabled = (props.disabled !== undefined) ? props.disabled : false;
    return (
        <button className={actualClassName} onClick={props.onClick} disabled={disabled}>
            {icon ? <img className={"controlbutton__icon"} src={`/img/icon-${icon}.svg`} alt={`${icon} icon`} /> : null }
            {props.text && <span className={"controlbutton__label"}>{props.text}</span>}
        </button>
    );
}

export default ControlButton;