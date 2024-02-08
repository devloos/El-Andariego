const { Router } = require('express');
const Posts = require('../../models/posts');

const router = Router();

router.get('/list', async (req, res) => {
  const posts = await Posts.find();

  res
    .status(200)
    .json({
      success: true,
      message: '',
      data: posts,
    })
    .end();
});

router.get('/:id', async (req, res) => {
  const post = await Posts.findOne({ _id: req.params.id });

  if (post === undefined) {
    res
      .status(400)
      .json({
        success: false,
        message: `Post with id: ${req.params.id} was not found.`,
        data: {},
      })
      .end();

    return;
  }

  res
    .status(200)
    .json({
      success: true,
      message: '',
      data: post,
    })
    .end();
});

module.exports = router;
