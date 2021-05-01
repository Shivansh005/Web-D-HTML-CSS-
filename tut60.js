// including the built in Modules
const fs=require('fs');
let text =fs.readFileSync("file.txt","utf-8");

text=text.replace("file","tutorial");
console.log("The content of the file is : ");
console.log(text);

console.log("Creating a new file...");
fs.writeFileSync("shiv.txt",text);
console.log(text);