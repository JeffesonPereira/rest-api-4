// postService.js
const { getDbInstance } = require('../infra/database');

exports.getPosts = async function () {
  const db = await getDbInstance();
  return db.query('select * from blog.post');
};

exports.getPost = async function (id) {
  const db = await getDbInstance();
  return db.oneOrNone('select * from blog.post where id = $1', [id]);
};

exports.getPostByTitle = async function (title) {
  const db = await getDbInstance();
  return db.oneOrNone('select * from blog.post where title = $1', [title]);
};

exports.savePost = async function (post) {
  const db = await getDbInstance();
  return db.one('insert into blog.post (title, content) values ($1, $2) returning *', [post.title, post.content]);
};

exports.updatePost = async function (id, post) {
  const db = await getDbInstance();
  return db.none('update blog.post set title = $1, content = $2 where id = $3', [post.title, post.content, id]);
};

exports.deletePost = async function (id) {
  const db = await getDbInstance();
  return db.none('delete from blog.post where id = $1', [id]);
};
