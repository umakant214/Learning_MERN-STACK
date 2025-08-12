const sumRequestHandler = (req, res) => {
  console.log("Received a request to calculate the sum", req.url);
  const body = [];
  req.on("data", (chunk) => {
    body.push(chunk);
  });

  req.on("end", () => {
    console.log("Request ended");
    const parsedBody = Buffer.concat(body).toString();
    const params = new URLSearchParams(parsedBody);
    const bodyObj = Object.fromEntries(params);
    const num1 = parseFloat(bodyObj.num1);
    const num2 = parseFloat(bodyObj.num2);
    const result = num1 + num2;
    console.log(result);

    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<head><title>Calculator</title></head>");
    res.write("<body>");
    res.write("<h1>Your sum is " + result + " </h1>");
    res.write("<a href='/calculator'>Go to home page</a><br>");
    res.write("</body>");
    res.write("</html>");
    return res.end();
  });
};

exports.sumRequestHandler = sumRequestHandler;
