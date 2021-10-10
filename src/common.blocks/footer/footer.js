import React from "react";
import "./footer.scss";

const Footer = (props) => {
    const curDate = new Date();
    let copyrightYears = '2021';
    if ( + curDate.getFullYear() > + copyrightYears) {
        copyrightYears += '-' + curDate.getFullYear();
    }

    let actualClassName = "footer";
    if (props.className) {
        actualClassName += ` ${props.className}`;
    }

    return (
        <footer className={actualClassName}>
            <div className={"footer__container container"}>
                <a href={"#"} className={"footer__item footer__link"}>Support</a>
                <a href={"#"} className={"footer__item footer__link"}>Learning</a>
                <a href={"#"} className={"footer__item footer__link"}>Русская версия</a>
                <span className={"footer__item footer__item_right"}>© {copyrightYears} Alexandr Krylov</span>
            </div>
        </footer>
    );
}

export default Footer;