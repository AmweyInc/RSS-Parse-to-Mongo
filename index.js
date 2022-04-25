const mongoose = require('mongoose');
const express = require('express');
const router = require('./src/Router/Router.js');
const swaggerUI = require('swagger-ui-express');
const swaggerDocs = require('./src/SwaggerUI/Swagger.js');

const env = require('dotenv').config({ path: __dirname + '\\.env' })
const app = express();


app.use(express.json());
app.use('/api',router);
app.use('/api-docs',swaggerUI.serve,swaggerUI.setup(swaggerDocs));




async function StartServer(){
    try {
        console.log(process.env.DB_URL);
        await mongoose.connect(process.env.DB_URL,{
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        await app.listen(process.env.PORT,() => console.log(`Server started on PORT = ${process.env.PORT}`));
    }catch (e) {
        console.log(e);
    }

}

StartServer();