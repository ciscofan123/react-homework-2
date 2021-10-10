import React from "react";
import './header.scss';
import ControlButton from "../controlbutton/controlbutton";
import {Link} from "react-router-dom";

const Header = () => {
    return (
        <header className={"header"}>
            <div className={"header__container container"}>
                <div className={"header__title"}>School CI server</div>
                <div className={"header__controls"}>
                    <Link to={"/settings"}>
                        <ControlButton icon={"settings"} text={"Settings"} />
                    </Link>
                </div>
            </div>
        </header>
    );
}

export default Header;