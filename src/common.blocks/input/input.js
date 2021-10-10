import React from 'react';
import './input.scss';

const Input = (props) => {
    const { elementClass, name, id, type, onChange, ...rest } = props;

    const actualClassName = [
        (elementClass) ? elementClass : null,
        'input',
        (type) ? `input_${type}` : null
    ].join(' ');

    return (
        <React.Fragment>
            <input
                className={actualClassName}
                name={name}
                type={type}
                pattern=".*\S+.*"
                id={id || name}
                onChange={e => onChange(e.target.value)}
                {...rest}
            />
            {type !== 'number' &&
            ( <button className="input__clear" type="button" onClick={() => onChange('')}>
                <img src={"/img/icon-clear.svg"} alt={"clear icon"} />
            </button> )
            }
        </React.Fragment>
    );
};

export default Input;