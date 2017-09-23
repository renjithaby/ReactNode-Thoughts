/**
 * Created by rabby on 13/08/17.
 */
import { combineReducers } from 'redux';

//import UsersListReducer from './UsersListReducer';
import UserDataReducer from './UserDataReducer';
import ArticleDataReducer from './ArticleDataReducer';


const AppReducer = combineReducers({

    userData  : UserDataReducer,
    articleData : ArticleDataReducer
});

export default AppReducer;