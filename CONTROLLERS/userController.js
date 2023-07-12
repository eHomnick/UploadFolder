//הניתוב הוא בעצם לאן שייך ומתקשר התוכן של הפונקציות הנוכחיות
const userModel = require('../MODEL/userModel')

const Login = (req, res) => {
    console.log("_---------")
    let name = req.params.name
    let pass = req.params.pass
    console.log(name)
    console.log(pass)

    userModel.findOne({ name: name, password: pass }).then((response) => {

        res.send(response)

    }).catch((error) => {
        res.send('error:' + error)
    })
}

const getUserById = async (req, res) => {
    try {
        let id = req.params.id
        let user = await userModel.findById(id)
        res.json({ "user": user })
    }
    catch (error) {
        res.send('error :' + error)
    }
}
// Ctrl and ?
// const getUserByName =async (req,res) => {
//     try {
//         let name = req.params.name
//         let user = await userModel.findOne({ name: name }).populate("")
//         res.json({ "user": user })
//     }
//     catch (error){
//         res.send('error:' + error)
//     }
// } 


//הוספת משתמש חדש 
const addUser = async (user) => {
    //בדיקה אם קיים כזה יוזר עם פרטים קריטיים
    console.log(user);
    let users = await userModel.find({ Emil: user.Emil, Phone: user.Phone, Passwors: user.Passwors })
    if (users != null || user.length > 0) {

        return { status: false, message: 'קיים משתמש עם פרטים זהים' }
    }
    let NewUser = new userModel(user)

    NewUser.save().then((response) => {
        return { status: true, response }
    }).catch((err) => {
        return { status: false, message: "error : " + err }
    })
}



const NewUser = async (req, res) => {
    try {
        let user = req.body
        console.log(user);
        let response = await addUser(user)
        res.json(response)

    }
    catch (err) {
        res.json({ status: false, message: err })
    }


}

module.exports = { Login, getUserById, NewUser ,addUser}