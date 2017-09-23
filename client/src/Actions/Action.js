/**
 * Created by rabby on 09/08/17.
 */

import dataApi from '../api/dataApi'
import history from '../History'

export var usersList = [];

export const registrationSuccess = (data) => {
    return {
        type: "REGISTER_SUCCESS",
        data: data
    };
}

export const registrationFailed = (data) => {
    return {
        type: "REGISTER_FAILED",
        data:data
    };
}

export const loginSuccess = (data) => {
    return {
        type: "LOGIN_SUCCESS",
        data: data
    };
}

export const loginFailed = (data) => {
    return {
        type: "LOGIN_FAILED",
        data:data
    };
}

export const getGlobalFeedSuccess = (data) => {
    return {
        type:"GLOBAL_FEED_SUCCESS",
        data: data
    };
}

export const getGlobalFeedFailed = () => {
    return {
        type: "GLOBAL_FEED_FAILED"
    };
}

export const getYourFeedSuccess = (data) => {
    return {
        type:"YOUR_FEED_SUCCESS",
        data: data
    };
}

export const getYourFeedFailed = () => {
    return {
        type: "YOUR_FEED_FAILED"
    };
}

export const addNewArticleSuccess = (data) => {
    return {
        type:"ADD_ARTICLE_SUCCESS",
        data: data
    };
}

export const addNewArticleFailed = (data) => {
    return {
        type: "ADD_ARTICLE_FAILED",
        data: data

    };
}

export const getUserArticlesSuccess = (data) => {
    return {
        type:"GET_USER_ARTICLE_SUCCESS",
        data: data
    };
}

export const getUserArticlesFailed = (data) => {
    return {
        type: "GET_USER_ARTICLE_FAILED",
        data: data

    };
}

export const getUserByIdSuccess = (data) => {
    return {
        type: "UPDATE_PROFILE_USER",
        data: data

    };
}

export const getUserByIdFailed = (data) => {
    return {
        type: "UPDATE_PROFILE_USER_FAILED",
        data: data

    };
}


export const addFollowingSuccess = (data) => {
    return {
        type: "ADD_FOLLOWING_SUCCESS",
        data: data

    };
}

export const addFollowingFailed = (data) => {
    return {
        type: "ADD_FOLLOWING_FAILED",
        data: data

    };
}

export const removeFollowingSuccess = (data) => {
    return {
        type: "REMOVE_FOLLOWING_SUCCESS",
        data: data

    };
}

export const removeFollowingFailed = (data) => {
    return {
        type: "REMOVE_FOLLOWING_FAILED",
        data: data

    };
}

export const addLikeSuccess = (data) => {
    return {
        type: "ADD_LIKE_SUCCESS",
        data: data
    };
}

export const addLikeFailed = (data) => {
    return {
        type: "ADD_LIKE_FAILED",
        data: data
    };
}
export const removeLikeSuccess = (data) => {
    return {
        type: "REMOVE_LIKE_SUCCESS",
        data: data
    };
}

export const removeLikeFailed = (data) => {
    return {
        type: "REMOVE_LIKE_FAILED",
        data: data
    };
}

export const getArticleByIdSuccess= (data) => {
    return {
        type: "SET_SELECTED_ARTICLE",
        data: data
    };
}
export const getArticleByIdFailed= (data) => {
    return {
        type: "SET_SELECTED_ARTICLE_FAILED",
        data: data
    };
}

export const getArticleCommentsSuccess = (data) => {
    return {
        type: "GET_COMMENTS_SUCCESS",
        data: data
    };
}

export const getArticleCommentsFailed = (data) => {
    return {
        type: "GET_COMMENTS_FAILED",
        data: data
    };
}

export const addNewCommentSuccess = (data) => {
    return {
        type: "ADD_COMMENTS_SUCCESS",
        data: data
    };
}

export const addNewCommentFailed = (data) => {
    return {
        type: "ADD_COMMENTS_FAILED",
        data: data
    };
}

export const removeCommentSuccess = (data) => {
    return {
        type: "REMOVE_COMMENT_SUCCESS",
        data: data
    };
}

export const removeCommentFailed = (data) => {
    return {
        type: "REMOVE_COMMENT_FAILED",
        data: data
    };
}

export const loadUserFromTokenFailed = (data) => {
    return {
        type: "LOAD_USER_TOKEN_FAILED",
        data: data
    };
}

export const loadUserFromTokenSuccess = (data) => {
    return {
        type: "LOAD_USER_TOKEN_SUCCESS",
        data: data
    };
}

export const handleLogout = (data) => {
    sessionStorage.clear();
    return {
        type: "HANDLE_LOGOUT_SUCCESS",
        data: data
    };
}



export function loginUser(usr) {
    return function(dispatch) {
        var resultData = {};
        return dataApi.login(usr).then(data => {

            if(data.result === "failed"){
                dispatch(loginFailed(data));

            }else {
                resultData.token = data.token;
                sessionStorage.setItem('jwt', resultData.token);
                resultData.user = data.user;
                dataApi.getUserLikes(resultData.user._id).then(data => {

                    if(data.result === "failed"){
                        dispatch(loginFailed(data));
                    }else {

                        resultData.userLikes = data.userLikes;
                        dispatch(loginSuccess(resultData));
                    }
                })
            }
        }).catch(error => {
            throw(error);
        });
    };
}


