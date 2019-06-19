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
