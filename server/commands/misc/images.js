require('../../config');
const Post = require('../../models/post');

async function command() {
  const posts = await Post.find();

  posts.forEach(async (post) => {
    post.images[0].width = 1200;
    post.images[0].height = 700;
    console.log(posts);
    await post.save();
  });
}

command();
