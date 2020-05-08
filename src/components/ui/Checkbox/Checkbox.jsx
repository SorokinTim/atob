import React, {useState} from 'react';
import s from './Checkbox.module.css'

export default function Checkbox(props) {
    const [isChecked, setIsChecked] = useState(false);

    return (
        <div className={`${s.checkboxContainer} ${props.className}`} onClick={() => setIsChecked((prevState => {
            return !prevState
        }))}>
            <div className={`${s.checkbox} ${(isChecked) ? s.checked : ""}`}>
                {(isChecked) ? <i className={`fas fa-check ${s.checkIcon}`}/> : null}
            </div>
            <div className={s.checkboxText}>{props.children}</div>
        </div>
    )
}