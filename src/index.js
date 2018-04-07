import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/app/App';
import registerServiceWorker from './registerServiceWorker';

import Provider from './components/contexts/shoppingList/Provider';

import 'bootstrap/dist/css/bootstrap.css';

ReactDOM.render(
    <Provider>
        <App />
    </Provider>
    , document.getElementById('root'));
registerServiceWorker();
