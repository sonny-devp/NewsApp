import React, {Component} from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from 'react-router-dom'

import Api from './components/Negocios';
import Tech from './components/Tech';
import Apple from './components/Apple';

class App extends Component{
    render(){
        return(
            <Router>
                <div className="btn-group">
                    <Link to = "/" className="btn btn-outline-light" aria-current="page">Business</Link>
                    <Link to = "/Tech" className="btn btn-outline-light">Tech</Link>
                    <Link to ="/Apple" className="btn btn-outline-light">Apple</Link>
                </div>
                <div >
                    <Switch>
                        <Route path="/" exact>
                            <Api />
                        </Route>
                        <Route path="/Tech">
                            <Tech />
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
