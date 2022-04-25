const swaggerUI = require('swagger-ui-express');
const swaggerJSDoc = require('swagger-jsdoc');

const swaggerOptions = {
    swaggerDefinition:{
        info:{
            title:'PARSE-API',
            version:'1.0.0'
        }
    },
    apis:['Swagger.js']
};

const swaggerDocs = swaggerJSDoc(swaggerOptions);

/**
 * @swagger
 * /api/create/auto:
 *   get:
 *     description: Automatically start RSS-Parse
 *     responses:
 *       200:
 *         description: Success
 *
 */

/**
 * @swagger
 * /api/posts:
 *   get:
 *     description: Get all posts
 *     responses:
 *       200:
 *         description: Success reading
 *
 */

/**
 * @swagger
 * /api/delete:
 *   get:
 *     description: Delete post
 *     responses:
 *       200:
 *         description: Success deleting
 *
 */
/**
 * @swagger
 * /api/update:
 *   get:
 *     description: Update current post
 *     responses:
 *       200:
 *         description: Success updating
 *
 */
/**
 * @swagger
 * /api/read:
 *   get:
 *     description: Reading someone post
 *     responses:
 *       200:
 *         description: Success opening/searching
 *
 */
/**
 * @swagger
 * /api/create:
 *   get:
 *     description: Create parse to database with custom settings(URL,CRON-TIME etc.)
 *     responses:
 *       200:
 *         description: Success deleting
 *
 */
module.exports = swaggerDocs;