const sql = require("../sql");
const dbApi = require("../utils/dbApi.js");
const comRes = require("../utils/comRes.js");
module.exports = {
  login: function(req, res) {
    const param = [req.body.username];
    dbApi(
      sql.login,
      param,
      function(result) {
        if (result[0] && result[0].password === req.body.password) {
          comRes(res, "1", "操作成功", {});
        } else {
          comRes(res, "2", "用户名密码错误", {});
        }
      },
      function(err) {
        comRes(res, "0", "操作失败", err);
      }
    );
  }
};
