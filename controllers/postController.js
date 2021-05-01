const Post = require("../models/Post");

exports.createPost = async (req, res) => {
	try {
		const { user, title, slug, body, meta } = req.body;
		console.log(req.body);
	
		const image = req.file ? req.file.filename : "";

		const errors = [];
		if (user == "") errors.push({ msg: "Please login first" });
		if (title == "") errors.push({ msg: "Title is required" });
		if (slug == "") errors.push({ msg: "Slug is required" });
		if (body == "") errors.push({ msg: "Body is required" });
		if (meta == "") errors.push({ msg: "Meta description is required" });
		if (!req.file) {
			errors.push({ msg: "Image is required" });
		} else {
			const fileType = req.file.mimetype;
			const ext=fileType.split('/')[1].toLowerCase();
			if(ext!=='jpg' && ext!=='png' && ext!=='jpeg') errors.push({ msg: "This file is not supported" });
		}
		if (image == "") errors.push({ msg: "Image is required" });
		// if(fileType==)

		if (errors.length > 0) return res.status(400).json({ errors: errors });

		const checkPost = await Post.findOne({ slug });
		if (checkPost) {
			return res.status(400).json({ errors: [{ msg: "Slug Alreary Exist" }] });
		} else {
			const post = await new Post({
				user,
				title,
				slug,
				body,
				meta,
				image,
			});

			post.save((error, data) => {
				if (error) {
					console.log(error);
					return res
						.status(400)
						.json({ errors: [{ msg: "Something went wrong" }] });
				}

				if (data) {
					return res.status(201).json({
						message: "Post created successfully",
					});
				}
			});
		}
	} catch (error) {
		console.log(error);
		res.status(500).json({ errors: error });
	}
};
