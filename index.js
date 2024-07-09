const express = require("express");
const app = express();
const path = require("path");
const chat = require("./models/chat");
const mongoose = require("mongoose");
const { Console } = require("console");
const methodOverride = require("method-override");
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"))
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
    // console.log(chats);
    res.render("index.ejs", { chats });
});
app.listen(8080, () => {
    console.log("server is running on port 8080");
});

//New Route
app.get("/chats/new", (req, res) => {
    res.render("new.ejs");
});

//Create Route
app.post("/chats", (req, res) => {
    let { from, to, message } = req.body;
    let newChat = new chat({
        from: from,
        to: to,
        message: message,
        created_at: new Date(),
    });
    newChat
        .save()
        .then((res) => {
            console.log("chat was saved");
        })
        .catch((err) => {
            console.log(err);
        });
    res.redirect("/chats");
});

//Edit Route
app.get("/chats/:id/edit", async (req, res) => {
    let { id } = req.params;
    let Chat = await chat.findById(id);
    res.render("edit.ejs", { Chat });
});

//Update Route
app.put("/chats/:id", async (req, res) => {
    let { id } = req.params;
    let { message:newMessage } = req.body;
    console.log(newMessage);
    let updatedChat = await chat.findByIdAndUpdate(
        id,
        { message: newMessage },
        { new: true },
        { runValidators: true }
    );
    console.log(updatedChat);
    res.redirect("/chats");
});

//Delete Route

app.delete("/chats/:id",async(req,res)=>{
    let {id}=req.params;
    let deletedChat=await chat.findByIdAndDelete(id);
    console.log(deletedChat);
    res.redirect("/chats");
})

app.get("/", (req, res) => {
    console.log("Server is listeninbg on Port 8080");
});
