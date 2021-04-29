const { body, validationResult } = require("express-validator");
exports.registerValidation = [
	body("name").not().isEmpty().withMessage("Name is required"),
	body("email").not().isEmpty().trim().withMessage("Email is required"),
	body("password")
		.isLength({ min: 6 })
		.withMessage("Password must be 6 character long"),
];

exports.isRegisterValidated=(req,res)=>{
    const errors=(validationResult(req))
    if(!errors.isEmpty()){
        console.log(req)
        res.json(errors.array())
    }else{
        next()
    }
}