const optionsModel = require('../MODEL/optionsModel')

//קבלת אופציה במספרה לפי קוד
const getOptionById = async (req, res) => {
    try {
        let id = req.params.id
        let option = await userModel.findById(id)
        res.json({ "option": option })
    }
    catch (error) {
        res.send('error :' + error)
    }
}

//קבלת אופציה במספרה לפי שם
const getOptionByName = async (req, res) => {
    try {
        let name = req.params.name
        let option = await optionsModel.findOne({ name: name }).populate("")
        res.json({ "option": option })
    }
    catch (error) {
        res.send('error:' + error)
    }
}

//הוספת אופציה חדשה
// const NewOption = (req, res) => {
//     let option = req.body.option
//     let NewOption = new optionsModel(option)
//     Newcooperate.save()
//     res.send("the new option added successfully!")
// }
const NewOption = async (req, res) => {
    try {
        console.log("get in new option");
        let option = req.body
        let NewOption = await new optionsModel(option)
        await NewOption.save()
        let allOptions = await optionsModel.find()
        res.json({ status: true, allOptions: allOptions })
    }
    catch (error) {
        res.json({ status: false, message: 'error :' + error })
    }
}

//עדכון אופציה לפי שם
const UpdateOptionByName = (req, res) => {
    let name = req.params.name
    let newNameOption = req.body.name
    optionsModel.findOneAndUpdate({ name: name }, { name: newNameOption }).then((response) => {
        res.send(`hello!! ${response} updated successfully`)

    }).catch((error) => {
        res.send('error :' + error)
    })
}
//להוסיף
// populate('cooperate') 
//שליפת כל האופציות
const getAllOption = (req, res) => {
    optionsModel.find().populate('Cooperate').then((option) => {
        res.json({ option: option })
    }).catch((err) => { res.send('error :' + err) })


}

//מחיקת האופציות במספרה
const deleteOption = (req, res) => {
    optionsModel.findByIdAndDelete(req.params.id).then((data) => {
        res.send(data)
    }).catch((error) => {
        res.send(error)
    })
}

module.exports = { getOptionById, getOptionByName, NewOption, UpdateOptionByName, getAllOption, deleteOption, }