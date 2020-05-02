import React from 'react';
import s from './Button.module.css'

export default function Button(props) {

    return (
        <div className={s.buttonContainer}>
            {props.placeholder}
        </div>
    )
}