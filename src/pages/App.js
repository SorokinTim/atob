import React from 'react';
import './App.css';
import {Route, Switch} from 'react-router-dom';
import Registration from "./Registration/Registration";
import Login from "./Login/Login";


function App() {
    return (
        <Switch>
            <Route path={"/"} exact component={Registration}/>
            <Route path={"/login"} exact component={Login}/>
        </Switch>
    );
}

export default App;
