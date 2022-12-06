const http = require('http');

const server = http.createServer((req, res)=>{
    if(req.url === '/') {
        res.end('Welcome to the Jungle We got fun and games')
    }
    if (req.url === '/about') {
        res.end('this is the about page')
    } else {
        res.end('<h1>oops!</h1><p>Page not found!!!</p><a href="/">Go back Home :)</a>')
    }
})

server.listen(5000)