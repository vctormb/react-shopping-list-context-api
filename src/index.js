import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/app/App';
import registerServiceWorker from './registerServiceWorker';

import ShoppingListProvider from './components/contexts/shoppingList/Provider';

import 'bootstrap/dist/css/bootstrap.css';

ReactDOM.render(
    <ShoppingListProvider>
        <App />
    </ShoppingListProvider>
    , document.getElementById('root'));
registerServiceWorker();
