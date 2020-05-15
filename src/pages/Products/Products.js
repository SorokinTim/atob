import React, {useState} from "react";
import "./Products.scss";
import {initializedFirebase} from "../../server";
import MenuLink from "../../components/ui/MenuLink/MenuLink";

export default function Products() {

    return (
        <div className="container">
            <div className="left-menu">
                <div className="left-menu__brand">Atob</div>
                <div className="create-product left-menu__create-product">
                    <div className="create-product__title-container">
                        <div className="create-product__title">Создать товар</div>
                    </div>
                    <div className="create-product__plus-container">
                        <div className="create-product__plus-circle">
                            <div className="create-product__plus">+</div>
                        </div>
                    </div>
                </div>
                <div className="left-menu__link-section">
                    <MenuLink iconClass="fa-box-open" className={'left-menu__link left-menu__link_active'}>Мои
                        товары</MenuLink>
                    <MenuLink iconClass="fa-truck-loading" className={'left-menu__link'}>Товары в пути</MenuLink>
                    <MenuLink iconClass="fa-cog" className={'left-menu__link'}>Настройки</MenuLink>
                </div>
                <div className="profile left-menu__profile">
                    <div className="profile__profile-img"></div>
                    <div className="profile__profile-name"></div>
                </div>
            </div>
            <div className="content-space"></div>
        </div>
    );
}