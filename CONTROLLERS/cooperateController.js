const { response } = require('express')
const cooperateModel = require('../MODEL/cooperateModel')
const { addUser } = require('./userController')
const userModel = require('../MODEL/userModel')


// const Login = (req, res) => {
//     console.log("login")
//     let { password, details, isMail = true } = req.params

//     //מציאת מעצב שיער עי קוד
//     cooperateModel.findById({ password: name, id: id }).then((response) => {
//         res.send("conected succsesfully")

//     }).catch((error) => {
//         res.send('error:' + error)
//     })
// }

//שליפת מעצבי שיער עי קוד אישי
const getcoooperateById = async (req, res) => {
    try {
        let id = req.params.id
        let cooperate = await cooperateModel.findOne({ Id: id })
        res.json({ "cooperate": cooperate })
    }
    catch (error) {
        res.send('error :' + error)
    }
}

// //שליפת מעצב שיער לפי שם
// const getcooperateByName = async (req, res) => {
//     try {

//         let name = req.params.name
//         let LastName = req.params.Lname

//         let user=await userModel.findOne({Name:name,LastName:LastName})
//         let cooperate = await cooperateModel.findOne({ PersonalDetails: user._id })
//         res.json({ cooperate: cooperate })
//     }
//     catch (error) {
//         res.send('error :' + error)
//     }
// }


//finish 
//יצירת ספר חדש
//כולל שליחה ליצירת משתמש חדש
const Newcooperate = async (req, res) => {
    try {
        //הוספה כיוזר
        let response = await addUser(req.body.user)
        if (response.status == false) {
            res.json({ response, stack: 'user' })
        }
        let cooperate = req.body.cooperate
        //הוספה ידנית של קוד יוזר
        cooperate.PersonalDetails = response.user._id
        //הוספה כעובד
        let Newcooperate = new cooperateModel(cooperate)
        await Newcooperate.save().populate('PersonalDetails')
        res.json({ status: true, newNamecooperate })
    }
    catch (error) {
        res.json({ status: false, message: 'error :' + error })
    }
}

//עדכון מעצב שיער לפי שם
const UpdatecooperateByName = (req, res) => {
    let name = req.params.name
    let newNamecooperate = req.body
    cooperateModel.findOneAndUpdate({ Name: name }, req.body).then((response) => {
        res.send(`hello!! ${response} updated successfully`)

    }).catch((error) => {
        res.send('error :' + error)
    })
}

//שליפת כל מעצבי השיער
const getAllcooperates = (req, res) => {
    cooperateModel.find().then((ress) => {
        res.send(ress)
    })
        .catch((err) => {
            res.send(err)
        })
}

//מחיקת מעצב שיער
const deletecooperate = (req, res) => {

    cooperateModel.findOneAndDelete({ id: req.params.id }).then((data) => {
        res.send(data)
    }).catch((error) => {
        res.send(error)
    })
}


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

//עדכון שעות עבודה
const UpdateTimecooperateByName = (req, res) => {
    console.log(req.params)
    let name = req.params.name
    let lastname = req.params.lastName
    let newNamecooperate = req.body.time
    cooperateModel.findOneAndUpdate({ $and: [{ Name: name }, { Last_Name: lastname }] }, { Time: newNamecooperate }).then((response) => {
        res.send(`hello!! ${response} updated hair successfully`)

    }).catch((error) => {
        res.send('error :' + error)
    })
}

module.exports = { getcoooperateById, Newcooperate, UpdatecooperateByName, getAllcooperates, deletecooperate, UpdateTimecooperateByName }
