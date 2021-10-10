import React, {useRef,useState} from "react";
import Header from "../../common.blocks/header/header";
import Footer from "../../common.blocks/footer/footer";
import Input from "../../common.blocks/input/input";
import './settings.scss';
import NavButton from "../../common.blocks/navbutton/navbutton";
import {Redirect} from "react-router-dom";

const Settings = () => {

    const onSubmit = (e) => {
        e.preventDefault();
        setIsApplied(true);
    };
    const formRef = useRef(null);

    const [repositoryText, setRepositoryText] = useState("");
    const [buildText, setBuildText] = useState("");
    const [branchText, setBranchText] = useState("");
    const [syncNumber, setSyncNumber] = useState("");
    const [isApplied, setIsApplied] = useState(false);

    if (isApplied) {
        return <Redirect to={`/history/`} />
    }

    return (
        <div className={"app settings"}>
            <Header></Header>
            <main className={"settings__content container"}>
                <div className={"settingsform"}>
                    <div className="settingsform__header">
                        <h3 className="settingsform__title">Settings</h3>
                        <p className="settingsform__description">Configure repository connection and synchronization settings.</p>
                    </div>

                    <form ref={formRef} className="settingsform__form" onSubmit={onSubmit} method="POST" action="">
                        <div className="settingsform__inputgroup">
                            <span className="settingsform__label">GitHub repository <sup className={"settingsform__sup_red"}>*</sup></span>
                            <div className="settingsform__input-wrapper">
                                <Input type="text"
                                       name="repository"
                                       elementClass="form__input"
                                       value={repositoryText}
                                       placeholder="user-name/repo-name"
                                       autoComplete="off" required={true} onChange={setRepositoryText}
                                />
                            </div>
                        </div>
                        <div className="settingsform__inputgroup">
                            <span className="settingsform__label">Build command <sup className={"settingsform__sup_red"}>*</sup></span>
                            <div className="settingsform__input-wrapper">
                                <Input
                                    elementClass="form__input"
                                    type="text"
                                    value={buildText}
                                    name="build"
                                    required={true}
                                    autoComplete="off"
                                    placeholder="npm ci && npm run build"
                                    onChange={setBuildText}
                                />
                            </div>
                        </div>
                        <div className="settingsform__inputgroup">
                            <span className="settingsform__label">Main branch</span>
                            <div className="settingsform__input-wrapper">
                                <Input
                                    elementClass="form__input"
                                    type="text"
                                    value={branchText}
                                    name="branch"
                                    autoComplete="off"
                                    placeholder="master"
                                    onChange={setBranchText}
                                />
                            </div>
                        </div>
                        <div className="settingsform__inputgroup settingsform__inputgroup_inline">
                            <span className="form__header">Synchronize every</span>
                            <Input
                                elementClass="form__input"
                                type="number"
                                name="syncDuration"
                                value={syncNumber}
                                placeholder="10"
                                min={0}
                                max={60}
                                onChange={setSyncNumber}
                            />
                            <span className="form__unit">minutes</span>
                        </div>
                        <div className="form__buttons">
                            <NavButton
                                className={"form__button"}
                                theme={"yellow"}
                                text={"Save"}
                                type={"submit"}
                            />
                            <NavButton
                                className={"form__button"}
                                text={"Cancel"}
                                type={"button"}
                                onClick={(e) => { e.preventDefault(); history.goBack(); }}
                            />
                        </div>
                    </form>
                </div>
            </main>
            <Footer className={"settings__footer"}></Footer>
        </div>
    );
}

export default Settings;