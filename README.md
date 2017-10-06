# ReactNode-Thoughts, Share your thoughts to public !!
A simple prototype of twitter like application,made of React-Redux in the client side and NodeJs-MongoDb in the server. Pleae checkout the 
demo here https://protected-dusk-49814.herokuapp.com/

Key Feature:
1) User Authentication
2) You have access to global feed and your feed.
3) Signin to add new post, like & comment on posts.
4) Follow your favorite persons by clicking the follow button on their userprofile.
5) The posts of the of your followings will appear in the yourfeed.
6) Global feed get updated with the latest feeds and is available to all without sign in.

To Setup the project Locally:

1. clone the project,
2. do the npm install to install the dependencies from the sever package.json in the root directory.
3. go to the client folder , then run the npm install , for the client package.json
4. now you need to setup a mongodb server & make sure it is up and running at mongodb://127.0.0.1:27017(this passed to the monk in app.js)
5. start the server by running the command "npm start" from the root folder. //server will start running at "localhost:3000", if not please update the "apiHost" value accordingly in the clientside code.
6. start the client by running the command "npm start" from the client folder. // go to the client server address to see the application.
