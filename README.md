# dcard_backend_intern

### Dcard Internship Application Requirements

This program runs smoothly in the following environments:

​    1.node .js --version v17.6.0

​    2.npm       --version 8.5.1

​	3.npm install express mongoose shortid valid-url body-parser mocha chai

we'll need the following packages :

For APIs :

​	1.express : main libary for backend

​	2.mongoos : connect to mongo db

​	3.shortid : for generating shorturl

​	4.valid-url : i use it for valid url

​	5.body-parser : it helps taking input from json format message 

For test:

	1. mocha : 
	1. chai : 

## First Part -- APIs
This program contains two APIs:

​	1. url.js : Give URL and expire time; it'll return short URL.

​    2. redirect.js : Give short UR; it'll direct to the original Url. If it's expired, it'll return 404.

## Second Part -- Test
The test part has only one file:

​    test.js

=================================================================

How to Run Codes

​	1.npm install express mongoose shortid valid-url

​	2.node index.js

​	3.

