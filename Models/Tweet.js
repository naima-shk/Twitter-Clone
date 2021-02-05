const mongoose =require('mongoose');
const Schema = mongoose.Schema;

const tweetSchema =new  Schema ({
    user:{
        type:Schema.type.objectId,
        ref: 'users'
    },
    text:{
        type:String,
        required:true
    },
    Date:{
        type:Date,
        default:Date.now
    },
    });

    module.exports = mongoose.model("Tweet", tweetSchema);


