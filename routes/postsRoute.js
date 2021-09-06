const router = require('express').Router();
const User = require('../models/User');
const Post = require('../models/Post');

// CREATE POST
router.post('/', async (req, res) => {
  const newPost = new Post(req.body)
  try {
    const savedPost = await newPost.save();
    res.status(201).json(savedPost)
  } catch(err) {
    res.status(500).json(err)
  }
})


// UPDATE POST
router.put('/:postId', async (req, res) => {
  try {
    const post = await Post.findById(req.params.postId);
    if (post.username === req.body.username){
      try {
        const updatedPost = await Post.findByIdAndUpdate(req.params.postId, {
          $set: req.body
        }, {new: true})
        res.status(200).json(updatedPost)
      } catch(err) {
        res.status(500).json(err)
      }
    } else {
      res.status(401).json('You can update only your post.')
    }
  } catch(err) {
    res.status(500).json(err)
  }
})

// DELETE POST
router.delete('/:postId', async (req, res) => {
  try {
    const post = await Post.findById(req.params.postId);
    if (post.username === req.body.username){
      try {
        await post.delete();
        res.status(200).json('post deleted')
      } catch(err) {
        res.status(500).json(err)
      }
    } else {
      res.status(401).json('You can delete only your post.')
    }
  } catch(err) {
    res.status(500).json(err)
  }
})

// GET SINGLE POST
router.get('/:postId', async (req, res) => {
  try {
    const post = await Post.findById(req.params.postId);
    res.status(200).json(post)
  } catch(err) {
    res.status(500).json(err)
  }
})

// GET ALL POSTS
router.get('/', async (req, res) => {
  const username = req.query.user;
  const category = req.query.category
  try {
    let posts;
    if (username) {
      posts = await Post.find({username})
    } else if (category) {
      posts = await Post.find({categories: {
        $in: [category]
      }})
    } else {
      posts = await Post.find();
    }
    res.status(200).json(posts)
  } catch(err) {
    res.status(500).json(err)
  }
})

module.exports = router;