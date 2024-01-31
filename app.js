const http = require("http");
const https = require("https");
const url = "https://time.com";

// Creating an HTTP server
const server = http.createServer((req, res) => {
  // Check for GET request to "/getTimeStories"
  if (req.method === "GET" && req.url === "/getTimeStories") {
    // making HTTPS GET request to the website
    https
      .get(url, (response) => {
        let data = "";

        // Extracting data from website
        response.on("data", (chunk) => {
          data += chunk;
        });

        response.on("end", () => {
          // regular expression to match and extract info
          const pattern =
            /<li class="latest-stories__item">\s*<a href="([^"]+)">\s*<h3 class="latest-stories__item-headline">([^<]+)<\/h3>/g;

          const stories = []; // Array to store stories
          let story;

          while ((story = pattern.exec(data)) !== null) {
            stories.push({
              title: story[2],
              link: `https://time.com${story[1]}`,
            });
          }

          // extracting the first 6 stories and sending as a JSON response
          const responseData = stories.slice(0, 6);
          res.writeHead(200, { "Content-Type": "application/json" });
          res.end(JSON.stringify(responseData));
        });
      })
      .on("error", (error) => {
        // Handling errors
        console.error(error);
        res.writeHead(500, { "Content-Type": "application/json" });
        res.end(JSON.stringify({ error: "Internal Server Error" }));
      });
  } else {
    // If the request not found
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("Not Found");
  }
});

const PORT = 80; // port number for the server to listen on

server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
