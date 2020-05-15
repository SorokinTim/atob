import React from 'react';
import s from './MenuLink.module.css'

export default function MenuLink(props) {

    return (
        <div className={`${props.className} ${s.container}`}>
            <i className={`fas ${props.iconClass} ${s.icon}`}/>
            <div className={s.title}>
                {props.children}
            </div>
        </div>
    )
}