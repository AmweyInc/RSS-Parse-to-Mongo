const {Schema,model} = require('mongoose');

const PostSchema = new Schema({
    post:{type:String,required:true,default:false},
    link:{type:String,default:false}
});

module.exports = model('Post',PostSchema);