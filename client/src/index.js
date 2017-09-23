import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {AppContainer} from './App';
import { createStore,applyMiddleware } from 'redux';
import AppReducer from './Reducers/Index.js';
import registerServiceWorker from './registerServiceWorker';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import SignUpPage  from './SignUpPage';
import SignInPage  from './SignInPage';
import {Router,Route,Switch} from 'react-router-dom';
import history from './History';

let store = createStore(AppReducer,applyMiddleware(thunk));
const app = document.getElementById("root");




ReactDOM.render(
        <Provider store={store}>
        <Router  history={history} >
            <div>
            <Switch>
            <Route   path="/feed" component={AppContainer}/>
            <Route   path="/signin" component={AppContainer}/>
            <Route   path="/signup" component={AppContainer}/>
            <Route   path="/feed" component={AppContainer}/>
            <Route   path="/newpost" component={AppContainer}/>
            <Route   path="/userprofile/:id" component={AppContainer}/>
            <Route   path="/article/:id" component={AppContainer}/>
            <Route component={() => <AppContainer/>}/>
            </Switch>
            </div>
        </Router>
    </Provider>

    , app);

registerServiceWorker();

