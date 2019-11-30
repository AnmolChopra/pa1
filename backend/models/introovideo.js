let mongoose = require('mongoose');

module.exports=mongoose.model('intro',{
    moduleName:{
        type:String
    },
    no:{
        type:Number
    },
    stat:{
        type : Boolean,
        default : false
    },
    introFile:String
})