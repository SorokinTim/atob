import React from 'react';
import './App.css';
import {Route, Switch} from 'react-router-dom';
import Registration from "./Registration/Registration";
import Login from "./Login/Login";
import Products from "./Products/Products";


function App() {
    return (
        <Switch>
            <Route path={"/"} exact component={Registration}/>
            <Route path={"/login"} exact component={Login}/>
            <Route path={"/products"} exact component={Products}/>
        </Switch>
    );
}

export default App;
