
const mongoose = require("mongoose");
const Chat = require("./models/chat.js");

main()
.then(() => {
    console.log("connection successful");
})
.catch((err) => console.log(err));

async function main () {
 await mongoose.connect("mongodb://127.0.0.1:27017/whatsapp");
}

let allchats = [
    {
        from : "neha",
        to : "preeti",
        msg : "send me notesfor the exam",
        created_at : new Date(), 
    },

     {
        from : "rohit",
        to : "rani",
        msg : "send me notes",
        created_at : new Date(), 
    },

     {
        from : "rahul",
        to : "preeti",
        msg : "send me js note",
        created_at : new Date(), 
    },
];

Chat.insertMany(allchats);