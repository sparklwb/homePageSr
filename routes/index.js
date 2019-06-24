const upload = require("./upload.js");
const tags = require("./tags.js");
const blog = require("./blog.js");
const auth = require("./auth");
module.exports = function(app) {
  app.route("/blog/upload").post(upload);
  app
    .route("/blog/tags")
    .post(tags.addTags)
    .get(tags.getTags);
  app.route("/blog").post(blog.addBlog);
  app.route("/blog/login").post(auth.login);
  app.route("/blog/page").post(blog.getBlogByPage);
  app.route("/blog/:id").post(blog.updateBlog);
};
