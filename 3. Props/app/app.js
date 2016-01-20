import React from 'react'; // Presenter Note: Required even if we're not using the `React` object
import ReactDOM from 'react-dom';

// Components
import Nav from 'ui/nav';
import Anchor from 'ui/anchor';

ReactDOM.render((
    <Nav>
        <Anchor goSomewhere="http://google.com" text="Googles"/>
        <Anchor goSomewhere="http://twitter.com" text="Twitters"/>
    </Nav>
), document.getElementById('root'));
