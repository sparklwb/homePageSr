const upload = require("./upload.js");
const tags = require("./tags.js");
module.exports = function(app) {
  app.route("/blog/upload").post(upload);
  app
    .route("/blog/tags")
    .post(tags.addTags)
    .get(tags.getTags);
};
