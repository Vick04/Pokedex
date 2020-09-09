import React from 'react';
import ReactDOM from 'react-dom';
import App from './src/App';
import { store } from './src/Redux/Store';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';

ReactDOM.render(
    <HashRouter>
        <Provider store={store}>
            <App />
        </Provider>
    </HashRouter>,
    document.getElementById('root'),
);
