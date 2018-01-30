var socket = io();

        socket.on("connect" , function(){
            console.log("Connected to server");
        })

        socket.on("disconnect" , function(){
            console.log("Disconnected from server");
        })

        socket.on("newMessage" , function(message){
            console.log("New message : " , message);
        });

        socket.emit("createMessage" , {
            from : "Me",
            text : "This is a message from me"
        });