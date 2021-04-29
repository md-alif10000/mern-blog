const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt=require('jsonwebtoken')
require('dotenv').config()

exports.register = async (req, res) => {
    const {name,email,username,password}=req.body
	console.log(req.body);


	try {
		const checkUser = await User.findOne({ email });
		if (checkUser) {
			return res.status(400).json({ errors: [{ msg: "User Alreary Exist" }] });
		} else {
			const hash = await bcrypt.hash(password, 10);

            const user=await new User({
                name,
                email,
                username,
                password:hash
            })
            const token=jwt.sign({user},process.env.JWT_SECRET,{expiresIn:'7d'})
            user.save((error,data)=>{
                if(error) return res.status(400).json({message:'Something went wrong'})
                if(data){
                    return res
											.status(200)
											.json({
												message: "Your account has been created",
												token,
											});

                }
            })

            
		}
	} catch (error) {
        console.log(error)
		res.status(500).json({ errors: error });
	}
};
