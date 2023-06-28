// Task 1

const http = require("http");
const os = require("os");
const path = require("path");

const port = 5000;

const server = http.createServer((req, res) => {
  const username = os.userInfo().username;
  const osType = os.type();
  const uptime = os.uptime() / 60;
  const currentDir = process.cwd();
  const serverFile = path.basename(__filename);

  res.setHeader("Content-Type", "text/html");
  res.write(`<p>Username: ${username}</p>`);
  res.write(`<p>OS type: ${osType}</p>`);
  res.write(`<p>System uptime: ${uptime} minutes</p>`);
  res.write(`<p>Current directory: ${currentDir}</p>`);
  res.write(`<p>Server file name: ${serverFile}</p>`);

  const { greeting } = require("./personalmodule.js");

  res.write(greeting(username));
  res.end();
});

server.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});

// Task 2
