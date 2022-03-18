//const express = require("express");
//const app = express();

//qpp.use(express.json({
//        extended: false
//}));
//app.use('/',require('routes/redirect'));
//app.use('/api/v1',require('routes/Vurl'));
var assert = require('assert')
var redirect = require('./routes/redirect.js')
var url = require('./routes/url.js')

const connection = require('./controller/db.config');
connection.once('open', () => console.log('DB Connected'));
connection.on('error', () => console.log('Error'));



req = [{"longUrl":"https://www.youtube.com/","expireAt":"2022-03-20T16:12:41Z"}]

describe('API Test',function() {
    
    describe('url test', function(){
        it('return {"longuUrl:https://www.youtube.com/","expireAt":"2022-03-20T16:12:41Z"}',function(done){
                assert(url.router.post(req,res))

    });

    describe('Redirect test', function(){
                    

    });
});


