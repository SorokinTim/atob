import React from "react";
import "./Products.scss";
import LeftMenu from "../../components/ui/LeftMenu/LeftMenu";
import Button from "../../components/ui/Button/Button";

export default function Products() {

    return (
        <div className="container">
            <LeftMenu/>
            <div className="content-space">
                <div className="content-container content-space__content-container">
                    <div className="content-container__illustration"/>
                    <div className="content-container__title">Босс, похоже тут пусто!</div>
                    <div className="content-container__subtitle">
                        Вы еще не добавили ни одного товара, создайте товар для дальнейшей работы с приложением.
                    </div>
                    <div className="content-container__button-container">
                        <Button placeholder="Добавить товар" className="content-container__button"/>
                    </div>
                </div>
            </div>
        </div>
    );
}