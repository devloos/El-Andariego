import { MongoClient } from "mongodb";

let collection = null;

export const handler = async (event) => {
  if (!collection) {
    const client = await MongoClient.connect(process.env.MONGODB_URI);

    const db = client.db("el-andariego");
    collection = db.collection("categories");
  }

  const pipeline = [
    {
      $match: {},
    },
    {
      $sort: {
        priority: 1,
      },
    },
    {
      $lookup: {
        from: "items",
        localField: "items",
        foreignField: "_id",
        pipeline: [
          {
            $sort: {
              priority: 1,
            },
          },
        ],
        as: "items",
      },
    },
  ];

  const categories = await collection.aggregate(pipeline).toArray();

  return {
    statusCode: 200,
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      message: "Categories found successfully.",
      success: true,
      data: categories,
    }),
  };
};
