const path = require("path");
const express = require("express");
const socketIO = require("socket.io");
const http = require("http");

const publicPath = path.join(__dirname , "../public");

var app = express();
app.use(express.static(publicPath));
var port = process.env.PORT || 3000;
var server = http.createServer(app);
var io = socketIO(server);

app.get("/" , (req , res)=>{
    res.render("index.html");
});

io.on("connection" , (socket)=>{
    console.log("New User Connected");

    socket.on("disconnect" , ()=>{
        console.log("User have disconnected");
    });
})

server.listen(port , ()=>{
    console.log(`The server is up and running on PORT :${port}`);
})