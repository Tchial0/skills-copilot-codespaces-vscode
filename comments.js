// create web server
const express = require('express');
const app = express();

// import comments data
const comments = require('./data/comments');

// import posts data
const posts = require('./data/posts');

// get comments
app.get('/comments', (req, res) => {
  res.json(comments);
});

// get comments by post id
app.get('/posts/:postId/comments', (req, res) => {
  const postId = Number(req.params.postId);
  const postComments = comments.filter(comment => comment.post_id === postId);
  res.json(postComments);
});

// get posts
app.get('/posts', (req, res) => {
  res.json(posts);
});

// get post by id
app.get('/posts/:postId', (req, res) => {
  const postId = Number(req.params.postId);
  const post = posts.find(post => post.id === postId);
  if (post) {
    res.json(post);
  } else {
    res.status(404).json({ message: 'Post not found' });
  }
});

// listen to port 4001
app.listen(4001, () => {
  console.log('Server is listening on port 4001');
});
