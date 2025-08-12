const { sumRequestHandler } = require("./sum");
const { url } = require("inspector");

const requesthandler = (req, res) => {
  console.log(req.url, req.headers, req.method);

  if (url === "/") {
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<head><title>Calculator</title></head>");
    res.write("<body>");
    res.write("<h1>Welcome to the Calculator</h1>");
    res.write("<a href='/calculator'>Go to Calculator</a><br>");
    res.write("</body>");
    res.write("</html>");
    return res.end();
  } else if (req.url.toLowerCase() === "/calculator") {
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<head><title>Calculator</title></head>");
    res.write("<body>");
    res.write("<h1>Calculator Page</h1>");
    res.write("<form action='/calculate-result' method='POST'>");
    res.write(
      "<input type='number' name='num1' placeholder='Enter first number' required>"
    );
    res.write(
      "<input type='number' name='num2' placeholder='Enter second number' required>"
    );
    res.write("<button type='submit'>Calculate</button>");
    res.write("</form>");
    res.write("</body>");
    res.write("</html>");
    return res.end();
  } else if (
    req.url.toLowerCase() === "/calculate-result" &&
    req.method === "POST"
  ) {
    sumRequestHandler(req, res);
    return;
  }

  res.setHeader("Content-Type", "text/html");
  res.write("<html>");
  res.write("<head><title>Calculator</title></head>");
  res.write("<body>");
  res.write("<h1>Page is not found : Server error 404</h1>");
  res.write("<a href='/calculator'>Go to home page</a><br>");
  res.write("</body>");
  res.write("</html>");
  return res.end();
};

exports.requesthandler = requesthandler;
