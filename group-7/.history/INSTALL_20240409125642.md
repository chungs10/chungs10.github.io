run npm i under lab directory (for example, lab5)
run npm i, then npm run build under my-app directory
cd back into lab directory with cd ../
the following line will run your node using your env file:
node --env-file=.env server.js


npm start in lab directory will launch the server.js node file and with the altered destination for static now being my app build, it'll use the build file you just created with run build and refer to your env file for secrets 

