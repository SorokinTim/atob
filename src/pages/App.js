import React from 'react';
import './App.css';
import Input from './components/ui/Input/Input'
import Button from './components/ui/Button/Button'
import BottomInfoSlider from "./components/ui/BottomInfoSlider/BottomInfoSlider";


function App() {
    return (
        <div className="container mw-100 mh-100 p-0 m-0">
            <div className="row w-100 h-100 p-0 m-0">
                <div className="col-6 p-0 m-0 d-flex">
                    <div className="w-75 h-50 align-self-center mx-auto">
                        <div className="display-4">Регистрация в atob</div>
                        <div className={"mt-2"}>Зарегистрируйтесь в приложении чтобы получить полный доступ</div>
                        <Input type={"text"} placeholder={"Введите имя"}/>
                        <Input type={"email"} placeholder={"Введите почту"} className={"m-2"}/>
                        <Input type={"password"} placeholder={"Введите пароль"} className={"m-2"}/>
                        <Button placeholder={"Зарегистрироваться"} className={"mt-3"}/>
                    </div>
                </div>
                <div className="col-6 p-0 m-0">
                    <BottomInfoSlider />
                </div>
            </div>
        </div>
    );
}

export default App;
