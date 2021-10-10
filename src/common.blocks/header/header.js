import React from "react";
import './header.scss';
import ControlButton from "../controlbutton/controlbutton";

const Header = () => {
    return (
        <header className={"header"}>
            <div className={"header__container container"}>
                <div className={"header__title"}>School CI server</div>
                <div className={"header__controls"}>
                    <ControlButton icon={"settings"} text={"Settings"} />
                </div>
            </div>
        </header>
    );
}

export default Header;