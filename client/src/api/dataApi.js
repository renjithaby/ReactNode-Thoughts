/**
 * Created by rabby on 22/08/17.
 */
class dataApi {
    constructor() {

    }



    static login(usr) {
        let userData = {id: "1", username: "rr", password: "rr", addressList: [{id: "1", name: "friend1", currentAddress:"address1"},{id: "2", name: "friend2",currentAddress:"address2"}]};

        const request = new Request('http://localhost:3000/authenticate',{
            method: 'POST',
            headers: new Headers({
                'Content-Type': 'application/json'
            }),
            body: JSON.stringify({ username: usr.username, password : usr.password})
        });

        return fetch(request).then(response => {
            return response.json();
        }).catch(error => {
            return error;
        });



       /* let myPromise = new Promise((resolve, reject) => {
            setTimeout(function () {
                return(resolve(userData)); // Yay! Everything went well!
            }, 250);
        });

        return myPromise;*/

    }


    static register(usr) {
       // let userData = {id: "1", username: "rr", password: "rr", addressList: [{id: "1", name: "friend1", currentAddress:"address1"},{id: "2", name: "friend2",currentAddress:"address2"}]};

        const request = new Request('http://localhost:3000/adduser',{
            method: 'POST',
            headers: new Headers({
                'Content-Type': 'application/json'
            }),
            body: JSON.stringify({username: usr.username, password : usr.password,email: usr.email})
        });

        return fetch(request).then(response => {
            return response.json();
        }).catch(error => {
            return error;
        });
    }


      static getGlobalFeed() {
       // let userData = {id: "1", username: "rr", password: "rr", addressList: [{id: "1", name: "friend1", currentAddress:"address1"},{id: "2", name: "friend2",currentAddress:"address2"}]};

        const request = new Request('http://localhost:3000/getglobalfeed',{
            method: 'GET',
            headers: new Headers({
                'Content-Type': 'application/json'
            })
        });

        return fetch(request).then(response => {
            return response.json();
        }).catch(error => {
            return error;
        });
    }


     static getYourFeed(usr) {
       // let userData = {id: "1", username: "rr", password: "rr", addressList: [{id: "1", name: "friend1", currentAddress:"address1"},{id: "2", name: "friend2",currentAddress:"address2"}]};
        const request = new Request('http://localhost:3000/user/getyourfeed',{
            method: 'POST',
            headers: new Headers({
                'Content-Type': 'application/json',
                'x-access-token': sessionStorage.jwt

            }),
            body: JSON.stringify({userid: usr._id})
        });

        return fetch(request).then(response => {
            return response.json();
        }).catch(error => {
            return error;
        });
    }


    static addNewArticle(article) {

        const request = new Request('http://localhost:3000/user/addarticle',{
            method: 'POST',
            headers: new Headers({
                'Content-Type': 'application/json',
                'x-access-token': sessionStorage.jwt
            }),
            body: JSON.stringify(article)
        });

        return fetch(request).then(response => {
            return response.json();
        }).catch(error => {
            return error;
        });

    }


    static getUserArticles(userid) {

        const request = new Request('http://localhost:3000/getuserarticles',{
            method: 'POST',
            headers: new Headers({
                'Content-Type': 'application/json'
            }),
            body: JSON.stringify({userid:userid})
        });

        return fetch(request).then(response => {
            return response.json();
        }).catch(error => {
            return error;
        });

    }

    static addFollowing(data) {

        const request = new Request('http://localhost:3000/user/addfollowing',{
            method: 'POST',
            headers: new Headers({
                'Content-Type': 'application/json',
                'x-access-token': sessionStorage.jwt
            }),
            body: JSON.stringify(data)
        });

        return fetch(request).then(response => {
            return response.json();
        }).catch(error => {
            return error;
        });

    }

    static removeFollowing(data) {

        const request = new Request('http://localhost:3000/user/removefollowing',{
            method: 'POST',
            headers: new Headers({
                'Content-Type': 'application/json',
                'x-access-token': sessionStorage.jwt
            }),
            body: JSON.stringify(data)
        });

        return fetch(request).then(response => {
            return response.json();
        }).catch(error => {
            return error;
        });

    }


    static addLike(data) {
        const request = new Request('http://localhost:3000/user/addlike',{
            method: 'POST',
            headers: new Headers({
                'Content-Type': 'application/json',
                'x-access-token': sessionStorage.jwt
            }),
            body: JSON.stringify({userid:data.userid, articleid:data.articleid})
        });

        return fetch(request).then(response => {
            return response.json();
        }).catch(error => {
            return error;
        });

    }


    static removeLike(data) {
        const request = new Request('http://localhost:3000/user/removelike',{
            method: 'POST',
            headers: new Headers({
                'Content-Type': 'application/json',
                'x-access-token': sessionStorage.jwt
            }),
            body: JSON.stringify({userid:data.userid,articleid:data.articleid})
        });

        return fetch(request).then(response => {
            return response.json();
        }).catch(error => {
            return error;
        });

    }

    static getUserLikes(userid) {

        const request = new Request('http://localhost:3000/user/getuserlikes',{
            method: 'POST',
            headers: new Headers({
                'Content-Type': 'application/json',
                'x-access-token': sessionStorage.jwt
            }),
            body: JSON.stringify({userid:userid})
        });

        return fetch(request).then(response => {
            return response.json();
        }).catch(error => {
            return error;
        });

    }


    static getArticleComments(articleid) {

        const request = new Request('http://localhost:3000/getarticlecomments',{
            method: 'POST',
            headers: new Headers({
                'Content-Type': 'application/json'
            }),
            body: JSON.stringify({articleid:articleid})
        });

        return fetch(request).then(response => {
            return response.json();
        }).catch(error => {
            return error;
        });

    }

    static addNewComment(commentData) {

        const request = new Request('http://localhost:3000/user/addcomment',{
            method: 'POST',
            headers: new Headers({
                'Content-Type': 'application/json',
                'x-access-token': sessionStorage.jwt
            }),
            body: JSON.stringify(commentData)
        });

        return fetch(request).then(response => {
            return response.json();
        }).catch(error => {
            return error;
        });

    }

    static removeComment(data) {

        const request = new Request('http://localhost:3000/user/removecomment',{
            method: 'POST',
            headers: new Headers({
                'Content-Type': 'application/json',
                'x-access-token': sessionStorage.jwt
            }),
            body: JSON.stringify(data)
        });

        return fetch(request).then(response => {
            return response.json();
        }).catch(error => {
            return error;
        });

    }

    static getArticleById(articleid) {

        const request = new Request('http://localhost:3000/getarticlebyid',{
            method: 'POST',
            headers: new Headers({
                'Content-Type': 'application/json'
            }),
            body: JSON.stringify({articleid:articleid})
        });

        return fetch(request).then(response => {
            return response.json();
        }).catch(error => {
            return error;
        });

    }

    static loadUserFromToken(token) {

        const request = new Request('http://localhost:3000/user/loadUserFromToken',{
            method: 'POST',
            headers: new Headers({
                'Content-Type': 'application/json',
                'x-access-token': sessionStorage.jwt
            }),
            body: JSON.stringify({token:token})
        });

        return fetch(request).then(response => {
            return response.json();
        }).catch(error => {
            return error;
        });

    }

    static getUserById(userId) {

        const request = new Request('http://localhost:3000/getuserbyid',{
            method: 'POST',
            headers: new Headers({
                'Content-Type': 'application/json'
            }),
            body: JSON.stringify({userid:userId})
        });

        return fetch(request).then(response => {
            return response.json();
        }).catch(error => {
            return error;
        });

    }



}

export default dataApi;


