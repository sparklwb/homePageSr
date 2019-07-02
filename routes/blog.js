const sql = require("../sql");
const dbApi = require("../utils/dbApi.js");
const comRes = require("../utils/comRes.js");
module.exports = {
  addBlog: function(req, res) {
    const param = [req.body.title, req.body.cover, req.body.keywords, req.body.description, req.body.content, req.body.tags, req.body.auth];
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
  updateBlog: function(req, res) {
    const param = [req.body.title, req.body.cover, req.body.keywords, req.body.description, req.body.content, req.body.tags, req.body.auth, req.params.id];
    dbApi(
      sql.updateBlog,
      param,
      function(result) {
        comRes(res, "1", "操作成功", {});
      },
      function(err) {
        comRes(res, "0", "操作失败", err);
      }
    );
  },
  getBlogById: function(req, res) {
    const param = [req.params.id];
    dbApi(
      sql.getBlogById,
      param,
      function(result) {
        comRes(res, "1", "操作成功", result);
      },
      function(err) {
        comRes(res, "0", "操作失败", err);
      }
    );
  },
  getBlogByPage: function(req, res) {
    const condi = `WHERE tags like ${req.body.tagId ? "'%" + req.body.tagId + "%'" : "'%'"} AND title like ${req.body.title ? "'%" + req.body.title + "%'" : "'%'"}`;
    const sql0 = "SELECT * FROM blog " + condi + " order by id desc limit ?,?";
    dbApi(
      sql0,
      [(req.body.pageNum - 1) * req.body.pageSize, req.body.pageSize],
      function(result) {
        dbApi(
          sql.getBlogNum,
          [],
          function(result2) {
            const obj = {
              total: JSON.parse(JSON.stringify(result2))[0]["count(*)"],
              data: result
            };
            comRes(res, "1", "操作成功", obj);
          },
          function(err) {
            comRes(res, "0", "操作失败", err);
          }
        );
      },
      function(err) {
        comRes(res, "0", "操作失败", err);
      }
    );
  }
};
