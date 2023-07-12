const router=require('express').Router()
const cooperateController=require('../CONTROLLERS/cooperateController')

//router.get('/login',userController.Login)
//router.get('/getUserById/:id',userController.getUserById)
// router.get('/login',cooperateController.Login),
router.get('/getCooperateById/:id',cooperateController.getcoooperateById),
router.get('/getAllCooperates',cooperateController.getAllcooperates),
router.patch('/UpdateCooperateByName/:name',cooperateController.UpdatecooperateByName),
router.delete('/deleteCooperate/:id',cooperateController.deletecooperate)
router.post('/NewCooperate',cooperateController.Newcooperate),

module.exports=router




