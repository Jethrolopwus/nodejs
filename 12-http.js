const http = require('http');

const server = http.createServer((req, res) =>{
    if(req.url === "/") {

    res.end(" welcome to my Home page ")
    return;
    }
    if(req.url === "/about"){

        res.end("Here is our short History")
        return;
    }

    res.end(`<h1>Oops</h1>
        <p>We can't seem to find the page you are looking for </p>

       <a href="/"> Back to Home page </a>
        `)
})

server.listen(4000)