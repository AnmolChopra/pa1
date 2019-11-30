let express = require('express');
let cors = require('cors');
let bodyparser = require('body-parser');
// var cron = require('node-cron');
let path = require('path');
let http = require('http');
let app = express();
app.use(cors());
app.use(bodyparser.json());

//    Add Modules
app.post('/addModule',(req,res)=>{
    var conn = require('./backend/controller/controller');
    conn.addModule(req,res);
})
//   fetch Module
app.get('/fetchModule',(req,res)=>{
    var conn = require('./backend/controller/controller');
    conn.fetchModule(req,res);
})
// fetch Intro 
app.get('/fetchIntro/:moduleName',(req,res)=>{
    var conn = require('./backend/controller/controller');
    conn.fetchIntro(req,res);
})
// add  intro
app.post('/addIntro',(req,res)=>{
    var conn = require('./backend/controller/controller');
    conn.addIntro(req,res);
})
// add teacher
app.post('/addteach',(req,res)=>{
    var conn = require('./backend/controller/controller');
    conn.addteacher(req,res);
})
//                              Teacher Login

app.post('/techlog',(req,res)=>{
    var conn = require('./backend/controller/controller');
    conn.TechLog(req,res);
});
//        Find Module 1 Stats
app.get('/findMod1/:teacherN',(req,res)=>{
    var  conn = require('./backend/controller/controller');
    conn.findMod1(req,res);
})
//     Intro Video Time Module 1
app.post('/introTime',(req,res)=>{
    var conn  = require('./backend/controller/controller');
    conn.introTime1(req,res);
})
//       update ppt module 1
app.post('/updatepptmod1',(req,res)=>{
    var conn = require('./backend/controller/controller');
    conn.updatepptmod1(req,res);
})
app.listen(1235,()=>{
    console.log('server runnng on 1235')
})