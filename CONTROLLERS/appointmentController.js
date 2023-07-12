const { response } = require('express')
const appointmentModel = require('../MODEL/appointmentModel')




//שליפת תורים עי קוד לקוח
const getappointmentByUserId = async (req, res) => {
    try {
        let id = req.params.id
        let h = await appointmentModel.find({ User: id }).populate('User').populate('Option')
        console.log(h)
        res.json(h)
    }
    catch (error) {
        res.send('error :' + error)
    }
}



//יצירת תור חדש
const Newappointment = async (req, res) => {
    try {
        let appointment = req.body
        let New = new appointmentModel(appointment)
        console.log(New)
        await New.save().then(console.log("suc"))
        res.send("the new appointment added successfully!")
    }
    catch (error) {
        res.send('error :' + error)
    }
}

//מחיקת תור
const deleteAppointment = (req, res) => {
    
    appointmentModel.findByIdAndDelete(req.params._id).then((data) => {
        // console.log("---------------------------------");
        res.json(data)
    }).catch((error) => {
        res.send(error)
    })
}


module.exports = { Newappointment, getappointmentByUserId, deleteAppointment }

// //עדכון מעצב שיער לפי שם
// const UpdatecooperateByName = (req, res) => {
    //     let name = req.params.name
    //     let newNamecooperate = req.body
    //     cooperateModel.findOneAndUpdate({ Name: name }, req.body).then((response) => {
        //         res.send(`hello!! ${response} updated successfully`)
        
        //     }).catch((error) => {
            //         res.send('error :' + error)
            //     })
            // }
            
            // //שליפת כל מעצבי השיער
                        // const getAllcooperates = (req, res) => {
                        //     cooperateModel.find().then((ress) => {
                            //      res.send(ress)})
                            //        .catch((err)=>{
                                //            res.send(err)
                                //        }) 
                                // }
                                
                                
                                // //שליפת שעות עבודה
                                // const getTimecooperateById = async (req, res) => {
                                    //     try { 
                                        //         let id = req.params.id
                                        //         let cooperate = await cooperateModel.findOne({ name: name })
                                        //         res.json({ cooperate: cooperate })
                                        //     }
                                        //     catch (error) {
                                            //         res.send('error :' + error)
                                            //     }
                                            // }
                                            
                                            // //עדכון שעות עבודה
                                            // const UpdateTimecooperateByName = (req, res) => {
                                                //     console.log( req.params)
                                                //     let name = req.params.name
                                                //     let lastname = req.params.lastName
                                                //     let newNamecooperate = req.body.time
                                                //     cooperateModel.findOneAndUpdate({$and:[ {Name: name},{Last_Name:lastname} ]}, { time: newNamecooperate }).then((response) => {
                                                    //         res.send(`hello!! ${response} updated hair successfully`)
                                                    
                                                    //     }).catch((error) => {
                                                        //         res.send('error :' + error)
                                                        //     })
                                                        // }