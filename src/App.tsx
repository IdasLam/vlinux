import React from 'react'
import Home from './views/home/home'
import Redovisning from './views/redovisning/redovisning'
import About from './views/about/about'
import './App.scss'

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

function App() {
    return (
        <Router>
            <Switch>
                <Route path="*/om">
                    <About />
                </Route>
                <Route path="*/redovisning">
                    <Redovisning />
                </Route>
                <Route path="">
                    <Home />
                </Route>
            </Switch>
        </Router>
    )
}

export default App
