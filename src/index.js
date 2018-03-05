import React from 'react';
import ReactDOM from 'react-dom';

import {
    HashRouter,
    Route,
    Switch
} from 'react-router-dom';

import App from './containers/App/App.jsx';

	import './assets/css/bootstrap.min.css';
	import './assets/css/font-awesome.min.css';
	import './assets/css/owl.carousel.css';
	import './assets/css/owl.theme.css';
	import './assets/css/transitions.css';
	import './assets/css/main.css';
	import './assets/css/responsive.css';
	// import './assets/js/vendor/modernizr-2.8.3-respond-1.4.2.min.js';



ReactDOM.render((
    <HashRouter>
        <Switch>
            <Route path="/" name="Home" component={App}/>
        </Switch>
    </HashRouter>
),document.getElementById('root'));
