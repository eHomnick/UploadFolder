const express= require('express')
const App= express()
const mongoose=require('mongoose')


const bodyParser=require('body-parser')
App.use(bodyParser.json())
App.use(function(req, res, next) {
       res.header("Access-Control-Allow-Origin", "*");
       res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
       res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
       next();
     });



const userRouter=require('./ROUTE/userRoute')
App.use('/user',userRouter)

const cooperateRouter=require('./ROUTE/cooperateRoute')
App.use('/hair',cooperateRouter)

const optionRouter=require('./ROUTE/optionRoute')
App.use('/option',optionRouter)

const appointmentRouter=require('./ROUTE/appointmentRoute')
App.use('/appointment',appointmentRouter)



mongoose.connect("mongodb+srv://Ariadna:1q2w3e4r@ariadna.bpwcgwy.mongodb.net/"
).then(()=>{
       console.log("connect to mongo!")
})
 



App.listen(3030,()=>{
       console.log ("listening on port 3030")
})

