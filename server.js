const http = require('http'); // http is a module of the node
const server = http.createServer((req , res)=>{
      console.log("server is listening...");
     if(req.url === "/getSecretData"){
      res.end("There is no secret data ..")
     }
      // to end the communication
      res.end("Hello World!") // after all the process returns it to the client -> response.end
}); // returns an instance/ object of the server

server.listen(1000) // by this server is ready to listen with port : 3000


// This is very complecated to create server 
// We use wrapper on top of this -> express -> built on the node -> for creating the server