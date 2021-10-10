import React from "react";
import './main.scss';

const Main = (...rest) => {
    return (
        <main className={"main"} {...rest}>
            {props.children}
        </main>
    );
}

export default Main;