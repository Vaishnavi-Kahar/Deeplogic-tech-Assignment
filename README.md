# Deeplogic-tech-Assignment

## Overview
This Node.js script creates an HTTP server that fetches the latest stories from the Time website(https://time.com/) and returns a JSON response with the titles and links of the first 6 stories.

## Language Used
- JavaScript (Node.js)

## Dependencies
- No external dependencies are used. Only built-in Node.js modules are utilized.

## How to Run
1. Install Node.js: [Node.js Official Website](https://nodejs.org/)
2. Clone this repository.
3. Navigate to the project directory in the terminal.
4. Run the following command:
   ```bash
   node app.js
5. Open a web browser and visit http://localhost/getTimeStories. You should receive a JSON response with the latest stories.

## Code Explanation
- The server listens on port 80 by default.
- `http` and `https` modules are used for creating an HTTP server and making HTTPS requests.
- The script sends an HTTPS GET request to the Time website and processes the HTML response to extract story information.
- The regular expression (`pattern`) is used to match and extract titles and links from the HTML content.
- The extracted data is then formatted into a JSON response and sent to the client.

## Ouput
![output image](/op.png)

By Vaishnavi Kahar
