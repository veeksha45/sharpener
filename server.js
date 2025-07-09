const http = require('http');

const server = http.createServer((req, res) => {
  res.setHeader("Content-Type", "text/html");

  let responseContent = "";

  switch (req.url) {
    case '/':
      responseContent = "<h1>Hello World</h1>";
      break;

    case '/pizza':
      responseContent = "<h1>This is your pizza</h1>";
      break;

    case '/home':
      responseContent = "<h1>Welcome home</h1>";
      break;

    case '/about':
      responseContent = "<h1>Welcome to About Us</h1>";
      break;

    case '/node':
      responseContent = "<h1>Welcome to my Node Js project</h1>";
      break;

    default:
      responseContent = "<h1>Page Not Found</h1>";
  }

  res.write(responseContent);
  res.end();
});

server.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
