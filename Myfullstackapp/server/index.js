const http = require("http");

const server = http.createServer((req, res) => {
  res.writeHead(200, {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
  });
  
  const response = { message: "Bokkalo clg edhi" };
  res.end(JSON.stringify(response)); //  Send JSON
});

server.listen(3000, () => console.log("Server running on port 3000"));