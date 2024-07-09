const express = require("express");
const app = express();
const path = require("path");
const chat = require("./models/chat");
const mongoose = require("mongoose");
// const conn=require("./init.js");
// getting-started.js
// const mongoose = require('mongoose');
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")))
// conn.main();

main()
    .then(() => {
        console.log("connection successful");
    })
    .catch((err) => console.log(err));

async function main() {
    await mongoose.connect("mongodb://127.0.0.1:27017/whatsapp");
}

//Index Route
app.get("/chats", async (req, res) => {
    let chats = await chat.find();
    console.log(chats);
    //    res.send("working");
    res.render("index.ejs", { chats });
});
app.listen(8080, () => {
    console.log("server is running on port 8080");
});

app.get("/", (req, res) => {
    console.log("Server is listeninbg on Port 8080");
});
