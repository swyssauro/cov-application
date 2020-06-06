import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

// Import Pages
import Home from './pages/Home';
import Painel from './pages/Painel';

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/painel" component={Painel} />
            </Switch>
        </BrowserRouter>
    );
}