import React from 'react';
import s from './LeftMenu.module.css'
import MenuLink from "../MenuLink/MenuLink";

export default function LeftMenu(props) {

    return (
        <div className={s.leftMenu}>
            <div className={s.brand}>Atob</div>
            <div className={s.createProduct}>
                <div className={s.titleContainer}>
                    <div className={s.title}>Создать товар</div>
                </div>
                <div className={s.plusContainer}>
                    <div className={s.plusCircle}>
                        <div className={s.plus}>+</div>
                    </div>
                </div>
            </div>
            <div className={s.linkSection}>
                <MenuLink iconClass="fa-box-open" className={`${s.link} ${s.linkActive}`}>Мои
                    товары</MenuLink>
                <MenuLink iconClass="fa-truck-loading" className={s.link}>Товары в пути</MenuLink>
                <MenuLink iconClass="fa-cog" className={s.link}>Настройки</MenuLink>
            </div>
            <div className={s.profile}>
                <div className={s.profileContainer}>
                    <div className={s.profileCircle}/>
                </div>
                <div className={s.profileName}>Андрей</div>
            </div>
        </div>
    )
}