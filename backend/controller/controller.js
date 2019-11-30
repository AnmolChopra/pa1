let mongoose  = require('mongoose');
let chapter = require('../models/chapters');
let intro = require('../models/introovideo');
let teacher = require('../models/user');
let module1 = require('../models/module1');

let nodeMailer = require ('nodemailer');
let generator = require('generate-password');

mongoose.connect('mongodb://localhost/stp',(err)=>{
    if(err) throw err
    else{
        console.log('connected to DB STP')
    }
})

// multer
let multer = require('multer');
let DIR =  "./backend/attach/";
let storage = multer.diskStorage({
    destination:function(req,res,cb){
        cb(null,DIR);
    },
    filename:function(req,file,cb){
        var datetimestamp = Date.now();
        cb(null,file.filename+'-'+datetimestamp+'.'+file.originalname.split('.')[file.originalname.split('.').length-1])
    }
});

let upload = multer({storage:storage}).single('iconFile');
let introVid = multer({storage:storage}).single('introVid');


module.exports={
    //      Add Module
    addModule:function(req,res){
        upload(req,res,(err)=>{
           if(err) {}
           else{
            var moduleName = req.body.moduleName;
            var no = req.body.no;
            var style = req.body.style;
            var iconfile = req.file.filename;
            chapter.findOne({'moduleName':moduleName},(err,data)=>{
                if(err) throw err
                else if(!data || data.length == 0){
                    let ins = new chapter({'moduleName':moduleName,'no':no,'style':style,'iconFile':iconfile});
                    ins.save((err)=>{
                        if(err) throw err
                        else{
                            let ins = new intro({'moduleName':moduleName});
                            ins.save((err)=>{
                                if(err) throw err
                                else{
                                    res.json({'err':0,'msg':'Module Added Successfully'});
                                }
                            })
                        }
                    })
                }
                else {
                    res.json({'err':1,'msg':'Module Name Already Exist'});
                }
            })
           }
        })
    },

    //  fetch  Module
    fetchModule:function(req,res){
        chapter.find({},(err,data)=>{
            if(err) throw err
            else{
                res.json(data);
            }
        })
    },

    // fetch intro 
    fetchIntro:function(req,res){
        var moduleName = req.params.moduleName;
        intro.findOne({'moduleName':moduleName},(err,data)=>{
            if(err) throw err
            else{
                res.json(data);
            }
        })
    },

    //   add intro video
    addIntro:function(req,res){
        introVid(req,res,(err) => {
            if(err) {}
            else{
                var moduleName = req.body.moduleName;
                var introFile = req.file.filename;
                var stat = req.body.stat;
                intro.updateOne({'moduleName':moduleName},{'introFile':introFile,'stat':stat},(err,data)=>{
                    if(err) throw err
                    else{
                        res.json({'err':0,'msg':'video updated sucessfully'});
                    }
                })
            }
        })
    },
    //        teacher login
    TechLog:function(req,res){
        var username = req.body.username;
        var password = req.body.password;
        teacher.findOne({'username':username,'password':password},(err,data)=>{
            if(err){}
            else if(!data){
                res.json({'err':1,'msg':'Invalid Credentials'})
            }
            else{
                res.json({'err':0,'msg':'Login Successful','username':username,data})
                teacher.updateOne({username:username},{$set:{date_time:new Date()}},(err)=>{
                    if(err) throw err;
                    else{
                    console.log({'err':0,'msg':'date updated'})
                    }
                })
            }
        })
    },

hours(){
let minutes =parseInt((dateDifference))
},
    fetchTeacher:function(){
    
        teacher.aggregate([{$project:{email:1,dateDifference:{$subtract:[new Date(),"$date_time"]}}}],(err,data)=>{
            if(err) throw err
            else{
                // if(data.dateDifference){
                //     console.log()
                // }
           let  resObj= data
console.log(resObj);

for (var i = 0; i < resObj.length; i++) {
    console.log(resObj[i].email);
// let hoursDiff = resObj[i].dateDifference/(1000*60*60)%24
    if(resObj[i].dateDifference/(1000*60*60)%24 >= 0.1){

//                        mailer

let transporter = nodeMailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
        user: 'anmolchopra123@gmail.com',
        pass: '#@nm0l1998'
    }
});
let mailOptions = {
    from: '"Anmol CHopra" <anmolchopra123@gmail.com>', // sender address
    to: resObj[i].email, // list of receivers
    subject: 'Login Now', // Subject line
    text:'', // plain text body
    html: '<b>NodeJS Email Tutorial</b>' // html body
};

transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
        return console.log(error);
    }
    console.log('Message %s sent: %s', info.messageId, info.response);
        // res.render('index');
    });
        console.log("Done ",(resObj[i].dateDifference/(1000*60*60)%24))
                            }
                           else{
                               console.log("not done")
                           }
}
                    
//                var xyz = resObj.find(function(element){
//                    return element>=600000
//                })

// console.log(xyz)

              }
        })

    },
                                      //Add Teacher
    addteacher:function(req,res){
        var username = req.body.username;
        var password = generator.generate({
            length: 10,
            numbers: true
        });
        var email = req.body.email;
        teacher.findOne({'userename':username},(err,data)=>{
            if(err) throw err;
            else if(!data || data.length== 0){
                let ins = new teacher({'username':username,'email':email,'password':password});
                ins.save((err)=>{
                    if (err) throw err;
                    else{
                        let ins = new module1({'teacherName':username});
                        ins.save((err)=>{
                            if (err) throw err;
                            else{
                                res.json({'err':0,'msg':'Teacher Created successfully'});

                            // Mailer Starts
                                let transporter = nodeMailer.createTransport({
                                    host: 'smtp.gmail.com',
                                    // port: 465,
                                    secure: true,
                                    auth: {
                                        user: 'anmolchopra123@gmail.com',
                                        pass: '#@nm0l1998'
                                        }
                                });
                                let mailOptions = {
                                    from: '"Anmol CHopra" <anmolchopra123@gmail.com>', // sender address
                                    to: email, // list of receivers
                                    subject: 'Account Created', // Subject line
                                    text:'', // plain text body
                                    html: 'Your password is '+password // html body
                                };
                                transporter.sendMail(mailOptions, (error, info) => {
                                    if (error) {
                                        return console.log(error);
                                    }
                                    console.log('Message %s sent: %s', info.messageId, info.response);
                                    // res.render('index');
                                });
                            }
                        })
                    }
                })
            }
            else{
                res.json({'err':1,'msg':'Username Already Exists'});
            }
        })
    },
    //  Find Module 1 Stats
    findMod1:function(req,res){
        let teacher = req.params.teacherN
        module1.findOne({'teacherName':teacher},(err,data) => {
            if(err) throw err
            else{
                res.json(data);
            }
        })
    },
    //  Intro Video Time Update
    introTime1:function(req,res){
        let username = req.body.userName
        let time = req.body.time
        module1.updateOne({'teacherName':username},{$set:{'introVidTime':time}},(err)=>{
            if(err) throw err
            else{
                if( time >= "91"){
                    module1.updateOne({'teacherName':username},{'introVid':"true"},(err)=>{
                        if(err) throw err
                        else{
                            res.json({'msg':'both updated'});
                        }
                    })
                }
                else{
                    res.json({'msg':'Updated'});
                }
            }
        })
    },
    //      Update ppt module 1
    updatepptmod1:function(req,res){
        let username = req.body.userName
        let slideNo = 1
        module1.updateOne({'teacherName':username},{$inc:{'PPtslide':slideNo}},(err,data)=>{
            if(err) throw err
            else{
                res.json({data});
            }
        })
    }
}