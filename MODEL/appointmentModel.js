const mongoose = require('mongoose');

//קביעת תור
const appointmentSchema=mongoose.Schema({
    User:{ type:mongoose.Schema.Types.ObjectId,ref:'User'},//קוד לקוח 
    Date:{type:Date,require},//תאריך התור
    Option:{ type:mongoose.Schema.Types.ObjectId,ref:'Options'},
    Cooperate:{ type:mongoose.Schema.Types.ObjectId,ref:'Cooperate'}//קוד ספר
  
}) 

module.exports =mongoose.model("Appointment",appointmentSchema)