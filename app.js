const Express = require('express');
const Axios = require('axios');
const FsExtra = require('fs-extra');

let port = 3000;

let app = Express();

app.use(Express.json())


app.get('/', async (req, res) => {

        return res.json({version: ""});
});

app.get('/ClassList',async(req,res)=>{
    console.log(req.query);
    return res.status(201).json({message:'OK'});
});

app.get('/Upload',async(req,res)=>{
    console.log(req.query);
    
    try {
        let data=req.query;
        FsExtra.outputFileSync('./public/upload.json', data);

    } catch (error) {
        console.log(error);
    }

    return res.status(201).json({message:'OK'});
});

console.log(" APP Running...");
console.log("\n   http://localhost:"+port);
console.log("\n   http://localhost:"+port+'/ClassList');
console.log("\n   http://localhost:"+port+'/Upload');


app.listen(port);