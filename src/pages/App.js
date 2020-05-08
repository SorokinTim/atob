import React from 'react';
import './App.css';
import {Route, Switch} from 'react-router-dom';
import Registration from "./Registration/Registration";


function App() {
    return (
        <Switch>
            <Route path={"/"} exact component={Registration}/>
        </Switch>
    );
}

export default App;
