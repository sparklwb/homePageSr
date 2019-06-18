const qiniu = require("qiniu");
const formidable = require("formidable");
const comRes = require("../utils/comRes");

function upToQiniu(path, name, res) {
  var accessKey = "mnI2TGKTHZCqs8TLS95uBmBPMqIwt7K_UdysdfY0";
  var secretKey = "S9iG4HCWj79ClKENPKL7kboW0FZ14fuQVONPcS2T";
  var mac = new qiniu.auth.digest.Mac(accessKey, secretKey);

  var options = {
    scope: "blog"
  };

  var putPolicy = new qiniu.rs.PutPolicy(options);
  var uploadToken = putPolicy.uploadToken(mac);

  var config = new qiniu.conf.Config();
  config.zone = qiniu.zone.Zone_z0;

  var localFile = path;
  var formUploader = new qiniu.form_up.FormUploader(config);
  var putExtra = new qiniu.form_up.PutExtra();
  var key = name;

  formUploader.putFile(uploadToken, key, localFile, putExtra, function(respErr, respBody, respInfo) {
    if (respErr) {
      throw respErr;
    }
    if (respInfo.statusCode == 200) {
      comRes(res, "1", "上传成功", {});
    } else {
      comRes(res, "0", respInfo.statusCode, {});
    }
  });
}

module.exports = function(req, res) {
  var form = new formidable.IncomingForm();
  form.parse(req, function(err, fields, files) {
    upToQiniu(files.file.path, files.file.name, res);
  });
};
