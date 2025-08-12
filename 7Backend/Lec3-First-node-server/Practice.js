const http = require("http");

const server = http.createServer((req, res) => {
  console.log(req.url, req.headers, req.method);
  if (req.url === "/Home") {
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<head><title>Myntra - Women</title></head>");
    res.write("<body><h1>Women's Products</h1></body>");
    res.write("</html>");
    return res.end();
  } else if (req.url === "/Men") {
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<head><title>Myntra - Men</title></head>");
    res.write("<body><h1>Men's Products</h1></body>");
    res.write("</html>");
    return res.end();
  } else if (req.url === "/Women") {
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<head><title>Myntra - Women</title></head>");
    res.write("<body><h1>Women's Products</h1></body>");
    res.write("</html>");
    return res.end();
  } else if (req.url === "/Kids") {
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<head><title>Myntra - Kids</title></head>");
    res.write("<body><h1>Kids' Products</h1></body>");
    res.write("</html>");
    return res.end();
  } else if (req.url === "/Contact") {
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<head><title>Myntra - Contact</title></head>");
    res.write("<body><h1>Contact Us</h1></body>");
    res.write("</html>");
    return res.end();
  }
  res.setHeader("Content-Type", "text/html");
  res.write("<html>");
  res.write("<head><title>Myntra</title></head>");
  res.write("<body><a href='/home'>Home</a>");
  res.write("<body><a href='/Men'>Men</a>");
  res.write("<body><a href='/Women'>Women</a>");
  res.write("<body><a href='/Kids'>Kids</a>");
  res.write("<body><a href='/Contact'>Contact</a>");
  res.write("</body>");
  res.write("</html>");
  return res.end();
});

const PORT = 3008;
server.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
