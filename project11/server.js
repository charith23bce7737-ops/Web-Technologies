// Import required module
const http = require('http');

// Define port
const PORT = 3000;

// Create server
const server = http.createServer((req, res) => {
    
    // Log request info
    console.log(`Request received for: ${req.url}`);

    // Set response header
    res.setHeader('Content-Type', 'text/html');

    // Handle routes
    if (req.url === '/') {
        res.write(`
            <!DOCTYPE html>
            <html>
            <head>
                <title>Node.js Server</title>
                <style>
                    body {
                        font-family: Arial;
                        text-align: center;
                        margin-top: 50px;
                        background-color: #f4f4f4;
                    }
                    h1 {
                        color: #333;
                    }
                    p {
                        font-size: 18px;
                    }
                </style>
            </head>
            <body>
                <h1>Welcome to Node.js Server</h1>
                <p>This page is served using Node.js without any framework.</p>
            </body>
            </html>
        `);
        res.end();
    } else {
        res.write("<h1>404 Not Found</h1>");
        res.end();
    }
});

// Start server
server.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});