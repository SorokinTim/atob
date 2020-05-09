import React from 'react';
import s from './Checkbox.module.css'

export default function Checkbox(props) {

    return (
        <div className={`${s.checkboxContainer} ${props.className}`}
             onClick={() => props.setIsCheckboxChecked((prevState => {
                 return !prevState
             }))}>
            <div className={`
            ${s.checkbox} ${(props.isCheckboxChecked) ? s.checked :
                (props.isSubmitClicked) ? s.unChecked : ""}
                `}>
                {(props.isCheckboxChecked) ? <i className={`fas fa-check ${s.checkIcon}`}/> : null}
            </div>
            <div className={s.checkboxText}>{props.children}</div>
        </div>
    )
}