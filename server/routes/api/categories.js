const { Router } = require('express');
const Categories = require('../../models/categories');

const router = Router();

router.get('/get/:name', async (req, res) => {
  const pipeline = [
    {
      $match: {
        name: req.params.name,
      },
    },
    {
      $sort: {
        priority: 1,
      },
    },
  ];

  if (req.query.include_items) {
    pipeline.push({
      $lookup: {
        from: 'items',
        localField: 'items',
        foreignField: '_id',
        pipeline: [
          {
            $sort: {
              priority: 1,
            },
          },
        ],
        as: 'items',
      },
    });
  }

  const payload = await Categories.aggregate(pipeline);

  res
    .status(200)
    .json({
      success: true,
      message: '',
      data: payload[0],
    })
    .end();
});

router.get('/list', async (req, res) => {
  const pipeline = [
    {
      $match: {},
    },
    {
      $sort: {
        priority: 1,
      },
    },
  ];

  if (req.query.include_items) {
    pipeline.push({
      $lookup: {
        from: 'items',
        localField: 'items',
        foreignField: '_id',
        pipeline: [
          {
            $sort: {
              priority: 1,
            },
          },
        ],
        as: 'items',
      },
    });
  }

  const payload = await Categories.aggregate(pipeline);

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
