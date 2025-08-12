const { log } = require("console");
const http = require("http");

// function requestListioner(req, res) {
//   console.log(req);
// }

const server = http.createServer((req, res) => {
  console.log(req.url, req.headers, req.method);
  if (req.url === "/") {
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<head><title>My First Node Server</title></head>");
    res.write("<body><h1>This is Home Page For You!</h1></body>");
    res.write("</html>");
    return res.end();
  } else if (req.url === "/about") {
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<head><title>My First Node Server</title></head>");
    res.write("<body><h1>About Me Page!</h1></body>");
    res.write("</html>");
    return res.end();
  }

  res.setHeader("Content-Type", "text/html");
  res.write("<html>");
  res.write("<head><title>My First Node Server</title></head>");
  res.write("<body><h1>Hello from my first Node.js server!</h1></body>");
  res.write("</html>");
  res.end();
});

const PORT = 3000;

server.listen(PORT, () => {
  console.log(`server running on address http://localhost:${PORT}`);
});
