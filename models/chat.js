const mongoose = require('mongoose');
const chatSchema = new mongoose.Schema({
    from:{
        type: 'string',
    },
    to:{
        type: 'string',
    },
    message:{
        type: 'string',
    },
    created_at:{
        type:Date,
        required:true,
    },
});
const chat=mongoose.model("chat",chatSchema);
module.exports=chat;