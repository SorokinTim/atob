import React, {useState} from "react";
import "./Login.scss";
import Input from './../../components/ui/Input/Input'
import Button from './../../components/ui/Button/Button'
import BottomInfoSlider from "./../../components/ui/BottomInfoSlider/BottomInfoSlider";
import {initializedFirebase} from "../../server";

export default function Login() {

    const [userEmail, setUserEmail] = useState(null);
    const [userPassword, setUserPassword] = useState(null);
    const [isSubmitClicked, setIsSubmitClicked] = useState(false);
    let currentUser = null;

    const submit = () => {
        setIsSubmitClicked(true);
        if (!userPassword || !userEmail) {
            alert("Не всё ввели!")
        } else {
            initializedFirebase.auth().signInWithEmailAndPassword(userEmail, userPassword).then(() => {
                    console.log("Good!");
                    currentUser = initializedFirebase.auth().currentUser;
                    console.log(currentUser);
                }).catch((error, errorMessage) => {
                    console.log(errorMessage)
            })
        }
    };

    return (
        <div className="container">
            <div className="form-block container__form-block">
                <div className="form-block__content">
                    <div className="form-block__title">Авторизация в Atob</div>
                    <div className="form-block__subtitle">Оптимизируй логистические процессы своей компании с помощью
                        Atob!
                    </div>
                    <form action="#" className="form-block__form form">
                        <Input type={"email"} placeholder={"Введите почту"} className="form__input"
                               isSubmitClicked={isSubmitClicked}
                               onChange={setUserEmail}/>
                        <Input type={"password"} placeholder={"Введите пароль"} className="form__input"
                               isSubmitClicked={isSubmitClicked}
                               onChange={setUserPassword}/>
                        <Button placeholder={"Войти"} className="form__button" onClick={submit}/>
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