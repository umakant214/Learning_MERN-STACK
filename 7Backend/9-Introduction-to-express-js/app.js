const express = require("express");
const app = express();
app.use((req, res, next) => {
  console.log(" first Middleware executed", req.url, req.method);
  next();
});
app.use((req, res, next) => {
  console.log(" Second Middleware executed", req.url, req.method);
  res.send("<h1>Hello from Express.js!</h1>");
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}`);
});
