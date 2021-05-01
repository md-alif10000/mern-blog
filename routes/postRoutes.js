const { createPost } = require("../controllers/postController");
const {
postValidation,
isPostValidated
} = require("../middleware/validator");
const router = require("express").Router();
const multer = require("multer");
const shortid = require("shortid");
const path = require("path");

const storage = multer.diskStorage({
	destination: function (req, file, cb) {
		cb(null, path.join(path.dirname(__dirname), "uploads"));
	},
	filename: function (req, file, cb) {
		cb(null, shortid.generate() + "-" + file.originalname);
	},
});

const upload = multer({ storage: storage });




router.post(
	"/create-post",
upload.single("image"),
	createPost
);



module.exports = router;
