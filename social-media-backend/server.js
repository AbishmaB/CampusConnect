const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("✅ MongoDB Connected"))
  .catch((err) => console.log(err));

const postSchema = new mongoose.Schema({
  username: String,
  content: String,
  likes: {
    type: Number,
    default: 0,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Post = mongoose.model("Post", postSchema);

app.get("/", (req, res) => {
  res.send("CampusConnect Backend Running 🚀");
});

app.post("/posts", async (req, res) => {
  try {
    const post = new Post(req.body);
    await post.save();
    res.json(post);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.get("/posts", async (req, res) => {
  try {
    const posts = await Post.find().sort({
      createdAt: -1,
    });

    res.json(posts);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.put("/posts/:id/like", async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);

    post.likes += 1;

    await post.save();

    res.json(post);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.delete("/posts/:id", async (req, res) => {
  try {
    const deletedPost = await Post.findByIdAndDelete(
  req.params.id
);

if (!deletedPost) {
  return res.status(404).json({
    message: "Post not found",
  });
}

    res.json({
      message: "Post Deleted",
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.listen(5000, () => {
  console.log("🚀 Server running on port 5000");
});

