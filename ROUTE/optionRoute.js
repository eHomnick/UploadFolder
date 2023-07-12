const router=require('express').Router()
const optionController=require('../CONTROLLERS/optionsController')
// const optionModel = require('../MODEL/optionsModel')

router.get('/getAllOption',optionController.getAllOption),
router.put('/UpdateOptionByName/:name',optionController.UpdateOptionByName),
router.post('/NewOption',optionController.NewOption),
router.get('/getOptionByName/:name',optionController.getOptionByName),
router.get('/getOptionById/:id',optionController.getOptionById)

module.exports =router