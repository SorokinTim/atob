import React, {useState} from 'react';
import s from './Input.module.css'

export default function Input(props) {

    const [lineClassName, setLineClassName] = useState([s.bottomLine]);
    const [placeholderClassName, setPlaceholderClassName] = useState([s.placeholder, s.placeholderActive]);

    const changePlaceholderToActive = () => {
        const classes = [
            s.placeholder,
            s.placeholderPassive,
        ];
        setPlaceholderClassName(classes);
    };

    const changeBottomLineToError = () => {
        console.log('YES!');

        const classes = [
            s.bottomLine,
            s.lineError,
        ];

        setLineClassName(classes);
    };

    return (
        <div className={s.inputContainer}>
            <div className={placeholderClassName.join(' ')}>Ваше имя</div>
            <input type="text" className={s.input} onFocus={changePlaceholderToActive} onBlur={changeBottomLineToError}/>
            <div className={lineClassName.join(' ')}/>
        </div>
    )
}