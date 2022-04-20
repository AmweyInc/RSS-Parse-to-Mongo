const {PostService} = require('../PostService/PostService.js')
const Parser = require('../ParseFeed/parser.js')
const parse = new Parser();

class PostController {
    url;
    constructor(URL) {
        this.url = URL;
    }

    async Create(url){
        try {
            const feed = await parse.parseURL(url)
            feed.items.forEach(item =>{
                PostService.Create(item.title,item.link);
                this.lFeed = item.title;
            });
        }catch (e) {
            console.log(e);
        }
    }

    async Read(Feed,Link){
        try {
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

    async Update(Feed,Link,updFeed,updLink){
        try {
            const feed = await PostService.Update(Feed,Link,updFeed,updLink);
        }catch (e) {
            console.log(e)
        }
    }

    async Delete(Feed,Link){
        try {
            if (Feed && Link) {
                let feed = await PostService.Delete(Feed, Link);
                console.log(feed);
            }
        }catch (e) {
            console.log(e)
        }
    }
}

module.exports = new PostController();