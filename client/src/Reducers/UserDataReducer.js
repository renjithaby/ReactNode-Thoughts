/**
 * Created by rabby 
 * The reducer which handles the user details, likes and login error message
 */
import history from '../History'


const UserDataReducer = (state = {user:{},likes:[],login:{errorMessage:""}}, action = {}) => {

    switch (action.type){

        case "REGISTER_SUCCESS" :
            return registerSuccess(state,action);

        case "REGISTER_FAILED" :
            return registerFailed(state,action);

        case "LOGIN_SUCCESS" :
            return loginSuccess(state,action);

        case "LOGIN_FAILED" :
            return loginFailed(state,action);

        case "ADD_ARTICLE_SUCCESS" :
            return addArticleSuccess(state,action);

        case "ADD_ARTICLE_FAILED" :
            return addArticleFailed(state,action);

        case "ADD_FOLLOWING_SUCCESS" :
            return addFollowingSuccess(state,action);

        case "ADD_FOLLOWING_FAILED" :
            return  addFollowingFailed(state,action);

        case "REMOVE_FOLLOWING_SUCCESS" :
            return removeFollowingSuccess(state,action);

        case "REMOVE_FOLLOWING_FAILED" :
            return  removeFollowingFailed(state,action);

        case "ADD_LIKE_SUCCESS" :
            return addLikeSuccess(state,action);

        case "ADD_LIKE_FAILED" :
            return  addLikeFailed(state,action);

        case "REMOVE_LIKE_SUCCESS" :
            return removeLikeSuccess(state,action);

        case "REMOVE_LIKE_FAILED" :
            return  removeLikeFailed(state,action);

        case "LOAD_USER_TOKEN_SUCCESS" :
            return loadUserFromTokenSuccess(state,action);

        case "HANDLE_LOGOUT_SUCCESS" :
            return handleLogoutSuccess(state,action);

        default:
            return state;
            break;
    }


    function registerSuccess(state, action){
        history.push('/signin');
        return {...state};
    }

    function registerFailed(state,action){
        window.alert(action.data.message);
        return state;
    }


    function loginSuccess(state, action){
         history.push('/feed');
        return {...state, user : action.data.user, likes:action.data.userLikes, login:{errorMessage:""}};
    }

    function loginFailed(state, action){
        return {...state, login:{errorMessage:action.data.message} };
    }

    function addArticleSuccess(state,action){
        history.push('/feed');
        return {...state};
    }

    function addArticleFailed(state,action){
        window.alert(action.data.message);
        return state;
    }

    function addLikeSuccess(state,action){
        return {...state,likes:action.data.userLikes};
    }

    function addLikeFailed(state,action){
        return {...state};
    }

    function removeLikeSuccess(state,action){
        return {...state,likes:action.data.userLikes};
    }

    function removeLikeFailed(state,action){
        return {...state};
    }
 
     function addFollowingSuccess(state,action){
       return {...state, user : action.data};
    }

     function addFollowingFailed(state,action){
        window.alert(action.data.message);
        return state;
    }

    function removeFollowingSuccess(state,action){
       return {...state, user : action.data};
    }

    function removeFollowingFailed(state,action){
        window.alert(action.data.message);
        return state;
    }

    function loadUserFromTokenSuccess(state, action){
        return {...state, user : action.data.user , likes:action.data.userLikes };
    }

    function loadUserFromTokenFailed(state,action){
        window.alert(action.data.message);
        return state;
    }

    function handleLogoutSuccess(state,action){
        history.push('/signin');
        return {...state, user :{} , likes:{} };
    }

}

export default UserDataReducer;
