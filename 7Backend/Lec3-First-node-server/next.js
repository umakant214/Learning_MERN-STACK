const http = require("http");
const server = http.createServer((req, res) => {
  console.log(req);
  process.exit();
});

const PORT = 3002;
server.listen(PORT, () => {
  console.log(`SERVER IS START ON ADDRESS http://localhost${PORT}`);
});
