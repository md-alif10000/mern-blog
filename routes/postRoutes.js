const { createPost } = require("../controllers/postController");
const {
postValidation,
isPostValidated
} = require("../middleware/validator");
const router = require("express").Router();
const multer = require("multer");
const shortid = require("shortid");
const path = require("path");
const { isLoggedin } = require("../middleware/auth-middleware");

const storage = multer.diskStorage({
	destination: function (req, file, cb) {
		cb(null, path.join(path.dirname(__dirname), "uploads"));
	},
	filename: function (req, file, cb) {
		cb(null, shortid.generate() + "-" + file.originalname);
	},
});

const upload = multer({
	storage: storage,
	fileFilter: (req, file, cb) => {
		if (
			file.mimetype == "image/png" ||
			file.mimetype == "image/jpg" ||
			file.mimetype == "image/jpeg"
		) {
			cb(null, true);
		} else {
			console.log('invalid file')
			return cb(null, false);
			// return cb(new Error("Only .png, .jpg and .jpeg format allowed!"));
		}
	},
});




router.post(
	"/create-post",
	isLoggedin,
upload.single("image"),
	createPost
);



module.exports = router;
