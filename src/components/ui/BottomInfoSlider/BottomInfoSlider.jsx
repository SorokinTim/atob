import React from 'react';
import s from './BottomInfoSlider.module.css'
import iconLogisctic from './img/logistics.png'

export default function BottomInfoSlider(props) {

    return (
        <div className={s.bottomInfoContainer}>{/*
            */}<div className={s.iconSection}>
                <div className={s.slideNumber}>01</div>
                <div className={s.iconContainer}>
                    <img src={iconLogisctic} alt="" className={s.icon}/>
                </div>
            </div>{/*
            */}<div className={s.textContainer}>
                <div className={s.headerText}>Оптимизируйте логистику</div>
                <div className={s.infoText}>Приложение за Вас просчитает оптимальные пути доставки и скорректирует бюджет</div>
            </div>
            <div className={s.controllersContainer}></div>
        </div>
    )
}