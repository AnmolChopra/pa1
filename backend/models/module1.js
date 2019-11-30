let mongoose = require('mongoose');

module.exports=mongoose.model('module1',{
    teacherName:{
        type:String
    },
    module1_Stat:{
        type:Boolean,
        default: true
    },
    introVid:{
        type:Boolean,
        default:false
    },
    introVidTime:{
        type:Number,
        default : 0.0
    },
    Pttstat:{
        type : Boolean,
        default : false
    },
    PPtslide:{
        type : Number,
        default : 1
    },
    eduVid:{
        type: Boolean,
        default:false,
    },
    eduWOrd:{
        type: Boolean,
        default :false
    },
    mcq:{
        type: Boolean,
        default: false
    },
    ass:{
        type: Boolean,
        default :false
    },
    mcqA:{
        type: String,        
    },
    mcqB:{
        type: String,        
    },
    mcqC:{
        type: String,        
    },
    mcqD:{
        type: String,        
    },
    mcqE:{
        type: String,        
    },
    mcqF:{
        type: String,        
    },
    mcqG:{
        type: String,        
    },
    mcqH:{
        type: String,        
    },
    mcqI:{
        type: String,        
    },
})