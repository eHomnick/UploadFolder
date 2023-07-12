const router=require('express').Router()
const userController=require('../CONTROLLERS/userController')

router.get('/login/:name/:pass',userController.Login)
router.get('/getUserById/:id',userController.getUserById)
router.post('/NewUser',userController.NewUser)

module.exports=router