export function registerUser(usr) {
    return function(dispatch) {
        return dataApi.register(usr).then(data => {
            if(data.result ==="failed"){
                dispatch(registrationFailed(data));
            }else {
                dispatch(registrationSuccess());
            }
        }).catch(error => {
            throw(error);
        });
    };
}

export function getGlobalFeed() {
    return function(dispatch) {
        return dataApi.getGlobalFeed().then(data => {
            if(data.result ==="success"){
                dispatch(getGlobalFeedSuccess(data.article));
            }else {
                dispatch(getGlobalFeedFailed());
            }
        }).catch(error => {
            throw(error);
        });
    };
}

export function getYourFeed(usr) {
    return function(dispatch) {
        return dataApi.getYourFeed(usr).then(data => {
            if(data.result ==="success"){
                dispatch(getYourFeedSuccess(data.article));
            }else {
                dispatch(getYourFeedFailed());
            }
        }).catch(error => {
            throw(error);
        });
    };
}



export function addNewArticle(article) {
    return function(dispatch) {
        return dataApi.addNewArticle(article).then(data => {
            if(data.result ==="success"){
                dispatch(addNewArticleSuccess(data.article));
            }else if(data.result ==="failed"){
                dispatch(addNewArticleFailed(data));
            }
        }).catch(error => {
            throw(error);
        });
    };
}


export function getUserArticles(userid) {
    return function(dispatch) {
        return dataApi.getUserArticles(userid).then(data => {
            if(data.result ==="success"){
                dispatch(getUserArticlesSuccess(data.article));
            }else if(data.result ==="failed"){
                dispatch(getUserArticlesFailed(data));
            }
        }).catch(error => {
            throw(error);
        });
    };
}


export function addFollowing(data) {
    return function(dispatch) {
        return dataApi.addFollowing(data).then(data => {
            if(data.result ==="success"){
                dispatch(addFollowingSuccess(data.user));
            }else if(data.result ==="failed"){
                dispatch(addFollowingFailed(data));
            }
        }).catch(error => {
            throw(error);
        });
    };
}

export function removeFollowing(data) {
    return function(dispatch) {
        return dataApi.removeFollowing(data).then(data => {
            if(data.result ==="success"){
                dispatch(removeFollowingSuccess(data.user));
            }else if(data.result ==="failed"){
                dispatch(removeFollowingFailed(data));
            }
        }).catch(error => {
            throw(error);
        });
    };
}


export function addLike(data) {
    return function(dispatch) {
        return dataApi.addLike(data).then(data => {
            if(data.result ==="success"){
                dispatch(addLikeSuccess(data.resultData));
            }else if(data.result ==="failed"){
                dispatch(addLikeFailed(data));
            }
        }).catch(error => {
            throw(error);
        });
    };
}

export function removeLike(data) {
    return function(dispatch) {
        return dataApi.removeLike(data).then(data => {
            if(data.result ==="success"){
                dispatch(removeLikeSuccess(data.resultData));
            }else if(data.result ==="failed"){
                dispatch(removeLikeFailed(data));
            }
        }).catch(error => {
            throw(error);
        });
    };
}


export function getArticleComments(articleid) {
    return function(dispatch) {
        return dataApi.getArticleComments(articleid).then(data => {
            if(data.result ==="success"){
                dispatch(getArticleCommentsSuccess(data.comments));
            }else if(data.result ==="failed"){
                dispatch(getArticleCommentsFailed(data));
            }
        }).catch(error => {
            throw(error);
        });
    };
}


export function addNewComment(commentData) {
    return function(dispatch) {
        return dataApi.addNewComment(commentData).then(data => {
            if(data.result ==="success"){
                dispatch(addNewCommentSuccess(data.comments));
            }else if(data.result ==="failed"){
                dispatch(addNewCommentFailed(data));
            }
        }).catch(error => {
            throw(error);
        });
    };
}

export function removeComment(data) {
    return function(dispatch) {
        return dataApi.removeComment(data).then(data => {
            if(data.result ==="success"){
                dispatch(removeCommentSuccess(data.comments));
            }else if(data.result ==="failed"){
                dispatch(removeCommentFailed(data));
            }
        }).catch(error => {
            throw(error);
        });
    };
}


export function getArticleById(articleid) {
    return function(dispatch) {
        return dataApi.getArticleById(articleid).then(data => {
            if(data.result ==="success"){
                dispatch(getArticleByIdSuccess(data.article));
            }else if(data.result ==="failed"){
                dispatch(getArticleByIdFailed(data));
            }
        }).catch(error => {
            throw(error);
        });
    };
}

export function getUserById(userid) {
    return function(dispatch) {
        return dataApi.getUserById(userid).then(data => {
            if(data.result ==="success"){
                dispatch(getUserByIdSuccess(data.user));
            }else if(data.result ==="failed"){
                dispatch(getUserByIdFailed(data));
            }
        }).catch(error => {
            throw(error);
        });
    };
}

export function loadUserFromToken(token) {
    return function(dispatch) {
        var resultData = {};
        return dataApi.loadUserFromToken(token).then(data => {
             if(data.result === "failed"){
                 dispatch(handleLogout());
            }else {
                 resultData.user = data.user;
                dataApi.getUserLikes(resultData.user._id).then(data => {

                    if(data.result === "failed"){
                        dispatch(handleLogout());;
                    }else {
                        resultData.userLikes = data.userLikes;
                        dispatch(loadUserFromTokenSuccess(resultData));
                    }
                })
            }
        }).catch(error => {
            throw(error);
        });
    };
}



