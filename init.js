const mongoose= require('mongoose');
const Chat = require("./models/chat.js");
// async function main() {
//     await mongoose.connect(' ');
//     // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
// }
// main().then(()=>{
//     console.log("Connection Successful")
// }).catch(err => console.log(err));


Chat.insertMany([
    {
    from:"Rahul",
    to:"Priya",
    message:"Send me you exam sheets",
    created_at:new Date()
    },
    {
        from:"neha",
        to:"Rahul",
        message:"Send me you exam sheets",
        created_at:new Date()
    },
    {
        from:"Sneha",
        to:"Rahul",
        message:"Send me you exam sheets",
        created_at:new Date()
    }
])


module.exports=init;