const Post = require("../models/Post");
const { htmlToText } = require("html-to-text");
const fs = require("fs");

exports.createPost = async (req, res) => {
	try {
		const { title, slug, body, meta } = req.body;

		const image = req.file ? req.file.filename : "";

		const errors = [];

		if (title == "") errors.push({ msg: "Title is required" });
		if (slug == "") errors.push({ msg: "Slug is required" });
		if (body == "") errors.push({ msg: "Body is required" });
		if (meta == "") errors.push({ msg: "Meta description is required" });
		if (!req.file) {
			errors.push({ msg: "Image is required" });
		} else {
			const fileType = req.file.mimetype;
			const ext = fileType.split("/")[1].toLowerCase();
			if (ext !== "jpg" && ext !== "png" && ext !== "jpeg")
				errors.push({ msg: "This file is not supported" });
		}
		if (image == "") errors.push({ msg: "Image is required" });
		// if(fileType==)

		if (errors.length > 0) return res.status(400).json({ errors: errors });

		const checkPost = await Post.findOne({ slug });
		if (checkPost) {
			return res.status(400).json({ errors: [{ msg: "Slug Alreary Exist" }] });
		} else {
			const post = await new Post({
				user: req.user._id,
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
		return res.status(500).json({ errors: error });
	}
};

exports.updatePost = async (req, res) => {
	try {
		const { title, slug, body, meta, _id,img } = req.body;

		const image = req.file ? req.file.filename : img;

		const errors = [];

		if (title == "") errors.push({ msg: "Title is required" });
		// if (slug == "") errors.push({ msg: "Slug is required" });
		if (body == "") errors.push({ msg: "Body is required" });
		if (meta == "") errors.push({ msg: "Meta description is required" });
		if (!req.file) {
			errors.push({ msg: "Image is required" });
		} else {
			const fileType = req.file.mimetype;
			const ext = fileType.split("/")[1].toLowerCase();
			if (ext !== "jpg" && ext !== "png" && ext !== "jpeg")
				errors.push({ msg: "This file is not supported" });
		}
		// if (image == "") errors.push({ msg: "Image is required" });
		// if(fileType==)

		if (errors.length > 0) return res.status(400).json({ errors: errors });

		const prevPost = await Post.findById(_id);
		console.log(prevPost.image);
		console.log("./uploads/" + prevPost.image);
		if(req.file){
			try {
				fs.unlinkSync("./uploads/" + prevPost.image);
			} catch (error) {
				return res
					.status(500)
					.json({ error: [{ msg: "Something went wrong." }] });
			}

		}
		


		await Post.findByIdAndUpdate(
			_id,
			{ title, slug, body, meta, image },
			(error, data) => {
				if (error)
					return res
						.status(400)
						.json({ error: [{ msg: "Something went wrong." }] });
				if (data) {
					return res.status(201).json({
						message: "Post updated successfully",
					});
				}
			}
		);
	} catch (error) {
		console.log(error);
		return res.status(500).json({ errors: error });
	}
};


exports.deletePost=async(req,res)=>{
	try {
		
		const deletedPost=await Post.findByIdAndDelete(req.params._id)

		console.log(deletedPost.image)

			try {
				fs.unlinkSync("./uploads/" + deletedPost.image);
				return res.status(200).json({ deletedPost });

			} catch (error) {
				return res
					.status(500)
					.json({ error: [{ msg: "Something went wrong." }] });
			}

	} catch (error) {
		return res.status(500)
		
	}
	
}

exports.getUsersPosts = async (req, res) => {
	const page = req.params.page;
	const perPage = 3;
	const skip = (page - 1) * perPage;

	try {
		const count = await Post.find({ user: req.user._id }).countDocuments();

		const posts = await Post.find({ user: req.user._id })
			.skip(skip)
			.limit(perPage)
			.sort({ updatedAt: -1 });
		return res.status(200).json({ posts, count, perPage });
	} catch (error) {
		return res.status(500).json({ error: [{ msg: error.message }] });
	}
};

exports.getSinglePost = async (req, res) => {
	try {
		const post = await Post.findById(req.params._id);

		return res.status(200).json({ post });
	} catch (error) {
		return res.status(500).json({ error: [{ msg: error.message }] });
	}
};
