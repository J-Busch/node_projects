const http = require('http')

const PORT = 5000

const server = http.createServer((req,res)=>{
    if(req.url === '/') {
        res.end('Welcome to our home page')
    }
    else if(req.url === '/about') {
        res.end('Here is our about page')
    }
    else {
        res.end(`
        <h1>There was a problem</h1>
        <p>We can't find the page you are looking for</p>
        <a href="/">Back home</a>
        `)
    }
})

server.listen(PORT, () => {
    console.log(`Server is listening on port: ${PORT}`)
})
