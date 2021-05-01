// importing http and fs modules 

const http= require('http');
const fs= require('fs');

// reading a HTML file 
const fileContent=fs.readFileSync('tut58.html');

// creating a server 
const server= http.createServer((req,res)=>{

    res.writeHead(200,{'Content-type':'text/html'});
    res.end(fileContent);
});

const port=80;

// listening the server 
server.listen(port, '127.0.0.1',()=>{
    console.log(`Listening in port- ${port}`);
})
