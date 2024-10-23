const express= require('express'); //require express js
const app = express();
const path = require('path'); //for handling path
const fs = require('fs');
const { log } = require('console');

app.use(express.json());//form handling in backend
app.use(express.urlencoded({extended:true}));//form handling in backend
app.use(express.static(path.join(__dirname,'public')));//handling path

app.set('view engine', 'ejs');//renderning ejs

// routings
app.get('/',(req,res)=>{
    fs.readdir(`./files`,function(err,files){
        // console.log(files);
        res.render("index",{files:files});
    })
})

app.get('/file/:filename',(req,res)=>{
    fs.readFile(`./files/${req.params.filename}`,"utf-8",(err,filedata)=>{
        // 
        res.render('show',{filename: req.params.filename ,filedata:filedata});

    })
})



app.post('/create',(req,res)=>{
//    console.log(req.body);
fs.writeFile(`./files/${req.body.title.split(' ').join('-')}.txt`,req.body.details,(err)=>{
    res.redirect("/")

    });
})

// (((((((((((((((((((((((((((((((((((((((((((((((((((((((((((Server listen part )))))))))))))))))))))))))))))))))))))))))))))))))))))))))))

app.listen(3000,()=>{
    console.log("Server is running on port 3000");
})
