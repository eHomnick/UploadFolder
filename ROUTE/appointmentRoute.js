const router=require('express').Router()
const appointmentController=require('../CONTROLLERS/appointmentController')


router.get('/getappointmentByUserId/:id',appointmentController.getappointmentByUserId),
router.delete('/deleteAppointment/:_id',appointmentController.deleteAppointment)
router.post('/Newappointment',appointmentController.Newappointment),

module.exports=router




