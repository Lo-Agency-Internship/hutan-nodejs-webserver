const http = require('http');
const port = 4000;
const fs=require('fs');
const path=require('path');

 

// ============Create Server===============
const server = http.createServer((req,res)=>
{
    let filePath= "." + req.url;
    if(filePath === "./")
    {
        fs.readFile("index.html",(err,data)=>
        {
            if(err)
            {
                res.writeHead(404,{'contect-type' : 'text/html'});

                res.end("404 Page Not Found");
            }
            else
            {
        res.writeHead(200, {"Content-Type": "text/html"});

        res.write(data);

        res.end();
            }
        });
    }
    else{
        fs.readFile(filePath,(err,data)=>
        {
            if(err)
            {
                res.writeHead(200, {"Content-Type": "text/html"});
                res.end();
            }
            else
            {
                switch(path.extname(filePath))
                {
                    case ".html":
                        res.writeHead(200, {"Content-Type": "text/html"});
                    break;
                    case ".css":
                        res.writeHead(200, {"Content-Type": "text/css"});
                    break;
                    case ".jpg":
                        res.writeHead(200, {"Content-Type": "image/jpg"});
                    break;
                    case ".jpeg":
                        res.writeHead(200, {"Content-Type": "image/jpeg"});
                        break;
                    case ".png":
                            res.writeHead(200, {"Content-Type": "image/png"});
                        break;
                     case ".svg":
                            res.writeHead(200, {"Content-Type": "image/svg+xml"});
                        break;
                    case ".webp":
                            res.writeHead(200, {"Content-Type": "image/webp"});
                        break;
                    case ".ico":
                            res.writeHead(200, {"Content-Type": "image/vnd.microsoft.icon"});
                        break;
                }
                res.write(data);
                res.end();
            }
        });
    }

})


// ================Listen Port=================
server.listen(port,"localhost",1,(_err)=>{

    if(_err){   
        console.log("Try Again");
    }
    else{
        console.log(`This Server Listen On Port ${port} Now`);
    }
});