const { requesthandler } = require("./handler");
const { log } = require("console");
const http = require("http");
const server = http.createServer(requesthandler);
const PORT = 3000;
server.listen(PORT, () => {
  console.log(`server is running on address http://localhost:${PORT}`);
});
