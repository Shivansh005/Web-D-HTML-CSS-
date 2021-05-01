// Synchronous or blocking --> line by line execution
// Asynchronous or non-blocking --> line by line execution not guaranteed...callbacks will fire
const fs= require('fs');
fs.readFile("file.txt","utf-8",(err,data)=>{
console.log(data);
});
// in the terminal the message written later is executed first as we have not given the read file to synchronous 
console.log("This is a message"); 