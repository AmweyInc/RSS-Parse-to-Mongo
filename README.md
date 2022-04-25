# _Parser RSS line to DataBase (MongoDB)_

[![N|Solid](https://i.imgur.com/wHcYFFP.png)](https://github.com/AmweyInc)

[![Build Status](https://travis-ci.org/joemccann/dillinger.svg?branch=master)](https://travis-ci.org/joemccann/dillinger)

Custom news feed parser,
with the ability to change the URL to fit your needs.

- All settings in one file.
- Dedicated API for working with the parser.
- MVC project architecture.


## Tech

Dillinger uses a number of open source projects to work properly:

- [Express] - fast node.js network app framework
- [Cron](https://www.npmjs.com/package/cron) - is a tool that allows you to execute something on a schedule.
- [node.js] - evented I/O for the backend
- [Gulp] - the streaming build system
- [Dotenv](https://www.npmjs.com/package/dotenv) - Module that loads environment variables from file.
- [Swagger](https://www.npmjs.com/package/swagger-ui-express) - module allows you to serve auto-generated swagger-ui generated API docs from express.

And of course RSS-Parser itself is open source with a [public repository](https://github.com/AmweyInc/RSS-Parse-to-Mongo)
 on GitHub.

## Installation

RSS Parser requires [Node.js](https://nodejs.org/) v10+ to run.

Install the dependencies and devDependencies and start the server.

```sh
cd rssparser
npm i
node index.js
```

For production environments...

```sh
npm install --production
NODE_ENV=production node app
```


## Using

Want to use? Great!

Make changes to your ```.env``` file and see your updates instantly!

Open your favorite POSTMAN or INSOMNIA and run these commands.

First Tab:

```sh
node app
```

Second Tab:

```sh
gulp watch
```

(optional) Third:

```sh
karma test
```

**Insomnia or Postman**:
 *Automatic parse in to DB*.
```
http://localhost:7000/api/create/auto  - // Automatic parse in to DB.
```

*Get all posts from DB*.
```
http://localhost:7000/api/posts/  - // Get all posts from DB.
```

***CRUD & REST API***

*Create custom post*.
```
http://localhost:7000/api/create/  - // Create custom post.
```
```Javascript
{
    cron:'Put cron code here.'
    feed:'Post feed.'
    link:'Link on post.'
}
```

*Reading someone post*.
```
http://localhost:7000/api/read/  - // Reading someone post.
```
```Javascript
{
    feed:'Post search keywords.'
    link:'Please insert links here if available.'
}
```

*Update post*.
```
http://localhost:7000/api/update/  - // Update post.
```
```Javascript
{
    feed:'Post search keywords.'
    link:'Please insert links here if available.'
    updFeed:'Input updated post.'
    updLink:'Input updated link.'
}
```

*Deleting someone post*.
```
http://localhost:7000/api/delete/  - // Deleting someone post.
```
```Javascript
{
    feed:'Post search keywords.'
    link:'Please insert links here if available.'
}
```

#### Building for source

For production release:

```sh
gulp build --prod
```

Generating pre-built zip archives for distribution:

```sh
gulp build dist --prod
```

## Docker

Dillinger is very easy to install and deploy in a Docker container.

By default, the Docker will expose port 8080, so change this within the
Dockerfile if necessary. When ready, simply use the Dockerfile to
build the image.

```sh
cd rrsparser
docker build -t <youruser>/rrsparser:${package.json.version} .
```

This will create the parser image and pull in the necessary dependencies.
Be sure to swap out `${package.json.version}` with the actual
version of Parser.

Once done, run the Docker image and map the port to whatever you wish on
your host. In this example, we simply map port 8000 of the host to
port 8080 of the Docker (or whatever port was exposed in the Dockerfile):

```sh
docker run -d -p 8000:8080 --restart=always --cap-add=SYS_ADMIN --name=rrsparser <youruser>/rrsparser:${package.json.version}
```

> Note: `--capt-add=SYS-ADMIN` is required for PDF rendering.

Verify the deployment by navigating to your server address in
your preferred browser.

```sh
127.0.0.1:8000
```

## License:**MIT**

**Free Software, Hell Yeah!**

   [df1]: <http://daringfireball.net/projects/markdown/>
   [Ace Editor]: <http://ace.ajax.org>
   [node.js]: <http://nodejs.org>
   [express]: <http://expressjs.com>
   [Gulp]: <http://gulpjs.com>
