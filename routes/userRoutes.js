
const { register} = require('../controllers/userController');
const { isRegisterValidated, registerValidation } = require('../middleware/validator');

const router=require('express').Router()

router.post("/register", registerValidation,isRegisterValidated, register);




module.exports= router;