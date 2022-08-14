import http from 'http';
import fs from 'fs'

let db = fs.readFileSync('./db.json');
let data = JSON.parse(db);
// console.log(JSON.stringify(data));

http.createServer((req, res)=>{


    // console.log(req.method);

    // what type of responce code like js/json/html/txt( head writer )
    // status code on PDF see(text/html)=html file => (application/json  js codeings) = app fils
    res.writeHead('200', {'content-Type' : 'application/json'})

    if (req.url == '/') {
        res.write(db)
    }else if(req.url == '/devloper'){
        res.write(JSON.stringify(data.devs))
    }else if(req.url == '/students'){
        res.write(JSON.stringify(data.students))
    }else if(req.url == '/products'){
        res.write(JSON.stringify(data.products))
    }else{
        res.write(JSON.stringify({
            'massage' : ' data faild '
        }))
    }
    // res.write(db)
    res.end()
}).listen('5050', ()=>{
    console.log('server is running in port "5050"');
})