import React from "react";
import Header from "../../common.blocks/header/header";
import Footer from "../../common.blocks/footer/footer";
import './startscreen.scss';
import NavButton from "../../common.blocks/navbutton/navbutton";

const PageStartScreen = () => {
    return (
        <div className={"app startscreen"}>
            <Header></Header>
            <main className={"startscreen__content"}>
                <img src={"/img/logo.svg"} className={"startscreen__image"} alt={"logo"} />
                <div className={"startscreen__description"}>Configure repository connection<br/>and synchronization settings</div>
                <NavButton text={"Open settings"} theme={"yellow"} className={"startscreen__control"} />
            </main>
            <Footer></Footer>
        </div>
    );
}

export default PageStartScreen;