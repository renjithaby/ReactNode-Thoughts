import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {AppContainer} from './App';
import { createStore,applyMiddleware } from 'redux';
import AppReducer from './Reducers/Index.js';
import registerServiceWorker from './registerServiceWorker';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import {Router,Route,Switch} from 'react-router-dom';
import history from './History';

let store = createStore(AppReducer,applyMiddleware(thunk));
const app = document.getElementById("root");

ReactDOM.render(
        <Provider store={store}>
        <Router  history={history} >
            <Switch>
                <Route   path="/userprofile/:id" component={AppContainer}/>
                <Route   path="/article/:id" component={AppContainer}/>
                <Route component={AppContainer}/>
            </Switch>
        </Router>
    </Provider>

    , app);

registerServiceWorker();

