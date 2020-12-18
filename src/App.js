import React, {Component} from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from 'react-router-dom'

import Api from './components/Negocios';
import Bit from './components/Bitcoin';
import Apple from './components/Apple';
import './assets/css/App.css';
class App extends Component{
    render(){
        return(
            <Router>
                <div class="btn-group">
                    <Link to = "/" class="btn btn-outline-light" aria-current="page">Business</Link>
                    <Link to = "/Bitcoin" class="btn btn-outline-light">Bitcoin</Link>
                    <Link to ="/Apple" class="btn btn-outline-light">Apple</Link>
                </div>
                <div >
                    <Switch>
                        <Route path="/" exact>
                            <Api />
                        </Route>
                        <Route path="/Bitcoin">
                            <Bit />
                        </Route>
                        <Route path="/Apple" exact>
                            <Apple />
                        </Route>
                    </Switch>
                </div>
            </Router>
        );
    }
}

export default App;
