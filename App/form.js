const http = require('http');

const server= http.createServer((req,res)=>{
    console.log(req.url, req.method, req.headers)

    if(req.url === '/'){
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<head><title> home </title></head>');

        res.write('<body>');
        res.write('<H1> Welcome to home page </H1>');
        res.write('<form action="/submit-deatils" method="POST">');
        res.write('<input type="text" name="username" placeholder="Username"><br>');
        res.write('<label for="gender">Gender:</label>');
        res.write('<input type="radio" id="male" name="gender" value="male">');
        res.write('<label for="male">Male</label>');
        res.write('<input type="radio" id="female" name="gender" value="female">');
        res.write('<label for="female">Female</label><br><br>');
        res.write('<button type="submit">Submit</button>');
        res.write('</form>');
        res.write('</body>');

        res.write('</html>');
        return res.end();
    }else if(req.method=='POST' && req.url.toLowerCase() === '/submit-deatils'){
        // fs.writeFileSync('user.txt', 'omar');
        res.statusCode=302; // redrect code
        // res.setHeader('Location', '/');
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<head><title> submited </title></head>');
        res.write('<body><H1> Thanks for submiting deatils </H1></body>')
        res.write('</html>');
        res.end();
    }else{
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<head><title> error </title></head>');
        res.write('<body><H1> 404 Error </H1></body>')
        res.write('</html>');
        res.end();
    }
});

const port = 3001
server.listen(port,()=>{
    console.log(`http://localhost:${port}`)
});