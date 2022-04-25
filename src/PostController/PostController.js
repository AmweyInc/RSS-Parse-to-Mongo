const PostService = require('../PostService/PostService.js')
const Parser = require('../ParseFeed/parser.js')
const parse = new Parser();

class PostController {
    url;
    constructor(URL) {
        this.url = URL;
    }

    async Create(req){
        try {
            const url = req.body.url;
            if(url){
                const feed = await parse.parseURL(url);
                feed.items.forEach(item =>{
                    PostService.Create(item.title,item.link);
                });
            }else{
                const feed = await parse.parseURL(process.env.PARSE_URL);
                feed.items.forEach(item =>{
                    PostService.Create(item.title,item.link);
                });
            }
        }catch (e) {
            console.log(e);
        }
    }

    async Read(req,res,next){
        try {
            const {Feed,Link} = req.body;
            if (Feed && Link){
                let feed = await PostService.Read(Feed,Link);
                console.log(feed);
            }else{
                let feed = await PostService.GetAllPost();
                console.log(feed);
            }
        }catch (e) {
            console.log(e)
        }
    }

    async Update(req,res,nex){
        try {
            const {Feed,Link,updFeed,updLink} = req.body;
            const feed = await PostService.Update(Feed,Link,updFeed,updLink);
        }catch (e) {
            console.log(e)
        }
    }

    async Delete(req,res,nex){
        try {
            const {Feed,Link} = req.body;
            if (Feed && Link) {
                let feed = await PostService.Delete(Feed, Link);
                console.log(feed);
            }
        }catch (e) {
            console.log(e)
        }
    }
    async AllPost(){
        try {
            await PostService.GetAllPost();
        }catch (e) {
            console.log(e);
        }
    }
}

module.exports = new PostController();