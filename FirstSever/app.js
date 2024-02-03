const http=require('http');
const fs=require('fs')
const server=http.createServer( (req,res)=>{
    const url=req.url;
    const method=req.method;
    if(url=='/home'){
        res.write('<html>');
   res.write('<head><title>Home page</title></head>')
   res.write('<body><h1>Welcome to home</body>')
   res.write('</html>')
  return  res.end()
    }
    if(url==='/message' && method==='POST'){
        fs.writeFile('message.txt','DUMMY')
        res.statusCode=302;
        res.setHeader('Location','/');
        return res.end();
    }
     if(url=='/about'){
        res.write('<html>');
   res.write('<head><title>Home page</title></head>')
   res.write('<body><h1>Welcome to about</body>')
   res.write('</html>')
  return  res.end()
    }
   if(url=='/node'){
   res.write('<html>');
   res.write('<head><title>My first page</title></head>')
   res.write('<body><h1>WElcome TO node js Project </h1></body>')
   res.write('</html>')
   res.end()
  }
});
server.listen(4000);

