import React, {useState} from 'react';
import './history.scss';
import ControlButton from "../../common.blocks/controlbutton/controlbutton";
import Popup from "../../common.blocks/popup/popup";
import Footer from "../../common.blocks/footer/footer";
import Commit from "../../common.blocks/commit/commit";
import Input from "../../common.blocks/input/input";
import commitsMocks from "./../../mock/mockCommits";
import {Link} from "react-router-dom";

const History = () => {
    const [commitCount, setCommitCount] = useState(4);
    const [isBuildPopupShown, showBuildPopupShown] = useState(false);
    const [hash, setHashValue] = useState('');
    const [isLoading, toggleLoading] = useState(false);
    const [error, setError] = useState(null);

    const onClickLoadMore = () => {
        setCommitCount(prev => prev + 4);
    }

    const onFormSubmit = e => {
        e.preventDefault();
        toggleLoading(true);
        setError(null);

        setTimeout(() => {
            if (Math.random() > 0.2) {
                showBuildPopupShown(false);
                setHashValue('');
            } else {
                setError('Error simulation: Something broken 🤷🏼‍♂️');
            }
            toggleLoading(false);

        }, 3000);
    }

    const settings = {
        repository: 'philip1967/my-awesome-repo'
    }

    return (
        <div className="history">
            <div className={"history__header"}>
                <div className={"history__container"}>
                    <div className={"history__title"}><h1>{settings.repository}</h1></div>
                    <div className={"history__controls"}>
                        <ControlButton text="Run build" icon={"play"} size="sm" style="alt"
                                       onClick={() => showBuildPopupShown(true)}
                        />
                        <Link to={"/settings"} className={"controlbutton controlbutton_grey"}>
                            <ControlButton icon={"settings"} size="sm" style="alt" to='/settings'/>
                        </Link>
                    </div>
                </div>
            </div>
            <main className="content wrapper">
                <div className="content__container container">
                    <div>
                        <ul className="commits">
                            {commitsMocks.map((commit, i) => {
                                return (i < commitCount) ? <Commit key={commit.id} commit={commit}/> : null
                                }
                            )}
                        </ul>
                    </div>
                    {commitCount < commitsMocks.length &&
                    <ControlButton
                        text="Show more"
                        size="sm"
                        style="alt"
                        elementClass="show-more-button"
                        onClick={onClickLoadMore}
                    />
                    }
                </div>
            </main>
            <Footer/>
            <Popup isShown={isBuildPopupShown} onClose={() => showBuildPopupShown(false)} title="Run Build">
                <p className="popup__description">
                    Enter the commit hash which you want to build.
                </p>
                <form name="settings" className="history__form form" onSubmit={onFormSubmit}>
                    <div className="form__group">
                        <div className="form__input-wrapper">
                            <Input
                                elementClass="form__input"
                                type="text"
                                value={hash}
                                name="hash"
                                placeholder="Commit hash"
                                required={true}
                                onChange={setHashValue}
                            />
                        </div>
                        {error && <p className="popup__error">{error}</p>}
                    </div>
                    <div className="form__buttons">
                        <ControlButton
                            theme={"yellow"}
                            text="Save"
                            type="submit"
                            elementClass="form__button"
                            disabled={isLoading}
                        />
                        <ControlButton
                            text="Cancel"
                            type="button"
                            style="alt"
                            onClick={() => showBuildPopupShown(false)}
                            elementClass="form__button"
                            disabled={isLoading}
                        />
                    </div>
                </form>
            </Popup>
        </div>
    )
}

export default History;