import React from "react";
import './navbutton.scss';

const NavButton = (props) => {
    const actualClassName = [
        props.className && props.className,
        'navbutton',
        props.theme ? `navbutton_${props.theme}` : null
    ].join(' ');
    return (
        <button className={actualClassName}>
            {props.text && <span className={"navbutton__label"}>{props.text}</span>}
        </button>
    );
}

export default NavButton;