import { Router } from "express";
import Post from "../models/post.js";
const router = Router();

router.get("/note/:email", async (req, res) => {
  try {
    let email = req.params.email;
    if (email === undefined) res.sendStatus(404);
    const post = await Post.find({ email });
    if (!post) res.sendStatus(404);
    return res.json(post);
  } catch (error) {
    res.sendStatus(404);
  }
});
router.get("/", async (req, res) => {
  const posts = await Post.find();
  res.json(posts);
});

router.post("/", async (req, res) => {
  try {
    const { name, content, group, email } = req.body;
    const post = new Post({ name, content, group, email });
    await post.save();
    return res.json(post);
  } catch (error) {
    res.sendStatus(403);
  }
});

router.put("/note/:id", async (req, res) => {
  try {
    const post = await Post.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!post) return res.sendStatus(404);
    return res.sendStatus(204);
  } catch (error) {
    error;
  }
});

router.delete("/note/:id", async (req, res) => {
  try {
    await Post.findByIdAndDelete(req.params.id);
    res.sendStatus(204);
  } catch (error) {
    console.log(error);
  }
});

export default router;
