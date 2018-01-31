import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as Redux from 'redux';
import * as Immutable from 'immutable';
import {Provider} from 'react-redux';
import registerServiceWorker from './registerServiceWorker';
import UserReducer from "./reducers/UserReducer"


const store = Redux.createStore(UserReducer,Immutable.Map({name: "armen", email: "armen@gmail.com"}),window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
