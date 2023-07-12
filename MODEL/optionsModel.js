const mongoose=require('mongoose')
 
// טבלת אפשרויות שקיימות במספרה
const optionsSchema=mongoose.Schema({
    Name:{type:String,require}, 
    Description:{type:String,require}, 
    Price:{type:Number,require},
    Duration:{type:Number},//משך זמן בדקות
    Cooperate:[{ type:mongoose.Schema.Types.ObjectId,ref:'Cooperate'}]
})

module.exports =mongoose.model("Option",optionsSchema)
