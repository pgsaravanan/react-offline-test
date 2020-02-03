import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import GenerationContainer from './containers/generationContainer';
import Nav from './components/Navigation/Nav';
import '../styles/styles.css';
const App = () => {
    return(
        <Router>
            <Nav/>
            <Switch>
                <Route
                    path="/"
                    exact 
                    component={GenerationContainer}
                />
            </Switch>
        </Router>
        // <GemerationContainer />
    )
};

export {
    App
}