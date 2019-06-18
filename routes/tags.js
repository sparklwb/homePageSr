const sql = require("../sql");
const dbApi = require("../utils/dbApi.js");
const comRes = require("../utils/comRes.js");
module.exports = {
  addTags: function(req, res) {
    const param = [req.body.name, req.body.textcolor, req.body.bgcolor];
    dbApi(
      sql.addTags,
      param,
      function(result) {
        comRes(res, "1", "操作成功", {});
      },
      function(err) {
        comRes(res, "0", "操作失败", err);
      }
    );
  },
  getTagsByPage: function(req, res) {
    const param = [(req.body.pageNum - 1) * req.body.pageSize, req.body.pageSize];
    dbApi(
      sql.getTagsByPage,
      param,
      function(result) {
        dbApi(
          sql.getAllTagsNum,
          [],
          function(total) {
            comRes(res, "1", "操作成功", { rows: result, total: total[0]["COUNT(*)"] });
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
