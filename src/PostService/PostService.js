const PostModel = require('./PostSchema.js')

class PostService {
    async Create(Feed,Link){
        const requestPost = await PostModel.create({post:Feed,link:Link});
        console.log('Will be added to database:'+ Feed + Link);
        requestPost.save();
    }

    async Read(Feed,Link){
        let requestPost = await PostModel.findOne({post:Feed});
        if (requestPost){
            console.log(requestPost);
        }else{
            requestPost = await PostModel.findOne({link:Link});
            console.log(requestPost);
        }
        console.log('Read request:' + requestPost);
    }

    async Update(Feed,Link,updFeed,updLink){
        let requestPost = await PostModel.findOne({post:Feed})
        requestPost.overwrite({post:updFeed});
        await requestPost.save();

        requestPost = await PostModel.findOne({link:Link})
        requestPost.overwrite({link:updLink});
        await requestPost.save();
        console.log('Update request,Before:' + Feed + Link + '\nAfter:' + updFeed + updLink);
    }

    async Delete(Feed,Link){
        let requestPost = await PostModel.deleteOne({post:Feed});
        if(!requestPost){
            requestPost = await PostModel.deleteOne({link:Link});
        }
        console.log('Will be delete from database:' + Feed + Link);
    }

    async GetAllPost(){
        const requestPost = await PostModel.find();
        return requestPost;
    }
}

module.exports = new PostService();