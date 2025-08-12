const http = require("http");
const server = http.createServer();

server.on("request", (req, res) => {
  console.log("Request received");
  console.log(req);
});

const PORT = 3000;
server.listen(PORT,  () => {
  console.log(`Server is listening on port http://localhost:${PORT}`);
});
