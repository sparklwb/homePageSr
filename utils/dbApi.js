module.exports = function(sql, param, success, error) {
  const mysql = require("mysql");
  let connect = null;
  connect = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "za123123",
    port: "3306",
    database: "homepage"
  });

  connect.connect(function(err) {
    if (err) {
      res.send("数据库链接错误");
    } else {
      connect.query(sql, param, function(err, result) {
        if (err) {
          error(err);
        } else {
          success(result);
          connect.end();
        }
      });
    }
  });
};
