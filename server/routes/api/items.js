const { Router } = require('express');
const Items = require('../../models/items');

const router = Router();

router.get('/get/:id', async (req, res) => {
  const pipeline = [
    {
      $match: {
        _id: req.params.id,
      },
    },
  ];

  const payload = await Items.aggregate(pipeline);

  res
    .status(200)
    .json({
      success: true,
      message: '',
      data: payload[0],
    })
    .end();
});

router.post('/update-likes', async (req, res) => {
  const _id = req.body._id;

  if (_id === undefined) {
    res
      .status(400)
      .json({
        success: false,
        message: 'Id was not provided.',
        data: {},
      })
      .end();

    return;
  }

  const filter = {
    _id,
  };

  const likes = req.body.likes;

  if (likes === undefined) {
    res
      .status(400)
      .json({
        success: false,
        message: 'Likes was not provided.',
        data: {},
      })
      .end();

    return;
  }

  if (likes < 0) {
    res
      .status(400)
      .json({
        success: false,
        message: 'Likes cannot be less then 0.',
        data: {},
      })
      .end();

    return;
  }

  const update = { likes };

  const payload = await Items.findOneAndUpdate(filter, update, {
    new: true,
  });

  res
    .status(200)
    .json({
      success: true,
      message: 'Updated likes on platillo.',
      data: payload,
    })
    .end();
});

router.get('/list', async (req, res) => {
  const pipeline = [
    {
      $match: {},
    },
  ];

  const payload = await Items.aggregate(pipeline);

  res
    .status(200)
    .json({
      success: true,
      message: '',
      data: payload,
    })
    .end();
});

module.exports = router;
