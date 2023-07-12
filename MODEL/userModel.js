const mongoose = require('mongoose')

// טבלת משתמשים
const userSchema = mongoose.Schema({
    Name: { type: String, require },
    LastName: { type: String, require },
    Passwors: { type: Number, require },
    //id:{type:Number,require},
    Phone: { type: Number, require },
    Emil: { type: String, require },
    Status: { type: Boolean },//משתמש פעיל
    Type: { type: Number },//רמת הרשאה  - מנהל עובד או משתמש 
    ProfileImg: { data: Buffer, contentType: String }//תמונת פרופיל 

    //0 =admin
    //1 =castumer
    //2 =cooperate
})

module.exports = mongoose.model("User", userSchema)
