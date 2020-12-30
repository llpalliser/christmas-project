const posts = require('../models/post.model')

module.exports.new = (req, res) => {
    const { title, image, text } = req.body;
    posts.create({
        title: title,
        image: image,
        text: text
    })
    res.redirect('posts');
}

module.exports.list = (req, res) => {
    const tposts = posts.posts
    res.render('posts/list', {
        posts: tposts
    });
}

module.exports.detail = async (req, res) => {
    const { id } = req.params;
    const post = await posts.findById(id);
    res.render('posts/detail', {
        post: post
    });
}

module.exports.delete = async (req, res) => {
    const { id } = req.params;
    await posts.findByIdAndDelete(id);
    res.redirect('/posts');
}

module.exports.edit = async (req, res) => {
    const { id } = req.params;
    const post = await posts.findById(id);
    res.render('posts/edit', {
        post: post
    });
}

module.exports.save = async (req, res, next) => {
    console.log("edit")
    const { id } = req.params;
    const { title, image, text } = req.body;
    const postEdited = {
        title: title,
        image: image,
        text: text
    }
  await posts.findByIdAndUpdate(id, postEdited);

  console.log(postEdited)
    res.redirect('/posts');
}
