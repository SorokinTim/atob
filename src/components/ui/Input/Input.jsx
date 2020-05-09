import React, {useState} from 'react';
import s from './Input.module.css'

export default function Input(props) {

    const [isEmpty, setIsEmpty] = useState(true);
    const [isActive, setIsActive] = useState(false);
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);
    const [isInputFocused, setIsInputFocused] = useState(null);

    const renderPlaceholderWithState = () => {
        if (isActive) {
            return (<div className={`${s.placeholder} ${s.placeholderPassive}`}>{props.placeholder}</div>)
        } else {
            return (<div className={`${s.placeholder} ${s.placeholderActive}`}>{props.placeholder}</div>)
        }
    };

    const renderBottomLineWithState = () => {
        if (isEmpty === true && isInputFocused === false) {
            return (<div className={`${s.bottomLine} ${s.lineError}`}/>);
        } else if (isEmpty === false && isInputFocused === true){
            return (<div className={`${s.bottomLine} ${s.line100}`}/>);
        } else if (isEmpty === false) {
            return (<div className={`${s.bottomLine} ${s.line100}`}/>);
        } else if(props.isSubmitClicked && isEmpty) {
            return (<div className={`${s.bottomLine} ${s.lineError}`}/>);
        } else {
            return (<div className={`${s.bottomLine}`}/>);
        }
    };

    const renderPasswordIcon = () => {
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
            {renderPasswordIcon()}
            {renderPlaceholderWithState()}
            <input type={(props.type === "password" && isPasswordVisible === false) ? "password" : "text"}
                   className={s.input}
                   onFocus={() => {
                       setIsActive(true);
                       setIsInputFocused(true);
                   }}
                   onBlur={() => setIsInputFocused(false)}
                   onChange={event => {
                       if(event.target.value !== "") {
                           setIsEmpty(false);
                       } else {
                           setIsEmpty(true)
                       }
                       props.onChange(event.target.value);
                   }}
            />
            {renderBottomLineWithState()}
        </div>
    )
}