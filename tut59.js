const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end(`<!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Pseudo selectors and more designing</title>
  
      <style>
          .container{
              border: 2px solid red;
              background-color: aquamarine;
              margin: 34px auto;
              width: 666px;
          }
  
          .btn{
              padding: 6px;
              border: none;
              color: black;
              cursor: pointer;
              font-size: 13px;
              border-radius: 6px;
              font-family: Georgia, 'Times New Roman', Times, serif;
              font-weight: bold;
          }
  
          a{
              text-decoration: none;
  
          }
  
          /* pseudo selectors */
  
          a:hover{
              background-color: yellowgreen;
          }
  
          a:visited{
              color: blue;
          }
  
          a:active{
              color: pink;
          }
  
          button:hover{
              background-color: brown;
          }
  
          button:active{
              background-color: blueviolet;
          }
  
          .btn:hover{
              border: 2px solid orangered;
          }
      </style>
  </head>
  <body>
      <div id="cont1"class="container">
          <h3>This is my heading</h3>
          <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nemo corrupti suscipit excepturi, velit rerum eum doloribus ad voluptatem nulla harum possimus maxime repudiandae asperiores ab ex. Vitae autem omnis animi ratione illum consequatur enim?
          </p>
  
          <a href="https://facebook.com" class="btn">Read more</a>
          <button class="btn">Contact us</button>
      </div>
  </body>
  </html>`);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});