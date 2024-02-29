const http = require('http')
const args = process.argv;
const getConfig = require('./config');

const config = getConfig(args);
const hostname = config.hostname;
const port = config.port;

const server = http.createServer((req, res) => {
    if(req.url && req.url.endsWith('/home')) {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        res.end('Welcome to home!');
    }
    else {
        // Change starts here
        res.statusCode = 200; // Ensure a successful response
        res.setHeader('Content-Type', 'application/json'); // Set content type to JSON
        // Send back JSON object with hostname and port
        res.end(JSON.stringify({ hostname: hostname, port: port }));
        // Change ends here
    }
})

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
})
