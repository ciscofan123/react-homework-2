import React from "react";
import Header from "../../common.blocks/header/header";
import Footer from "../../common.blocks/footer/footer";
import './startscreen.scss';
import NavButton from "../../common.blocks/navbutton/navbutton";
import {Link} from "react-router-dom";
import ControlButton from "../../common.blocks/controlbutton/controlbutton";

const PageStartScreen = () => {
    return (
        <div className={"app startscreen"}>
            <Header>
                <Link to={"/settings"}>
                    <ControlButton icon={"settings"} text={"Settings"} className={"controlbutton_sm"} />
                </Link>
            </Header>
            <main className={"startscreen__content"}>
                <img src={"/img/logo.svg"} className={"startscreen__image"} alt={"logo"} />
                <div className={"startscreen__description"}>Configure repository connection<br/>and synchronization settings</div>
                <Link to={"/settings"}>
                    <NavButton text={"Open settings"} theme={"yellow"} className={"startscreen__control"} />
                </Link>
            </main>
            <Footer></Footer>
        </div>
    );
}

export default PageStartScreen;