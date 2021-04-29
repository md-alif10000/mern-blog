
const { register, login } = require("../controllers/userController");
const { isRegisterValidated, registerValidation, loginValidation, isLoginValidated } = require('../middleware/validator');

const router=require('express').Router()

router.post("/register", registerValidation,isRegisterValidated, register);

router.post('/login',loginValidation,isLoginValidated ,login)


module.exports= router;