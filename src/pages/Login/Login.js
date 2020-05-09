import React from "react";
import "./Login.scss";
import Input from './../../components/ui/Input/Input'
import Button from './../../components/ui/Button/Button'
import BottomInfoSlider from "./../../components/ui/BottomInfoSlider/BottomInfoSlider";

export default function Login() {
    return (
        <div className="container">
            <div className="form-block container__form-block">
                <div className="form-block__content">
                    <div className="form-block__title">Авторизация в Atob</div>
                    <div className="form-block__subtitle">Оптимизируй логистические процессы своей компании с помощью
                        Atob!
                    </div>
                    <form action="#" className="form-block__form form">
                        <Input type={"email"} placeholder={"Введите почту"} className="form__input"/>
                        <Input type={"password"} placeholder={"Введите пароль"} className="form__input"/>
                        <Button placeholder={"Войти"} className="form__button"/>
                    </form>
                </div>
            </div>
            <div className="slide-block container__slide-block">
                <div className="slide-block__image-container">
                </div>
                <BottomInfoSlider className="slide-block__slider"/>
            </div>
        </div>
    );
}