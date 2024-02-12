const http = require("http");


const HOST_NAME = "localhost";
const PORT = 8000


function requestHandler(req, res) {
    console.log(req)
    res.end('This is Osazuwa Obadigie')
}



const server = http.createServer(requestHandler)

server.listen(PORT, HOST_NAME, () => {
    console.log(`server started successfully at http://${HOST_NAME}:${PORT}`)
}) 