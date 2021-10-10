import React from 'react';
import './input.scss';

const Input = (props) => {
    const { elementClass, name, id, type, onChange, ...rest } = props;

    return (
        <React.Fragment>
            <input
                className={`${elementClass ? elementClass + ' ' : ''}input${type ? ` input_${type}` : ''}`}
                type={type}
                name={name}
                id={id || name}
                onChange={e => onChange(e.target.value)}
                pattern=".*\S+.*"
                {...rest}
            />
            {type !== 'number' &&
            ( <button className="form__input-clear" type="button" onClick={() => onChange('')}>
                <img src={"/img/icon_clear.svg"} alt={"clear icon"} />
            </button> )
            }
        </React.Fragment>
    );
};

export default Input;