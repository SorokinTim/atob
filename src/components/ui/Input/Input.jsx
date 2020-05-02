import React, {useState} from 'react';
import s from './Input.module.css'

export default function Input(props) {

    const [lineClassName, setLineClassName] = useState([s.bottomLine]);
    const [placeholderClassName, setPlaceholderClassName] = useState([s.placeholder, s.placeholderActive]);

    const changePlaceholderToActive = () => {
        setPlaceholderClassName([
            s.placeholder,
            s.placeholderPassive,
        ]);
    };

    const changeBottomLineToError = () => {
        setLineClassName([
            s.bottomLine,
            s.lineError,
        ]);
    };

    return (
        <div className={s.inputContainer}>
            <div className={placeholderClassName.join(' ')}>{props.placeholder}</div>
            <i className={`fas fa-eye ${s.inputIcon}`}/>
            <input type={props.type} className={s.input} onFocus={changePlaceholderToActive}
                   onBlur={changeBottomLineToError}/>
            <div className={lineClassName.join(' ')}/>
        </div>
    )
}