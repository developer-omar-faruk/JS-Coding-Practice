const http = require('http');


// const server = http.createServer((req, res) => {
//     // console.log(req);
//     console.log(req.url, req.method, req.headers)
//     // process.exit(); // ..stope evene loop

//     res.setHeader('Content-Type', 'text/html');
//     res.write('<html>');
//     res.write('<head><title> omar faruk </title></head>');
//     res.write('<body><H1> MD. Omar Faruk </H1></body>')
//     res.write('</html>');
//     res.end();
// });


// ...Bssed on url and chack condition to send response

const server = http.createServer((req, res) => {
    console.log(req.url, req.method, req.headers)

    if(req.url ==='/'){
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<head><title> omar faruk </title></head>');
        res.write('<body><H1> MD. Omar Faruk </H1></body>')
        res.write('</html>');
        return res.end();
    }else if(req.url ==='/home'){
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<head><title> Home </title></head>');
        res.write('<body><H1> Welcome to Home page </H1></body>')
        res.write('</html>');
        return res.end();
    }else{
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<head><title> Error </title></head>');
        res.write('<body><H1> 404 Error </H1></body>')
        res.write('</html>');
        res.end();
    }
    
});


server.listen(3001, () => {
    console.log(`Server is running on port http://localhost:${3001}`);
});
