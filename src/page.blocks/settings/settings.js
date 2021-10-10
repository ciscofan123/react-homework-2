import React, {useRef} from "react";
import Header from "../../common.blocks/header/header";
import Footer from "../../common.blocks/footer/footer";
import Input from "../../common.blocks/input/input";
import './settings.scss';
import NavButton from "../../common.blocks/navbutton/navbutton";

const Settings = () => {

    const onSubmit = () => {};
    const onChangeRepository = ()=> {};
    const onChangeBuild = ()=> {};
    const onChangeBranch = ()=> {};
    const onChangeDuration = () => {};
    const formRef = useRef(null);

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
                                       value={""}
                                       placeholder="user-name/repo-name"
                                       autoComplete="off" required={true} onChange={onChangeRepository}
                                />
                            </div>
                        </div>
                        <div className="settingsform__inputgroup">
                            <span className="settingsform__label">Build command <sup className={"settingsform__sup_red"}>*</sup></span>
                            <div className="form__input-wrapper">
                                <Input
                                    elementClass="form__input"
                                    type="text"
                                    value={""}
                                    name="build"
                                    required={true}
                                    autoComplete="off"
                                    placeholder="npm ci && npm run build"
                                    onChange={onChangeBuild}
                                />
                            </div>
                        </div>
                        <div className="settingsform__inputgroup">
                            <span className="settingsform__label">Main branch</span>
                            <div className="form__input-wrapper">
                                <Input
                                    elementClass="form__input"
                                    type="text"
                                    value={""}
                                    name="branch"
                                    autoComplete="off"
                                    placeholder="master"
                                    onChange={onChangeBranch}
                                />
                            </div>
                        </div>
                        <div className="settingsform__inputgroup settingsform__inputgroup_inline">
                            <span className="form__header">Synchronize every</span>
                            <Input
                                elementClass="form__input"
                                type="number"
                                name="syncDuration"
                                value={""}
                                placeholder="10"
                                min={0}
                                max={60}
                                onChange={onChangeDuration}
                            />
                            <span className="form__unit">minutes</span>
                        </div>
                        <div className="form__buttons">
                            <NavButton
                                theme={"yellow"}
                                text="Save"
                                type="submit"
                            />
                            <NavButton
                                text="Cancel"
                                type="button"
                                onClick={(e) => { e.preventDefault(); history.goBack() }}
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