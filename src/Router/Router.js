const express = require('express');
const router = express.Router();
const {body} = require("express-validator")
const PostController = require('../PostController/PostController.js');
const CronService = require('../Cron/CronService.js')

function Start(url){
    if (url){
        CronService.Contructor(url);
    }else{
        CronService.Contructor(process.env.PARSE_URL);
    }
    CronService.Start();
}


router.post('/create',PostController.Create);
router.post('/read', PostController.Read);
router.post('/update',PostController.Update);

router.delete('/delete',PostController.Delete);

router.get('/create/auto',Start);
router.get('/posts', PostController.AllPost);

module.exports = router;
