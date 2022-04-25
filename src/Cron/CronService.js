const cron = require('cron');
const PostController = require('../PostController/PostController.js');

class CronService {
    CronTime = process.env.CRON_TIME;
    url
    Init(){
        PostController.Create(this.url);
    }
    Contructor(url){
        this.url = url;
    }
    Start(){
        const cronJob = new cron.CronJob(this.CronTime,this.Init());
        cronJob.start();
    }
}

module.exports = new CronService();