const express = require('express')
const posts = require('../controllers/posts.controller');
const postList = require('../models/post.model')


const router = express.Router();

router.get('/', (req, res) => {
    // res.render('layout')
    res.redirect('/posts')
});

router.get('/new', (req, res) => {
    res.render('posts/new')
});

router.post('/new', posts.new);

router.get('/posts', posts.list);

router.get('/posts/:id', posts.detail);

router.get('/posts/:id/delete', posts.delete);

router.post('/posts/:id/delete', posts.delete);

router.get('/posts/:id/edit', posts.edit);

router.post('/posts/edit', posts.save);


// GET /posts/:id: render post detail.
// GET /posts/new: render HTML form to create a new post.
// POST /posts: create a new post and redirect to post detail.
// GET /posts/:id/edit: render HTML form to edit post.
// POST /posts/:id: edit post and redirect to post detail.
// POST /posts/:id/delete: delete post and redirect to posts list.





module.exports = router;