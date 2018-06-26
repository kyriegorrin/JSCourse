var express = require("express")
var app = express()
var path = require("path")
var server = require("http").createServer(app)
var io = require("socket.io")(server)
var port = process.env.PORT || 3000

server.listen(port, () => {
    console.log("SServer listening at port %d", port)
})

app.use(express.static(path.join(__dirname, "public")))

io.on("connection", (socket) => {
    console.log("got a connection!")

    socket.on("msg", function(message){
        console.log(message)
    })
})