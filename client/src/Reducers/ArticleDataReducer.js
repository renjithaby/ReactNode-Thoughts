/**
 * Created by rabby on 12/09/2017.
 */
import history from '../History'
const ArticleDataReducer = (state = {feed:"global",globalFeed:[],yourFeed:[],selectedProfile:{user:{},articles:[]},selectedArticle:{article:{}, comments:[]}}, action = {}) => {

	switch (action.type){

		case "GLOBAL_FEED_SUCCESS" :

		    return getGlobalFeedSuccess(state,action);

		case "GLOBAL_FEED_FAILED" :
		    return getGlobalFeedFailed(state,action);

		case "YOUR_FEED_SUCCESS" :
		    return getYourFeedSuccess(state,action);

		case "YOUR_FEED_FAILED" :
		    return getYourFeedFailed(state,action);

        case "GET_USER_ARTICLE_SUCCESS":
            return getUserArticleSuccess(state,action);

        case "GET_USER_ARTICLE_FAILED":
            return getUserArticleFailed(state,action);

        case "SET_SELECTED_ARTICLE":
            return setSelectedArticle(state,action);
            
        case "SET_SELECTED_ARTICLE_FAILED":
            return setSelectedArticleFailed(state,action);
            
        case "GET_COMMENTS_SUCCESS":
            return getArticleCommentsSuccess(state,action);

        case "GET_COMMENTS_FAILED":
            return  getArticleCommentsFailed(state,action);

        case "ADD_COMMENTS_SUCCESS":
            return getArticleCommentsSuccess(state,action);

        case "ADD_COMMENTS_FAILED":
            return  AddCommentsFailed(state,action);

        case "REMOVE_COMMENT_SUCCESS" :
            return getArticleCommentsSuccess(state,action);

        case "REMOVE_COMMENT_FAILED" :
            return  removeCommentFailed(state,action);
            
         case "UPDATE_PROFILE_USER" :
            return setSelectedProfile(state,action);

		default:
		    return state;
		    break;
	}



	function getGlobalFeedSuccess(state, action){
		return {...state,feed:"global",globalFeed:action.data};
	}


	function getGlobalFeedFailed(state, action){
		return {...state};
	}

	function getYourFeedSuccess(){
		return {...state, feed:"your",yourFeed:action.data};
	}

	function getYourFeedFailed(){
		return {...state};
	}


    function getUserArticleFailed(state,action){
        window.alert(action.data.message);
        return {...state};
    }
    
   function setSelectedArticle(state, action){
        var  obj1 = {...state.selectedArticle,article:action.data};
        return{...state,selectedArticle:obj1};

    }

    function getArticleCommentsSuccess(state,action){
        var  obj1 = {...state.selectedArticle,comments:action.data};
        return  {...state, selectedArticle:obj1};
    }

    function getArticleCommentsFailed(state,action){
        window.alert(action.data.message);
        return {...state};
    }

    function setSelectedProfile(state, action){
        var  obj1 = {...state.selectedProfile,user:action.data};
        return{...state,selectedProfile:obj1};
    }

    function getUserArticleSuccess(state,action){

        var  obj1 = {...state.selectedProfile, articles:action.data};
        return  {...state, selectedProfile:obj1};
    }



    function AddCommentsFailed(state,action){
        window.alert(action.data.message);
        return {...state};
    }

    function removeCommentFailed(state,action){
        window.alert(action.data.message);
        return {...state};
    }

    function setSelectedArticleFailed(state,action){
        window.alert(action.data.message);
        return {...state};
    }

    
    


}

export default ArticleDataReducer;
