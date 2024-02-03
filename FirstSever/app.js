const http=require('http');

const server=http.createServer( (req,res)=>{
    const url=req.url;
    if(url=='/home'){
        res.write('<html>');
   res.write('<head><title>Home page</title></head>')
   res.write('<body><h1>Welcome to home</body>')
   res.write('</html>')
  return  res.end()
    }else if(url=='/about'){
        res.write('<html>');
   res.write('<head><title>Home page</title></head>')
   res.write('<body><h1>Welcome to about</body>')
   res.write('</html>')
  return  res.end()
    }
  else if(url=='/node'){

  
   res.write('<html>');
   res.write('<head><title>My first page</title></head>')
   res.write('<body><h1>WElcome TO node js Project </h1></body>')
   res.write('</html>')
   res.end()
  }
});
server.listen(4000);

