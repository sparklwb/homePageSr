const sql = require("../sql");
const dbApi = require("../utils/dbApi.js");
const comRes = require("../utils/comRes.js");
module.exports = {
  addBlog: function(req, res) {
    const param = [req.body.title, req.body.cover, req.body.description, req.body.content, req.body.tags, req.body.auth];
    dbApi(
      sql.addBlog,
      param,
      function(result) {
        comRes(res, "1", "操作成功", {});
      },
      function(err) {
        comRes(res, "0", "操作失败", err);
      }
    );
  },
  getTags: function(req, res) {
    dbApi(
      sql.getTags,
      [],
      function(result) {
        comRes(res, "1", "操作成功", result);
      },
      function(err) {
        comRes(res, "0", "操作失败", err);
      }
    );
  }
};
