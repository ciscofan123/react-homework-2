import React, {useEffect} from 'react';
import ReactDOM from 'react-dom';
import './popup.scss';

const root = document.getElementById("app");

const Popup = props => {
    const {isShown, onClose, children, title} = props;
    useEffect(() => {
        document.addEventListener('keydown', onKeyPress);
        return () => {
            document.removeEventListener('keydown', onKeyPress);
        };
    }, []);

    useEffect(() => {
        if (isShown) {
            document.querySelector('body').style.overflow = 'hidden';
        } else {
            document.querySelector('body').style.overflow = 'auto';
        }
    })

    const onKeyPress = e => {
        if (e.key === 'Escape') {
            onClose();
        }
    }

    if (!isShown) return null;

    return root && ReactDOM.createPortal(
        <aside className="popup">
            <div className="popup__content">
                {title &&
                <h3 className="popup__title">
                    {title}
                </h3>
                }
                <div className="popup__body">
                    {children}
                </div>
            </div>
            <div className="popup__overlay"></div>
        </aside>,
        root
    );
}

export default Popup;