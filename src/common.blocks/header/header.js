import React from "react";
import './header.scss';

const Header = (props) => {
    return (
        <header className={"header"}>
            <div className={"header__container"}>
                <div className={"header__title"}>School CI server</div>
                <div className={"header__controls"}>
                    {props.children}
                </div>
            </div>
        </header>
    );
}

export default Header;