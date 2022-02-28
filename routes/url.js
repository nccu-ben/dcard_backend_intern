const express = require('express');
const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();
const router = express.Router();

const validUrl = require('valid-url');
const shortid = require('shortid');

const Url = require('../models/UrlModel');

//@route    POST /api/url/shorten
//@desc     Create short URL

const baseUrl = 'http:localhost:5000';

router.post('/urls',jsonParser, async(req,res)=>{
	const {longUrl} = req.body;
	const {expireAt} = req.body;
	console.log(longUrl);
	console.log(expireAt);
    //check base url
    if(!validUrl.isUri(baseUrl)){
        return res.status(401).json('Invalid base URL');
    }
    // create url code
    const urlCode = shortid.generate();
    //check long url
    if(validUrl.isUri(longUrl)){
        try{
            let url = await Url.findOne({longUrl});
            if(url & url.expireAt<Date.now()){
                res.json({urlCode:url.urlCode,shortUrl:url.shortUrl});
            }
            else{
                const shortUrl = baseUrl + '/'+ urlCode
                url = new Url({
                    longUrl,
                    shortUrl,
                    urlCode,
                    expireAt

                });
                await url.save();
                res.json(url);
            }
        }
        catch(err){
            console.log(err);
            res.status(500).json('Server Error');
        }
    }
    else{
        res.status(401).json('Invalid longUrl');
    }
});

module.exports = router;
