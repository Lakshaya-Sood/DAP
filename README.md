# DAP

1. npm i
2. npm start
3. npm install http-server -g
4. navigate to staticServerBucket folder and run 
   http-server -a localhost -p 7777
   to start a static file hosting server on port 7777
5. open browser and add a bookmark in bookmark tab with script from bookmarklet.txt
6. go to localhost:8080 on browser
7. click on the new bookmark button and see the tour script getting loaded


Steps for setting up local dev env
1. Download Postgres 10.6 from https://www.enterprisedb.com/downloads/postgres-postgresql-downloads
2. Install it on your machine and to check if it is installed search for "psql shell" (note down the password given)
3. Next download dBeaver from  https://dbeaver.io/download/
4. install it and open it -> select new connection -> type postgres -> fill the details [hostname, db name, port, username, password]
5. now go to server/db_scripts folder and use those to setup data 

#(remember to take care of the fact that app_id is a foreign key in tour table) ;)

6. start the node server by running start.bat from server root DIR
7. now open file post publish request in Repo's root DIR, Update the app id of your app
8. run the file by firing <node post_publish_request.js> . you'll see a new folder will be created in staticServerBucket
9. now you are done with script generation for your app.
10. next update the bookmarklet with your app id and add it to you browser's bookmark tab
11. open up ur app in browser and click bookmarklet to "Let the DAP take over :)"
   
Steps for updating staticServerBucket/library.js
1. make the changes in src/VueK folder 
2. run npm run build (make sure that webpack entry point is src/VueK/index.js)
3. you'll see that the DIST folder is updated with new build
4. now move the dist/main.bundle.js file to staticServerBucket folder (to replace library.js)
5. delete the library.js and rename main.bundle.js with "library.js"
