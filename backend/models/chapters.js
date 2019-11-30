let mongoose = require('mongoose');

module.exports=mongoose.model('chapter',{
    moduleName:{
        type:String
    },
    no:{
        type:Number
    },
    style:{
        type:String
    },
    iconFile:String
})
// var moduleName = req.body.moduleName;
//             var no = req.body.no;
//             var iconfile = req.file.filename;
//             var introFile = req.file.filename;