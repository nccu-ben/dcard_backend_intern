const express = require('express')

const router = express.Router()

const Url = require('../models/UrlModel')

// : app.get(/:code)==>end of a string
// 

// @route       GET /:code
// @description    Redirect to the long/original URL 
router.get('/:code', async(req, res)=>{
    try{
        const url = await Url.findOne({urlCode: req.params.code})
        if(url){
			const expire_time = new Date(url.expireAt);
			const now_time = new Date();
			if(expire_time>now_time){
				//console.log(expire_time);
				//console.log(now_time);
				return res.redirect(url.longUrl);
			}
			else{
				return res.status(404).json('URL IS EXPIRE');
			}
		}
        else{
            return res.status(404).json('No URL Found');
        }

    }
    catch(err){
        console.error(err);
        res.status(500).json('Server Error');
    }
})

module.exports = router
