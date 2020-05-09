import React, {useState, useEffect} from "react";
import "./Registration.scss";
import Input from './../../components/ui/Input/Input'
import Button from './../../components/ui/Button/Button'
import BottomInfoSlider from "./../../components/ui/BottomInfoSlider/BottomInfoSlider";
import Checkbox from "../../components/ui/Checkbox/Checkbox";

export default function Registration() {
    const [userName, setUserName] = useState(null);
    const [userEmail, setUserEmail] = useState(null);
    const [userPassword, setUserPassword] = useState(null);
    const [isCheckboxChecked, setIsCheckboxChecked] = useState(false);
    const [isSubmitClicked, setIsSubmitClicked] = useState(false);

    const submit = () => {
        setIsSubmitClicked(true);
        if (!isCheckboxChecked) {
            alert('Примите конфиденциальность!')
        } else if (!userPassword || !userEmail || !userName) {
            alert("Не всё ввели!")
        } else {
            // TODO: основные данные:
            // userName - Имя пользователя
            // userEmail - Email пользователя
            // userPassword - Пароль пользователя
            // TODO: Их нужно передать в базу данных, также нужно сгенерировать ключ для каждого пользователя
        }
    };


    return (
        <div className="container">
            <div className="form-block container__form-block">
                <div className="form-block__content">
                    <div className="form-block__title">Регистрация в Atob</div>
                    <div className="form-block__subtitle">Оптимизируй логистические процессы своей компании с помощью
                        Atob!
                    </div>
                    <form action="#" className="form-block__form form">
                        <Input type={"text"} placeholder={"Введите имя"} className="form__input"
                               isSubmitClicked={isSubmitClicked}
                               onChange={setUserName}/>
                        <Input type={"email"} placeholder={"Введите почту"} className="form__input"
                               isSubmitClicked={isSubmitClicked}
                               onChange={setUserEmail}/>
                        <Input type={"password"} placeholder={"Введите пароль"} className="form__input"
                               isSubmitClicked={isSubmitClicked}
                               onChange={setUserPassword}/>
                        <Checkbox className={"form__checkbox"}
                                  setIsCheckboxChecked={setIsCheckboxChecked}
                                  isSubmitClicked={isSubmitClicked}
                                  isCheckboxChecked={isCheckboxChecked}>Я соглашаюсь с политикой
                            конфиденциальности</Checkbox>
                        <Button placeholder={"Зарегистрироваться"} className="form__button" onClick={submit}/>
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