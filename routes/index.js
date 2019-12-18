const express = require('express');
const router  = express.Router();

const Post = require('../models/post.js');

/* GET home page. */
router.get('/', (req, res, next) => {

  Post.find().then(posts=>{

    res.render('index', {
      title: 'Lab - Tumblr by Elisa',
      user: req.user,
      posts:posts,
    });

  })

  
});

module.exports = router;
