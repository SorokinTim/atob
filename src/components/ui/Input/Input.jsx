import React, {useState} from 'react';
import s from './Input.module.css'

export default function Input(props) {

    const [isEmpty, setIsEmpty] = useState(true);
    const [isActive, setIsActive] = useState(false);
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);

    const returnPlaceholderWithState = () => {
        if (isActive) {
            return (<div className={`${s.placeholder} ${s.placeholderPassive}`}>{props.placeholder}</div>)
        } else {
            return (<div className={`${s.placeholder} ${s.placeholderActive}`}>{props.placeholder}</div>)
        }
    };

    const returnBottomLineWithState = () => {
        if (isEmpty && !isActive) {
            return (<div className={`${s.bottomLine}`}/>);
        } else if (isEmpty) {
            console.log('yea!');
            return (<div className={`${s.bottomLine} ${s.lineError}`}/>);
        } else {
            return (<div className={`${s.bottomLine} ${s.line100}`}/>);
        }
    };

    const returnPasswordIcon = () => {
        if (props.type === "password") {
            return (<i className={`${(isPasswordVisible) ? "fas fa-eye-slash" : "fas fa-eye"} ${s.inputIcon}`}
                       onClick={() => setIsPasswordVisible(prevState => {
                           return !prevState
                       })}/>);
        } else {
            return null
        }
    };

    return (
        <div className={`${s.inputContainer} ${props.className}`}>
            {returnPasswordIcon()}
            {returnPlaceholderWithState()}
            <input type={(props.type === "password" && isPasswordVisible === false) ? "password" : "text"} className={s.input}
                   onFocus={() => setIsActive(true)}
                // onBlur={(e) => e.target.value !== "" ? setIsEmpty(false) : setIsEmpty(true)}
                   onChange={event => event.target.value !== "" ? setIsEmpty(false) : setIsEmpty(true)}
            />
            {returnBottomLineWithState()}
        </div>
    )
}