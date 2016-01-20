import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';

// Components
import Home from 'ui/home';
import Users from 'ui/users';

// Presenter Note: Explain browserHistory
ReactDOM.render((
    <Router history={browserHistory}>
        <Route path="/" component={Home} />
        <Route path="/users" component={Users} />
    </Router>
), document.getElementById('root'));

// Note: Must fire up a legit web server in the path where index.html is. Example:
// $ http-server