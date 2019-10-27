# todo-mean2

This is the full stack implementation of popular mean stack technologies, the last t means TypeScript. 

Application is fully written with TypeScript and compiled to angular.


It includes:
Reactive programming redux-like structure with Angular and ngrx/store
MongoDB with MongooseJS
Node.js and ExpressJS

Dev Guide
for development purposes, you should have installed MongoDB on your local machine and run it
npm start
open http://localhost:1337 and enter
Note: After any change in development mode you have to refresh the browser.
Production:
As you can see in .travis.yml, before any deploy you should build an app typing npm run build:prod in terminal and run the server with simple: node server/app.js
