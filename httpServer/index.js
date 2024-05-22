const http = require('http')
const fs = require('fs')
const server = http.createServer((request,response)=>{

    const data=fs.readFileSync(`${__dirname}/api/userApi.json`,'utf-8')
        const mydata = JSON.parse(data)
    if(request.url == '/'){
        response.end('this is home page side')
    }else if(request.url == '/about'){
        response.end('this is about us page side')
    }else if(request.url == '/userapi'){
        response.writeHead(200,{"content-type":"application/json"})
            console.log(mydata[0].gender)
            response.end(mydata[0].gender)
        
        //response.end('this is user api page side')
    }else{
        response.writeHead(404)
        response.end('this is 404 side')
    }
    
    
})

server.listen(8001,'127.0.0.1',()=>{
    console.log('port requested 8001')
})