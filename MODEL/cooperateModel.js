const mongoose = require('mongoose');
const appointmentModel = require('./appointmentModel');

//טבלת שמות ופרטים של הספרים
const cooperateSchema = mongoose.Schema({
    PersonalDetails: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    Option: [{ type: mongoose.Schema.Types.ObjectId , ref: 'Option'}],//רשימה מה הוא עושה
    Id: { type: Number, require },//קוד עובד
    Time: [{ day: { type: String, require }, time: { type: String, require } }],//זמני עבודה שלו
    Appointment: [    //הרשימה של התורים שנקבעו אליו
        { time: { type: Date, require }, }
    ]
    //req מחוייב להכניס ערך
})

module.exports = mongoose.model("Cooperate", cooperateSchema)

