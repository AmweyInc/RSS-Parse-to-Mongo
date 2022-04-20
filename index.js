const mongoose = require("mongoose");
const env = require('dotenv').config({ path: __dirname + '\\.env' })
const CronService = require('./src/Cron/CronService.js')

async function StartServer(){
    try {
        console.log(process.env.DB_URL);
        await mongoose.connect(process.env.DB_URL,{
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        CronService.Contructor(process.env.CRON_TIME);
        CronService.Start();
    }catch (e) {
        console.log(e);
    }

}

StartServer();