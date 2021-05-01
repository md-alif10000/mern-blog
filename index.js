const express = require("express");
const env = require("dotenv");
const connect = require("./config/db");
const path=require('path')
const cors=require('cors')
const app = express();

env.config();
// Connect mongodb database
connect();

// App config
app.use(express.json());
app.use(cors())
app.use("/public", express.static(path.join(__dirname, "uploads")));

// Router import
const userRouter = require("./routes/userRoutes");
const postRouter = require("./routes/postRoutes");

app.use("/", userRouter);
app.use('/',postRouter)

app.get("/", (req, res) => {
	res.send("Hello ,Server is running......");
});

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
	console.log(`App is listening at Port:${PORT}`);
});
